import Image from "next/image"

const admins = [
  { name: "이원중", role: "대표행정사", photo: "/team/leewj.jpg" },
  { name: "정유선", role: "행정사", photo: "/team/jungyus.jpg" },
  { name: "한경택", role: "행정사", photo: "/team/hankt.jpg" },
  { name: "김정은", role: "행정사", photo: "/team/kimje.jpg" },
  { name: "이시정", role: "행정사", photo: "/team/leesj.jpg" },
  { name: "정희정", role: "행정사", photo: "/team/junghj.jpg" },
]

const staff = [
  { name: "백승수", role: "사무장", photo: "/team/baekss.jpg" },
  { name: "김영주", role: "실장", photo: "/team/kimyj.jpg" },
  { name: "허경", role: "실장", photo: "/team/hukyung.jpg" },
]

export function Team() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-4">
            전문가 팀
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            인허가 전문 행정사 & 실무진
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            다양한 인허가 분야의 실무 노하우를 갖춘 전문가 팀이 고객의 성공을 지원합니다.
          </p>
        </div>

        {/* 행정사 */}
        <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">행정사</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {admins.map((member) => (
            <div key={member.name} className="text-center group">
              <div className="w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden border-2 border-slate-200 group-hover:border-blue-400 transition-colors">
                <Image
                  src={member.photo}
                  alt={member.name}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-semibold text-slate-900 text-sm">{member.name}</h4>
              <p className="text-xs text-slate-500">{member.role}</p>
            </div>
          ))}
        </div>

        {/* 사무장 / 실장 */}
        <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">사무장 · 실장</h3>
        <div className="grid grid-cols-3 gap-6 max-w-md mx-auto">
          {staff.map((member) => (
            <div key={member.name} className="text-center group">
              <div className="w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden border-2 border-slate-200 group-hover:border-blue-400 transition-colors">
                <Image
                  src={member.photo}
                  alt={member.name}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-semibold text-slate-900 text-sm">{member.name}</h4>
              <p className="text-xs text-slate-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
