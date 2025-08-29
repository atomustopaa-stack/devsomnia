import { Target, TrendingUp, FileBarChart, ShieldCheck } from "lucide-react";

export default function WhyUsGoogleAds() {
  const features = [
    {
      icon: <Target className="w-8 h-8 text-[#1f2b80]" />,
      title: "Strategi Tepat Sasaran",
      desc: "Iklan menjangkau audiens sesuai target bisnis Anda, bukan sekadar banyak klik.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#1f2b80]" />,
      title: "ROI Maksimal",
      desc: "Setiap budget dioptimalkan untuk menghasilkan konversi dan penjualan nyata.",
    },
    {
      icon: <FileBarChart className="w-8 h-8 text-[#1f2b80]" />,
      title: "Laporan Transparan",
      desc: "Hasil kampanye bisa Anda pantau secara detail dengan data real-time.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#1f2b80]" />,
      title: "Tim Berpengalaman",
      desc: "Didukung spesialis Google Ads yang siap membantu bisnis berkembang pesat.",
    },
  ];

  return (
    <section className="max-w-screen-xl mx-auto px-4 sm:px-8 py-20">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
          Kenapa Harus Devsomnia?
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Dengan pengalaman dan strategi yang matang, kami memastikan iklan Anda tidak hanya tayang, 
          tetapi juga menghasilkan penjualan yang terukur.
        </p>
      </div>

      {/* Grid Keunggulan */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition"
          >
            <div className="flex items-center justify-center w-14 h-14 mx-auto mb-4 rounded-full bg-gray-100">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
