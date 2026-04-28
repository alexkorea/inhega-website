import Image from "next/image";

const messengers = [
  { name: "Kakao Talk", qr: "/qr/kakao.jpg" },
  { name: "WeChat", qr: "/qr/wechat.jpg" },
  { name: "LINE", qr: "/qr/line.jpg" },
  { name: "WhatsApp", qr: "/qr/whatsapp.jpg" },
];

export default function MessengerSection() {
  return (
    <section className="py-24 md:py-32 bg-wv-cream">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-wv-orange font-bold">
            Contact
          </div>
          <h2 className="mt-4 text-display-lg font-black text-wv-ink leading-tight">
            메신저 상담
          </h2>
          <p className="mt-4 text-wv-gray">
            편하신 메신저로 언제든 상담하세요
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {messengers.map((m) => (
            <div
              key={m.name}
              className="group rounded-3xl border border-wv-line bg-white p-6 text-center hover:border-wv-orange hover:shadow-lg transition-all duration-300"
            >
              <div className="w-28 h-28 mx-auto mb-4 rounded-2xl overflow-hidden border border-wv-line">
                <Image
                  src={m.qr}
                  alt={`${m.name} QR Code`}
                  width={112}
                  height={112}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-sm font-black text-wv-ink">{m.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
