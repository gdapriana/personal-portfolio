import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar/Sidebar";
import { ThemeProvider } from "@/providers/theme-provider";

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
					<main className="w-full h-screen dark:bg-neutral-900 p-8 sm:p-8 flex justify-center items-start">
						<div className="w-full h-full max-w-6xl gap-8 flex">
							<div className="h-full hidden sm:flex">
								<Sidebar />
							</div>
							<div className="flex-1 py-16 h-full overflow-hidden sm:py-24">{children}</div>
						</div>
					</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
