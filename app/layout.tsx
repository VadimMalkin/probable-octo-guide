import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/headerComponent";
import { AuthProvider } from "./context/AuthContext"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GymBeam Store",
  description: "A simple web app using Fake Store API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-black`}
      >
        <AuthProvider>
          <Header />
          <main className="p-4 sm:p-6 md:p-8">
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}

