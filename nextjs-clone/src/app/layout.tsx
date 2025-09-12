import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// import Footer from "../../components/Footer";
// import Navigation from "../../components/Navigation";

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
    title: "Ideal Tax | Tax Debt Resolution Services",
    description:
      "Through our process we qualify clients for many tax relief programs to end tax issues once and for all. 15 years in business and an A+ BBB rating. Contact us for a free consultation.",
    images: [
      {
        url: "https://www.idealtax.com/wp-content/uploads/2021/12/Logo_DarkTheme_transparent_small.png",
        alt: "Ideal Tax Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@idealtax", // Add your Twitter handle if available
    title: "Ideal Tax | Tax Debt Resolution Services",
    description:
      "Through our process we qualify clients for many tax relief programs to end tax issues once and for all. 15 years in business and an A+ BBB rating. Contact us for a free consultation.",
    images: [
      "https://www.idealtax.com/wp-content/uploads/2021/12/Logo_DarkTheme_transparent_small.png",
    ],
  },
  alternates: {
    canonical: "https://www.idealtax.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" /> 
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
