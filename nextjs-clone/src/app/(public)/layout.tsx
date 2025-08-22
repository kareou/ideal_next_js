"use client";

import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div>
      {!isHome && <Navigation />}
      {children}
      {!isHome && <Footer />}
    </div>
  );
}
