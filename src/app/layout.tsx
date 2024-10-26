import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import { MantineProvider } from '@mantine/core';
// import { Notifications } from '@mantine/notifications';
import "./globals.css";
import '@mantine/core/styles.css';

const mulish = Mulish({ subsets: ["latin"] });
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Astro Malaysia TV Packages with Astro Fibre | Astro Official Authorised Dealer",
  description: "Sign up for the all-new Astro today to watch the latest TV shows, movies, sports with Astro Fibre, enjoy world-class streaming apps all in one place!",
  keywords: "astro, astro tv, astro package, astro shop, broadband, astro subscription, platinum pack, entertainment plus pack, entertainment pack, primary pack, astro netflix, netflix malaysia, astro disney, disney hotstar, broadband, high speed, fastest internet, astro channel, astro go",
  authors: { name: "Astro Official Authorised Dealer" },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "TV Packages with Astro Fibre",
    description: "Discover Astro's official packages for fibre internet and TV services.",
    url: "https://astro.com.my",
    siteName: "Astro Official Authorised Dealer",
    images: [
      {
        url: "https://astro-promotions.com/images/astro-tv-fibre-packages.jpg",
        width: 800,
        height: 600,
        alt: "Astro TV and Fibre Packages",
      },
    ],
    type: "website",
  },
};

const ExtendedMetadata = () => (
  <>
    <meta name='googlebot' content="NOODP"></meta>
    
  </>
)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={mulish.className}
      >
        <MantineProvider>
          {children}
          {/* <Notifications /> */}
        </MantineProvider>
      </body>
    </html>
  );
}
