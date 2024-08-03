import type { Metadata } from "next";
import Footer from "@/ui/Footer";
import Header from "@/ui/Header";
import { zillaSlab } from "@/ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "ASPA - Auckland Student Pool Association",
  description: "ASPA Home: View ASPA Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${zillaSlab.className} antialiased`}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
