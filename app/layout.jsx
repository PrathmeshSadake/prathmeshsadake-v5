import "./globals.css";
import { Poppins } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import NextThemeProvider from "@/components/NextThemeProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Prathmesh Sadake",
  description: "Software Engineer based in Navi Mumbai",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${poppins.className} flex h-full flex-col bg-zinc-50 dark:bg-black`}
      >
        <NextThemeProvider>
          <div className='fixed inset-0 flex justify-center sm:px-8'>
            <div className='flex w-full max-w-7xl lg:px-8'>
              <div className='w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20' />
            </div>
          </div>
          <div className='relative'>
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </NextThemeProvider>
      </body>
    </html>
  );
}
