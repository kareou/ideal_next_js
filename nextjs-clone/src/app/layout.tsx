import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
    openGraph: {
    url: "https://www.idealtax.com",
    type: "website",
    title: "Tax Debt Attorney Services - Trust the Experts at Ideal Tax",
    description: "At Ideal Tax, we offer a Fresh Start Program that can help you get relief from your IRS tax debt. We have over 1 years of experience and an A+ BBB rating. Contact us for a free consultation.",
    images: [
      {
        url: "https://www.idealtax.com/wp-content/uploads/2021/12/Logo_DarkTheme_transparent_small.png",
        alt: "Ideal Tax Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@idealtax", // Add your Twitter handle if available
    title: "Tax Debt Attorney Services - Trust the Experts at Ideal Tax",
    description: "At Ideal Tax, we offer a Fresh Start Program that can help you get relief from your IRS tax debt. We have over 1 years of experience and an A+ BBB rating. Contact us for a free consultation.",
    images: ["https://www.idealtax.com/wp-content/uploads/2021/12/Logo_DarkTheme_transparent_small.png"]
  },
  alternates: {
    canonical: "https://www.idealtax.com"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
