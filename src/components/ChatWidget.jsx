import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, ArrowRight, ArrowLeft, Check, Building2, Mail, User2, SendHorizonal } from "lucide-react";

export default function ChatWidget({
  whatsappNumber = "6285722511172",
  adminEmail = "halo@devsomnia.com",
  services = [
    "Jasa Website Landing Page",
    "Jasa Website Company Profile",
    "Jasa Website Sekolah",
    "Jasa Website Ecommerce",
    "Jasa Website Custom",
    "Google Ads",
    "Tiktok Ads",
    "Meta Ads",
    "Jasa Design",
    "Desain Logo",
    "Desain Banner",
    "Desain Sosmed",
    "SEO",
    "Artikel Pilar",
    "Backlink",
  ],
}) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const totalSteps = 4;
  const progress = useMemo(() => Math.round(((step + 1) / totalSteps) * 100), [step]);

  const canNext = useMemo(() => {
    if (step === 0) return form.name.trim() && /.+@.+\..+/.test(form.email);
    if (step === 1) return form.company.trim().length > 1;
    if (step === 2) return form.service.trim().length > 0;
    if (step === 3) return form.message.trim().length > 3;
    return false;
  }, [step, form]);

  const reset = () => {
    setForm({ name: "", email: "", company: "", service: "", message: "" });
    setStep(0);
  };

  const closeWidget = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    const text = `Halo Admin,%0A%0A` +
      `Nama: ${form.name}%0A` +
      `Email: ${form.email}%0A` +
      `Perusahaan: ${form.company}%0A` +
      `Layanan: ${form.service}%0A` +
      `Pesan: ${encodeURIComponent(form.message)}`;

    const waUrl = `https://wa.me/${whatsappNumber}?text=${text}`;
    const win = window.open(waUrl, "_blank");
    if (!win) {
      const subject = encodeURIComponent("Inquiry dari Website");
      const body = text.replaceAll("%0A", "%0D%0A");
      window.location.href = `mailto:${adminEmail}?subject=${subject}&body=${body}`;
    }

    setOpen(false);
  };

  return (
    <div className="fixed right-5 bottom-5 z-[60]">
      <button
        onClick={() => setOpen(true)}
        className="group relative inline-flex items-center justify-center rounded-full w-14 h-14 shadow-lg bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300"
        aria-label="Chat Admin"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="absolute -top-2 -right-2 text-[10px] px-1.5 py-0.5 rounded-full bg-white text-indigo-700 border border-indigo-200 shadow">Chat</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            key="backdrop"
            className="fixed inset-0 bg-black/20 backdrop-blur-[1px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeWidget}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="absolute bottom-20 right-0 w-[92vw] max-w-sm"
            role="dialog"
            aria-modal="true"
          >
            <div className="relative rounded-2xl bg-white shadow-2xl border border-gray-100 overflow-hidden">
              <div className="px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5" />
                    <span className="font-semibold">Chat Admin</span>
                  </div>
                  <button onClick={closeWidget} className="p-1 rounded hover:bg-white/10">
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="mt-2">
                  <div className="flex items-center justify-between text-xs text-white/80">
                    <span>Menuju chat admin</span>
                    <span>{progress}%</span>
                  </div>
                  <div className="mt-1 h-2 rounded-full bg-white/20 overflow-hidden">
                    <div
                      className="h-full bg-white"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="p-4">
                {step === 0 && (
                  <Step1 form={form} setForm={setForm} />
                )}
                {step === 1 && (
                  <Step2 form={form} setForm={setForm} />
                )}
                {step === 2 && (
                  <Step3 form={form} setForm={setForm} services={services} />
                )}
                {step === 3 && (
                  <Step4 form={form} setForm={setForm} />
                )}
              </div>

              <div className="px-4 pb-4 flex items-center justify-between gap-2">
                <button
                  onClick={() => setStep((s) => Math.max(0, s - 1))}
                  disabled={step === 0}
                  className="inline-flex items-center gap-1 px-3 py-2 rounded-lg border border-gray-300 text-gray-700 disabled:opacity-40 hover:bg-gray-50"
                >
                  <ArrowLeft className="h-4 w-4" /> Kembali
                </button>

                {step < totalSteps - 1 ? (
                  <button
                    onClick={() => canNext && setStep((s) => Math.min(totalSteps - 1, s + 1))}
                    disabled={!canNext}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white disabled:opacity-40 hover:bg-indigo-700"
                  >
                    Lanjut
                    <ArrowRight className="h-4 w-4" />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={!canNext}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 text-white disabled:opacity-40 hover:bg-emerald-700"
                  >
                    Kirim ke Admin
                    <SendHorizonal className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({ label, children, hint, required }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-gray-800">{label}{required && <span className="text-red-500"> *</span>}</span>
      <div className="mt-1">{children}</div>
      {hint && <p className="mt-1 text-xs text-gray-500">{hint}</p>}
    </label>
  );
}

function Input({ icon, ...props }) {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
        {icon}
      </div>
      <input
        {...props}
        className="w-full rounded-lg border border-gray-300 pl-9 pr-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
      />
    </div>
  );
}

function Textarea(props) {
  return (
    <textarea
      {...props}
      className="w-full rounded-lg border border-gray-300 px-3 py-2 min-h-[110px] resize-y focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
    />
  );
}

function Step1({ form, setForm }) {
  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-600">Isi data Anda untuk memulai percakapan.</p>
      <Field label="Nama" required>
        <Input
          icon={<User2 className="h-4 w-4" />}
          type="text"
          placeholder="Nama lengkap"
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
        />
      </Field>

      <Field label="Email" required hint="Kami gunakan untuk follow-up bila diperlukan.">
        <Input
          icon={<Mail className="h-4 w-4" />}
          type="email"
          placeholder="email@perusahaan.com"
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
        />
      </Field>
    </div>
  );
}

