import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar/Sidebar";
import { ThemeProvider } from "@/providers/theme-provider";
import NavbarMobile from "@/components/globals/NavbarMobile";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="w-full h-screen dark:bg-neutral-900 pt-8 sm:pt-8 flex justify-center items-start">
            <div className="w-full h-full px-4 max-w-7xl gap-8 flex">
              <div className="absolute w-full p-4 my-8 sm:hidden top-0 left-0">
                <NavbarMobile />
              </div>
              <div className="h-full hidden p-4 sm:flex">
                <Sidebar />
              </div>
              <div className="flex-1 pt-32 sm:pt-16 h-full overflow-hidden">
                {children}
              </div>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
