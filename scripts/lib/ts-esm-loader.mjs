/**
 * 빌드 스크립트가 lib/*.ts 정본 모듈을 그대로 import 하기 위한 최소 ESM 로더.
 *
 * 왜 필요한가: 서비스 목록 정본은 TypeScript 파일(lib/services-data.ts,
 * lib/i18n/services-i18n.ts)이고, 생성기가 그 값을 *재구현*하면 정본이 둘이 된다
 * (lib/services-catalog.ts 머리말의 금지사항). 그래서 생성기는 정본 모듈을
 * 실행해서 값을 얻는다. 새 의존성은 쓰지 않고 이미 devDep 인 typescript 로
 * 타입만 벗겨 낸다.
 *
 * 하는 일은 두 가지뿐이다.
 *   1) 확장자 없는 상대경로(`./services-data`, `@/lib/...`)를 .ts/.tsx 로 해석
 *   2) .ts/.tsx 를 ts.transpileModule 로 ESM 으로 변환해 넘김
 */
import { readFileSync, existsSync } from 'node:fs'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { join, dirname } from 'node:path'
import ts from 'typescript'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..')
const EXTS = ['.ts', '.tsx', '.mjs', '.js']

export async function resolve(specifier, context, nextResolve) {
  let spec = specifier
  if (spec.startsWith('@/')) spec = pathToFileURL(join(ROOT, spec.slice(2))).href

  if (spec.startsWith('.') || spec.startsWith('file:')) {
    const base = spec.startsWith('file:')
      ? fileURLToPath(spec)
      : join(dirname(fileURLToPath(context.parentURL)), spec)

    for (const candidate of [base, ...EXTS.map((e) => base + e), ...EXTS.map((e) => join(base, 'index' + e))]) {
      if (existsSync(candidate) && !candidate.endsWith('/')) {
        // JSON 원고(lib/industry-pages.generated.ts 가 import)는 load() 에서 default export 로 감싼다
        return { url: pathToFileURL(candidate).href, format: 'module', shortCircuit: true }
      }
    }
  }
  return nextResolve(specifier, context)
}

export async function load(url, context, nextLoad) {
  if (url.endsWith('.json')) {
    return { format: 'module', source: `export default ${readFileSync(fileURLToPath(url), 'utf8')}`, shortCircuit: true }
  }
  if (url.endsWith('.ts') || url.endsWith('.tsx')) {
    const source = readFileSync(fileURLToPath(url), 'utf8')
    const { outputText } = ts.transpileModule(source, {
      compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022, jsx: ts.JsxEmit.Preserve },
      fileName: fileURLToPath(url),
    })
    return { format: 'module', source: outputText, shortCircuit: true }
  }
  return nextLoad(url, context)
}
