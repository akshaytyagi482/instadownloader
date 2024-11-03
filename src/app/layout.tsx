import { Metadata } from "next";
import { DM_Sans as FontSans } from "next/font/google";
import { Navbar, Footer } from "@/components/layout";
import Adsense from '@/components/Adsense';

import { ThemeProvider } from "@/components/providers/theme-provider";
import { ReactQueryProvider } from "@/components/providers/react-query-provider";

import { cn } from "@/lib/utils";

import "./globals.css";
import AdSense from "@/components/Adsense";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Instagram Video Downloader",
  description: "Download Instagram Videos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
       <head>
       <meta name="keywords" content="Instagram video downloader, Download Instagram videos, Save Instagram videos, Instagram video download online, Free Instagram video downloader, Instagram video downloader tool, Instagram video downloader app, Download IGTV videos, Instagram reels downloader, Instagram story video downloader, How to download Instagram videos, Best Instagram video downloader, Download Instagram videos to MP4, Save Instagram reels to gallery, Instagram video downloader for PC, Instagram video downloader without watermark, Download Instagram videos in high quality, Instagram video downloader for mobile, Free online tool to download Instagram videos, Download videos from private Instagram accounts, IG video download, Instagram media downloader, Download Instagram videos quickly, Save videos from Instagram posts, Bulk Instagram video downloader, Instagram video extractor, Download Instagram content, Instagram video backup tool, Convert Instagram videos to MP3, Instagram video download service" />
      <AdSense />
      </head>
      <body
        className={cn(
          fontSans.variable,
          "overflow-x-hidden bg-background font-sans antialiased"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ReactQueryProvider>
            <Navbar />
            <main className="relative h-[calc(100vh-6rem)] overflow-y-auto px-2 sm:px-4">
              {children}
            </main>
            <Footer />
          </ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
