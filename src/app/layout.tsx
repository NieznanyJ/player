

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/footer/Footer";
import MobileNavigation from "@/components/navbar/mobileNavbar/MobileNavigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movie player aplication",
  description: "Browse movies and TV shows",
};

export default function RootLayout({
  children,
  
}: Readonly<{
  children: React.ReactNode;

}>) {

 
  return (
    <html lang="en">
      <body className="app">
      <Navbar />
        <MobileNavigation />
        {children}
        <Footer /> 
      
        </body>
    </html>
  );
}

