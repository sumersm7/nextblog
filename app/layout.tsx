import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Modern Blog',
  description: 'A beautiful blog built with Next.js 14',
  openGraph: {
    title: 'Modern Blog',
    description: 'A beautiful blog built with Next.js 14',
    url: 'https://your-domain.com',
    siteName: 'Modern Blog',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Modern Blog',
    description: 'A beautiful blog built with Next.js 14',
    images: ['https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=1200&h=630&fit=crop'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}