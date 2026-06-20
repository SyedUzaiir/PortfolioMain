import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { LoadingScreen } from "@/components/ui/loading-screen";
import { SpotlightCursor } from "@/components/motion/spotlight-cursor";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/shared/seo-helper";
import { ScrollProgress } from "@/components/ui/shared/scroll-progress";
import { CommandPalette } from "@/components/ui/shared/command-palette";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Syed Uzair Mohiuddin | Software Engineer Portfolio",
  description: "Professional portfolio of Syed Uzair Mohiuddin, a Software Engineer specializing in Java backend services, microservices architectures, and modern full-stack applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-emerald-500/30 selection:text-emerald-500">
        <JsonLd />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScrollProvider>
            <LoadingScreen />
            <ScrollProgress />
            <CommandPalette />
            <SpotlightCursor />
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-grow pt-24">{children}</main>
              <Footer />
            </div>
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
