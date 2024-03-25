import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";

const cairo = Cairo({ subsets: ["latin"] });

export const metadata = {
  title: "PathForge",
  description: "تعلم المهارات بمنهجية وبدون تشتت",
  openGraph: {
    title: "PathForge",
    description: "تعلم المهارات بمنهجية وبدون تشتت",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cairo.className}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
