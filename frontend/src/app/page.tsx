'use client';

import Image from "next/image";
import NavLinks from "./components/nav-links";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NavLinks />;
    </main>
  );
}
