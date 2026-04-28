import Image from "next/image";

const admins = [
  { name: "이원중", role: "대표행정사", photo: "/team/leewj.jpg" },
  { name: "정유선", role: "행정사", photo: "/team/jungyus.jpg" },
  { name: "한경택", role: "행정사", photo: "/team/hankt.jpg" },
  { name: "김정은", role: "행정사", photo: "/team/kimje.jpg" },
  { name: "이시정", role: "행정사", photo: "/team/leesj.jpg" },
  { name: "정희정", role: "행정사", photo: "/team/junghj.jpg" },
];

const staff = [
  { name: "백승수", role: "사무장", photo: "/team/baekss.jpg" },
  { name: "김영주", role: "실장", photo: "/team/kimyj.jpg" },
  { name: "허경", role: "실장", photo: "/team/hukyung.jpg" },
];

export default function TeamSection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-wv-orange font-bold">
            Our Team
          </div>
          <h2 className="mt-4 text-display-lg font-black text-wv-ink leading-tight">
            인허가 전문 행정사 & 실무진
          </h2>
          <p className="mt-4 text-wv-gray">
            다양한 인허가 분야의 실무 노하우를 갖춘 전문가 팀이 고객의 성공을 지원합니다.
          </p>
        </div>

        {/* 행정사 */}
        <h3 className="text-lg font-black text-wv-ink mb-8 text-center">행정사</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mb-14">
          {admins.map((member) => (
            <div key={member.name} className="text-center group">
              <div className="w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden border-2 border-wv-line group-hover:border-wv-orange transition-colors">
                <Image
                  src={member.photo}
                  alt={member.name}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-bold text-wv-ink text-sm">{member.name}</h4>
              <p className="text-xs text-wv-gray">{member.role}</p>
            </div>
          ))}
        </div>

        {/* 사무장 / 실장 */}
        <h3 className="text-lg font-black text-wv-ink mb-8 text-center">사무장 / 실장</h3>
        <div className="grid grid-cols-3 gap-6 max-w-md mx-auto">
          {staff.map((member) => (
            <div key={member.name} className="text-center group">
              <div className="w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden border-2 border-wv-line group-hover:border-wv-orange transition-colors">
                <Image
                  src={member.photo}
                  alt={member.name}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-bold text-wv-ink text-sm">{member.name}</h4>
              <p className="text-xs text-wv-gray">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
