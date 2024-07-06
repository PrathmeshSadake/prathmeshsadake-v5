import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { cn } from "@/lib/utils";

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
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