function Step2({ form, setForm }) {
  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-600">Ceritakan singkat tentang organisasi Anda.</p>
      <Field label="Nama Perusahaan" required>
        <Input
          icon={<Building2 className="h-4 w-4" />}
          type="text"
          placeholder="Contoh: Devsomnia Studio"
          value={form.company}
          onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
        />
      </Field>
    </div>
  );
}

function Step3({ form, setForm, services }) {
  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-600">Pilih layanan yang Anda butuhkan.</p>
      <Field label="Layanan" required>
        <div className="relative">
          <select
            data-variant="native"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 pr-8 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
            value={form.service}
            onChange={(e) => setForm((f) => ({ ...f, service: e.target.value }))}
          >
            <option value="" disabled>Pilih layanan</option>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">▾</span>
        </div>
      </Field>

      <div className="rounded-lg bg-gray-50 border border-gray-200 p-3 text-sm text-gray-700">
        <div className="flex items-center gap-2">
          <Check className="h-4 w-4 text-emerald-600" />
          <span>Data sementara tersimpan.</span>
        </div>
      </div>
    </div>
  );
}

function Step4({ form, setForm }) {
  return (
    <div className="space-y-3">
      <p className="text-sm text-gray-600">Tulis kebutuhan atau pertanyaan Anda.</p>
      <Field label="Pesan" required>
        <Textarea
          placeholder="Ceritakan kebutuhan Anda secara singkat dan jelas..."
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
        />
      </Field>

      <div className="mt-2 rounded-lg border border-gray-200 bg-gray-50 p-3 text-sm text-gray-700 space-y-1">
        <div className="flex items-center justify-between"><span className="text-gray-500">Nama</span><span className="font-medium">{form.name || '-'}</span></div>
        <div className="flex items-center justify-between"><span className="text-gray-500">Email</span><span className="font-medium">{form.email || '-'}</span></div>
        <div className="flex items-center justify-between"><span className="text-gray-500">Perusahaan</span><span className="font-medium">{form.company || '-'}</span></div>
        <div className="flex items-center justify-between"><span className="text-gray-500">Layanan</span><span className="font-medium">{form.service || '-'}</span></div>
      </div>
    </div>
  );
}
