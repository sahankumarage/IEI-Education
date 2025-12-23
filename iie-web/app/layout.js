import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "IIE - International Institute of English | Think in English",
  description: "We don't teach English. We train you to think in English. Join Sri Lanka's premier English training institute using immersive learning methods.",
  keywords: "English institute, English training, IELTS, spoken English, Colombo, Sri Lanka, think in English",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
