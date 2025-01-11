import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";


export const metadata: Metadata = {
  title: "Help Haven 🏠",
  description: "Your Helpdeskt, Reimagined.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={``}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
