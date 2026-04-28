import Image from "next/image"

const messengers = [
  { name: "Kakao Talk", qr: "/qr/kakao.jpg" },
  { name: "WeChat", qr: "/qr/wechat.jpg" },
  { name: "LINE", qr: "/qr/line.jpg" },
  { name: "WhatsApp", qr: "/qr/whatsapp.jpg" },
]

export function Messenger() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
            메신저 상담
          </h2>
          <p className="text-slate-500">
            편하신 메신저로 언제든 상담하세요
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {messengers.map((m) => (
            <div
              key={m.name}
              className="bg-white rounded-xl p-4 text-center border border-slate-200 hover:shadow-md transition-shadow"
            >
              <div className="w-28 h-28 mx-auto mb-3 rounded-lg overflow-hidden border border-slate-100">
                <Image
                  src={m.qr}
                  alt={`${m.name} QR Code`}
                  width={112}
                  height={112}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-sm font-semibold text-slate-900">{m.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
