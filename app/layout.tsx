import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fikih Aldiansyah — IT Support & Web Developer",
  description:
    "Mahasiswa Informatika berfokus pada IT support dan pengembangan web dengan pengalaman di React.js, Node.js, serta jaringan Cisco CCNA.",
  keywords: ["IT Support", "Web Developer", "React.js", "Node.js", "Cisco CCNA", "Fikih Aldiansyah"],
  authors: [{ name: "Fikih Aldiansyah" }],
  openGraph: {
    title: "Fikih Aldiansyah — IT Support & Web Developer",
    description:
      "Mahasiswa Informatika berfokus pada IT support dan pengembangan web dengan pengalaman di React.js, Node.js, serta jaringan Cisco CCNA.",
    url: "https://fikihaldiansyah.vercel.app/",
    siteName: "Fikih Aldiansyah",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fikih Aldiansyah — IT Support & Web Developer",
    description:
      "Mahasiswa Informatika berfokus pada IT support dan pengembangan web.",
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
