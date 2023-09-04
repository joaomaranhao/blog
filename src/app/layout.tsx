import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "../components/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "João Maranhão",
  description:
    "Software Engineer, working with Python, Typescript, AWS, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          "${inter.className} text-slate-800 dark:bg-slate-800 dark:text-slate-100"
        }
      >
        <Navbar />
        <div className="max-w-5xl m-auto px-6 lg:px-0">{children}</div>
      </body>
    </html>
  );
}
