import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Student-Stitch",
	description: "E-commerce Clothing Line",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="min-h-screen flex flex-col">
					<Header />
					{children}
					<footer className="footer footer-center p-4 bg-base-300 text-base-center">
						<p>Copyright @ 2024 - All rights reserved by Student Stitch</p>
					</footer>
				</div>
			</body>
		</html>
	);
}
