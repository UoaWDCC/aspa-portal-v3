import React from "react";
import Footer from "@/ui/Footer";
import Header from "@/ui/Header";
import { zillaSlab } from "@/ui/fonts";
import "./globals.css";
import BallManager from "@/ui/utils/BallManager";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ASPA - Auckland Student Pool Association",
  description: "ASPA Home: View ASPA Landing Page",
  icons: {
    icon: '/icon.ico'
  }
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${zillaSlab.className} antialiased`}>
        <Header />
        <main>
          <BallManager />
          <div className="child-content">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;