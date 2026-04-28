// One-off script: applies the quote_inquiries migration to Supabase.
// Usage: npx tsx scripts/apply-quote-migration.ts
import { config as loadEnv } from "dotenv"
loadEnv({ path: ".env.local" })
loadEnv()
import fs from "node:fs"
import path from "node:path"
import { createClient } from "@supabase/supabase-js"

async function main() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SECRET_KEY
  if (!url || !key) throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SECRET_KEY")

  const sqlPath = path.join(process.cwd(), "supabase/migrations/20260415_quote_inquiries.sql")
  const sql = fs.readFileSync(sqlPath, "utf8")

  const supabase = createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  })

  // Use PostgREST RPC? Supabase JS doesn't have raw-SQL. Fall back to REST via fetch.
  const res = await fetch(url.replace(/\/?$/, "") + "/rest/v1/rpc/exec_sql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: key,
      Authorization: "Bearer " + key,
    },
    body: JSON.stringify({ sql }),
  })
  if (res.ok) {
    console.log("migration applied via exec_sql RPC")
    return
  }

  // If RPC missing, print instructions — most Supabase projects don't expose it.
  console.error("\nSupabase REST did not have exec_sql(sql text) RPC.")
  console.error("Apply this file manually via Supabase dashboard → SQL editor:\n")
  console.error("  " + sqlPath + "\n")
  console.error(sql)

  // Also do a sanity check: can we read from the table?
  const probe = await supabase.from("quote_inquiries").select("id").limit(1)
  if (!probe.error) {
    console.log("\nTable already exists — migration appears to be applied.")
  } else {
    console.log("\nTable not present yet:", probe.error.message)
  }
  process.exit(1)
}

main().catch((e) => {
  console.error("FAIL:", e?.message || e)
  process.exit(1)
})
