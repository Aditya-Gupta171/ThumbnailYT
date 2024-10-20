import type { Metadata } from "next";
import "./globals.css";
import {Inter as FontSans} from "next/font/google"
import { cn } from "@/lib/utils";

const fontSans =FontSans({
  subsets:["latin"],
  variable:"--font-sans",
})
export const metadata: Metadata = {
  title: "Thumbnail Voting",
  description: "get ur audience thoughts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      className={cn(
        "min-h-screen bg-background font-sans antialised",
        fontSans.variable
      )}>{children}</body>
    </html>
  );
}
