import type { Metadata } from "next";
import { Monda } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const monda = Monda({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
  variable: "--font-monda",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AppMash",
  description: "Creative Agency Website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${monda.variable} scroll-smooth`}>
      <body className="antialiased font-monda min-h-screen flex flex-col">
        {/* Sticky Navbar */}
        <header className="flex-none">
          <Navbar />
        </header>

        {/* Main content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="flex-none">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
