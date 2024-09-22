import localFont from "next/font/local";
import "./globals.css";

import { Changa } from "next/font/google";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import Sidebar from "@/components/Sidebar";

const changa = Changa({
  subsets: ["latin"],
  weight: ["400", "800"],
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "task 1",
  description: "NextJs task One",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`main ${changa.className} ${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
