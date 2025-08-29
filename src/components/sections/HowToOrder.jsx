// File: src/components/sections/HowToOrder.jsx

import { Globe, MessageCircle, ClipboardList, Hammer, Rocket } from "lucide-react";

export default function HowToOrder() {
  const steps = [
    {
      icon: Globe,
      title: "Kunjungi Website Kami",
      desc: "Lihat layanan lengkap kami untuk memahami apa yang sesuai dengan kebutuhan bisnis Anda.",
    },
    {
      icon: MessageCircle,
      title: "Klik Hubungi Kami",
      desc: "Gunakan tombol 'Hubungi Kami' atau ikon WhatsApp di kanan bawah untuk memulai percakapan.",
    },
    {
      icon: ClipboardList,
      title: "Isi Data Singkat",
      desc: "Lengkapi form singkat agar kami tahu informasi dasar tentang proyek Anda.",
    },
    {
      icon: Hammer,
      title: "Proses Pengerjaan",
      desc: "Tim kami akan mengerjakan sesuai kebutuhan dan memberikan update secara berkala.",
    },
    {
      icon: Rocket,
      title: "Website Siap Launching",
      desc: "Setelah selesai, website Anda siap diluncurkan dengan performa optimal.",
    },
  ];

  return (
    <section className="relative py-20 bg-[#1f2b80] text-white">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">
            Cara Order Website di Devsomnia
          </h2>
          <p className="mt-3 text-base md:text-lg text-blue-100">
            Ikuti langkah mudah berikut untuk memulai pembuatan website Anda, langsung terhubung via WhatsApp.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-5">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="relative flex flex-col items-center text-center p-6 rounded-2xl bg-white/10 backdrop-blur-md shadow-lg hover:bg-white/20 transition"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 mb-4">
                <Icon className="h-7 w-7" />
              </div>
              <div className="text-lg font-semibold">{`${i + 1}. ${title}`}</div>
              <p className="mt-2 text-sm text-blue-100">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          {/* <a
            href="https://wa.me/6285722511172?text=Halo%20Devsomnia%2C%20saya%20ingin%20membuat%20website%20company%20profile"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-green-500 px-6 py-3 font-semibold text-white shadow-lg hover:bg-green-600 transition"
          >
            Hubungi via WhatsApp
          </a> */}
        </div>
      </div>
    </section>
  );
}
