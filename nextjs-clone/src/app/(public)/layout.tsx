import React from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}
