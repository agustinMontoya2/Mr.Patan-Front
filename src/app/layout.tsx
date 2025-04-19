import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mr.Patan 2.0",
  description: "Veterinaria de confianza",
  icons: "/iconCross.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster icons={{success: null}} toastOptions={
          {
            className: "flex flex-col items-center justify-center",
            style: {
              border: '1px solid black',
              borderRadius: '8px',
              background: 'rgba(253, 254, 255, 0.58)',
              backdropFilter: 'blur(12px)',
            },
          }
        }/>
        {children}
      </body>
    </html>
  );
}
