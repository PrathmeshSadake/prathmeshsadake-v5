import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import ContactSection from "@/components/contact";
import ViewContainer from "@/components/view-container";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prathmesh Sadake",
  description: "A full-stack software engineer, from India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={cn(
          "min-h-screen antialiased scroll-smooth",
          outfit.className
        )}
      >
        <div className='main-view-container'>
          <ViewContainer className='grid grid-cols-1 items-start justify-start gap-12'>
            <Navbar />
            {children}
            <ContactSection />
          </ViewContainer>
        </div>
      </body>
    </html>
  );
}
