"use client";

import { useState } from "react";
import {
  MessageCircle,
  Mail,
  Menu,
  X,
  Code2,
  Network,
  ExternalLink,
  ChevronRight,
  Briefcase,
} from "lucide-react";

// GitHub icon as inline SVG (lucide-react renamed/removed this in newer versions)
function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

// LinkedIn icon as inline SVG (lucide-react renamed/removed this in newer versions)
function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const skills = {
  webDev: ["HTML5", "CSS3", "JavaScript", "React.js", "Express.js", "MongoDB"],
  network: ["Cisco", "Git", "Mikrotik", "Postman", "Linux"],
};

const experiences = [
  {
    type: "Studi Independen Bersertifikat",
    role: "Web Developer",
    company: "PT Presentlogic",
    period: "Sep – Des 2024",
    icon: "code",
    points: [
      "Mengembangkan aplikasi web fullstack menggunakan React.js, Node.js, dan Express.js.",
      "Menerapkan clean code, responsive UI, dan deployment ke Firebase/Vercel.",
      "Berkolaborasi dalam tim menggunakan Git & GitHub (branching, pull request, code review).",
      "Mendokumentasikan & menguji RESTful API menggunakan Postman.",
    ],
  },
  {
    type: "Internship",
    role: "IT Product Specialist Intern",
    company: "PT. 521 Indonesia",
    period: "Sep – Nov 2025",
    icon: "briefcase",
    points: [
      "Melakukan riset & uji coba produk teknologi.",
      "Berperan sebagai host konten YouTube perusahaan.",
    ],
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased">
      {/* ── NAV ── */}
      <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/60">
        <div className="max-w-5xl mx-auto px-5 h-14 flex items-center justify-between">
          <span className="font-bold text-white tracking-tight text-[15px]">
            Fikih Aldiansyah
          </span>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-7 text-sm text-slate-400">
            {["About", "Skills", "Experience"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-white transition-colors duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-slate-400 hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden border-t border-slate-800 bg-slate-950">
            <ul className="flex flex-col px-5 py-3 gap-1 text-sm text-slate-400">
              {["About", "Skills", "Experience"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-2 py-2 hover:text-white transition-colors"
                  >
                    <ChevronRight size={14} className="text-blue-500" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section
        id="about"
        className="max-w-5xl mx-auto px-5 pt-20 pb-16 text-center"
      >
        {/* Subtle glow blob */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-24 w-[560px] h-[300px] rounded-full bg-blue-600/10 blur-[100px]"
        />

        <h1 className="relative text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
          Fikih Aldiansyah{" "}
          <span className="text-slate-500 font-light">—</span>
          <br />
          <span className="text-blue-500">IT Support &amp; Web</span>
          <br />
          <span className="text-blue-500">Developer</span>
        </h1>

        <p className="relative mt-5 max-w-lg mx-auto text-slate-400 text-[15px] leading-relaxed">
          Mahasiswa Informatika berfokus pada IT support dan pengembangan web
          dengan pengalaman di React.js, Node.js, serta jaringan Cisco CCNA.
        </p>

        {/* CTA buttons */}
        <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:fikihaldiansyah28@gmail.com"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200 shadow-lg shadow-blue-900/30"
          >
            Hubungi Saya
          </a>
          <a
            href="https://github.com/Merger2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200"
          >
            Lihat GitHub
            <ExternalLink size={13} />
          </a>
        </div>

        {/* Social buttons */}
        <div className="relative mt-6 grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-3">
          {[
            {
              label: "WhatsApp",
              href: "https://wa.me/6285715874267",
              icon: <MessageCircle size={16} />,
              color: "text-green-400",
            },
            {
              label: "Email",
              href: "mailto:fikihaldiansyah28@gmail.com",
              icon: <Mail size={16} />,
              color: "text-red-400",
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/fikih-aldiansyah-a9913427b/",
              icon: <LinkedinIcon size={16} />,
              color: "text-blue-400",
            },
            {
              label: "GitHub",
              href: "https://github.com/Merger2",
              icon: <GithubIcon size={16} />,
              color: "text-slate-300",
            },
          ].map(({ label, href, icon, color }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-sm px-4 py-2.5 rounded-lg transition-all duration-200 min-w-[130px]"
            >
              <span className={color}>{icon}</span>
              {label}
            </a>
          ))}
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="max-w-5xl mx-auto px-5 py-12">
        <h2 className="text-xl font-bold text-white mb-6">Skills</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {/* Web Dev */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Code2 size={14} className="text-blue-500" />
              <span className="text-[11px] font-semibold tracking-widest text-slate-500 uppercase">
                Web Development
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.webDev.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-blue-600/15 text-blue-400 border border-blue-700/30"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Network */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Network size={14} className="text-blue-500" />
              <span className="text-[11px] font-semibold tracking-widest text-slate-500 uppercase">
                Network &amp; Tools
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.network.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-blue-600/15 text-blue-400 border border-blue-700/30"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE + VIDEO ── */}
      <section id="experience" className="max-w-5xl mx-auto px-5 py-12">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left — Experience */}
          <div>
            <h2 className="text-xl font-bold text-white mb-6">Experience</h2>
            <div className="flex flex-col gap-4">
              {experiences.map((exp, i) => (
                <div
                  key={i}
                  className="bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition-colors duration-200"
                >
                  <div className="flex items-center gap-2 mb-1">
                    {exp.icon === "code" ? (
                      <Code2 size={13} className="text-blue-500 shrink-0" />
                    ) : (
                      <Briefcase size={13} className="text-blue-500 shrink-0" />
                    )}
                    <span className="text-[10px] font-semibold tracking-widest text-slate-500 uppercase">
                      {exp.type}
                    </span>
                  </div>
                  <h3 className="font-bold text-white text-[15px] mt-1">
                    {exp.role}
                  </h3>
                  <div className="flex items-center justify-between mt-0.5 mb-3">
                    <span className="text-sm text-blue-500 font-medium">
                      {exp.company}
                    </span>
                    <span className="text-xs text-slate-500">{exp.period}</span>
                  </div>
                  <ul className="space-y-1.5">
                    {exp.points.map((pt, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-[13px] text-slate-400 leading-snug"
                      >
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-blue-600 shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Host & Presenter */}
          <div>
            <h2 className="text-xl font-bold text-white mb-6">
              Host &amp; Presenter Experience
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4">
              {[
                {
                  src: "https://www.youtube.com/embed/Dq0505Yva1M",
                  title: "Podcast SiberMate",
                },
                {
                  src: "https://www.youtube.com/embed/n3nQxSLF8M8",
                  title: "Podcast I3",
                },
              ].map((video) => (
                <div
                  key={video.src}
                  className="aspect-video w-full rounded-xl overflow-hidden border border-slate-800"
                >
                  <iframe
                    src={video.src}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-slate-800 mt-10">
        <div className="max-w-5xl mx-auto px-5 py-6 text-center text-xs text-slate-600">
          © 2026 Fikih Aldiansyah. All rights reserved.
        </div>
      </footer>
    </main>
  );
}