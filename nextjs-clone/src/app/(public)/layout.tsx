"use client";

import React from "react";
import Navbar from "../../components/MainLanderComponents/Navbar";
// import Box from "../../components/MainLanderComponents/HeaderContacts";
import FloatingContact from "../../components/MainLanderComponents/HeaderContacts";
import Box1 from "../../components/MainLanderComponents/HeroContactBox";
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
      {/* {!isHome && <Box />} */}
      {!isHome && (
  <>
    <div className="hidden md:block">
      <Box1 />
    </div>

    <div className="block md:hidden">
      <FloatingContact />
    </div>
  </>
)}
      {!isHome && <Navbar />}
      {children}
      {!isHome && <Footer />}
      
    </div>  
  );
}
