import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import { MantineProvider } from '@mantine/core';
// import { Notifications } from '@mantine/notifications';
import "./globals.css";
import '@mantine/core/styles.css';
import StyledComponentsRegistry from "@ap/lib/registry";
import { FloatingWhatsapp } from "@ap/components/Floating";

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
  title: "Promotion Astro Malaysia TV Packages with Astro Fibre",
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
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/icons/icon32.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/icons/icon16.png'
    },
    {
      rel: 'mask-icon',
      color: '#e6007d',
      url: '/icons/safari-pinned-tab.svg',
    }
  ]
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={mulish.className}
      >
        <MantineProvider>
          <StyledComponentsRegistry>
            {children}
          {/* <Notifications /> */}
          </StyledComponentsRegistry>
        </MantineProvider>
        <FloatingWhatsapp />
      </body>
    </html>
  );
}
