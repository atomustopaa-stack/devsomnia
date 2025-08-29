// src/pages/Blog.jsx
import { useMemo, useState } from "react";
import { MessageCircle, Bookmark, Calendar, Timer } from "lucide-react";

// ====== Dummy Data (12 item total) ======
const CATEGORIES = ["Tutorial", "Tips", "Insight", "Update", "Case Study", "UI/UX"];
const makeDummy = (n = 12) =>
  Array.from({ length: n }, (_, i) => {
    const idx = i + 1;
    const cat = CATEGORIES[i % CATEGORIES.length];
    return {
      id: idx,
      title: `Judul Artikel ${idx}: Cara Optimasi Website Biar Ngebut`,
      excerpt:
        "Ringkasan singkat artikel. Nanti diganti dengan konten asli. Fokus pada value, pain point, dan solusi yang ditawarkan.",
      image:
        `https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop`,
      category: cat,
      readTime: 4 + (idx % 6),
      date: new Date(2025, (idx % 12), (idx % 28) + 1).toISOString(),
      comments: (idx * 7) % 53,
      tags: ["SEO", "Performance", "Frontend"].slice(0, (idx % 3) + 1),
      author: { name: "Tim Devsomnia" },
    };
  });

// ====== Card Component ======
function BlogCard({ post }) {
  const date = useMemo(
    () =>
      new Date(post.date).toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
    [post.date]
  );

  const authorInitials = useMemo(() => {
    return post.author?.name?.split(" ").map((s) => s[0]).join("").slice(0, 2).toUpperCase();
  }, [post.author]);

  return (
    <article className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col">
      {/* Media */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="size-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
          loading="lazy"
        />
        <span className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-medium text-gray-700 shadow">
          <span className="size-2 rounded-full bg-blue-500" />
          {post.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <h3 className="text-base sm:text-lg font-semibold leading-snug line-clamp-2 group-hover:text-blue-600 transition-colors">
          {post.title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-3">{post.excerpt}</p>

        {/* Meta */}
        <div className="mt-1 flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-3">
            <div className="size-7 rounded-full bg-gray-100 grid place-items-center font-semibold text-gray-700">
              {authorInitials}
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <Calendar className="size-4" />
              <span>{date}</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1" title="Estimasi baca">
              <Timer className="size-4" />
              <span>{post.readTime} mnt</span>
            </div>
            <div className="flex items-center gap-1" title="Komentar (dummy)">
              <MessageCircle className="size-4" />
              <span>{post.comments}</span>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-1">
          {post.tags?.map((t) => (
            <span key={t} className="px-2 py-1 rounded-md bg-gray-100 text-gray-700 text-xs">
              #{t}
            </span>
          ))}
        </div>

        {/* Actions (placeholder) */}
        <div className="mt-2 flex items-center justify-between">
          <button
            type="button"
            className="px-3 py-2 text-sm font-medium rounded-lg bg-blue-600/90 text-white hover:bg-blue-600 disabled:opacity-60"
            disabled
          >
            Baca
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900"
            disabled
            title="Simpan (contoh)"
          >
            <Bookmark className="size-4" /> Simpan
          </button>
        </div>
      </div>
    </article>
  );
}

// ====== Skeleton ======
function CardSkeleton() {
  return (
    <div className="animate-pulse bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="aspect-[16/10] bg-gray-200" />
      <div className="p-5 space-y-3">
        <div className="h-4 bg-gray-200 rounded w-4/5" />
        <div className="h-3 bg-gray-200 rounded w-full" />
        <div className="h-3 bg-gray-200 rounded w-3/4" />
        <div className="h-8 bg-gray-200 rounded w-24 mt-4" />
      </div>
    </div>
  );
}

// ====== Main Page ======
export default function Blog() {
  const posts = useMemo(() => makeDummy(12), []); // total 12
  const [visible, setVisible] = useState(6); // tampil awal 6 (3 kolom x 2 baris)

  const list = posts.slice(0, visible);
  const hasMore = visible < posts.length;

  const handleLoadMore = () => setVisible(posts.length); // tampilkan sisa 6 sekaligus

  return (
    <>
      {/* ===== Hero: match About (biru #1f2b80 + ornamen) ===== */}
      <section className="relative overflow-hidden text-white">
        {/* warna dasar */}
        <div className="absolute inset-0" style={{ backgroundColor: "#1f2b80" }} />

        {/* glow radial */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-blue-400/30 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-indigo-300/25 blur-3xl"
        />

        {/* grid tipis */}
        <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]">
          <defs>
            <pattern id="grid-blog" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="white" strokeWidth="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-blog)" />
        </svg>

        {/* konten hero */}
        <div className="relative max-w-screen-xl mx-auto px-4 md:px-8 py-16 md:py-20 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-semibold mb-3">
            Blog
          </span>
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight">Artikel & Wawasan Terbaru</h1>
          <span className="mt-3 inline-block h-1 w-20 rounded-full bg-white/70" />
          <p className="mt-6 text-base md:text-lg text-blue-100/90">
            Tulisan dari tim kami tentang website, performa, UI/UX, dan pemasaran digital.
          </p>
        </div>
      </section>

      {/* ===== Grid Artikel ===== */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {list.length === 0
              ? Array.from({ length: 6 }).map((_, i) => <CardSkeleton key={i} />)
              : list.map((p) => <BlogCard key={p.id} post={p} />)}
          </div>

          {/* Load More */}
          {hasMore && (
            <div className="text-center mt-10">
              <button
                onClick={handleLoadMore}
                className="px-6 py-3 rounded-xl bg-gray-900 text-white font-semibold shadow hover:shadow-lg active:scale-[.99] transition"
              >
                Lihat Lainnya
              </button>
              <p className="mt-3 text-sm text-gray-500">
                Menampilkan {visible} dari {posts.length} artikel
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
