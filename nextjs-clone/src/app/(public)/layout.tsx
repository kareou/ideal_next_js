"use client";

import React from "react";
import Navbar from "../../components/MainLanderComponents/Navbar";
import Box from "../../components/MainLanderComponents/HeaderContacts";
import Footer from "../../components/MainLanderComponents/Footer";
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
      {!isHome && <Box />}
      {!isHome && <Navbar />}
      {children}
      {!isHome && <Footer />}
      
    </div>  
  );
}
