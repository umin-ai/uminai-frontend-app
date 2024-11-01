import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import { MantineProvider } from '@mantine/core';
// import { Notifications } from '@mantine/notifications';
import "./globals.css";
import '@mantine/core/styles.css';
import StyledComponentsRegistry from "@ap/lib/registry";
import { FloatingWhatsapp } from "@ap/components/Floating";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google' 

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
  title: "Special Deal | Astro Malaysia TV Packages Now Available",
  description: "Experience the new Astro! Get the latest TV shows, movies, live sports, and premium streaming apps with Astro Fibre all in one easy subscription. Enjoy top-quality entertainment in one place, let's get started!",
  keywords: "astro, astro tv, astro package, astro shop, broadband, astro subscription, platinum pack, entertainment plus pack, entertainment pack, primary pack, astro netflix, netflix malaysia, astro disney, disney hotstar, broadband, high speed, fastest internet, astro channel, astro go",
  authors: { name: "astro-promotions.com Astro Authorised Dealer" },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Special Deal | Astro Malaysia TV Packages Now Available",
    description: "Experience the new Astro in astro-promotions.com! Get the latest TV shows, movies, live sports, and premium streaming apps with Astro Fibre all in one easy subscription. Enjoy top-quality entertainment in one place, let's get started!",
    url: "https://astro.com.my",
    siteName: "Special Deal | Astro Malaysia TV Packages Now Available",
    images: [
      {
        url: "https://astro-promotions.com/images/acm-pack-primarypack.jpg",
        width: 800,
        height: 600,
        alt: "Astro TV and Fibre Packages in https://astro-promotions.com",
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
      <GoogleTagManager gtmId='GTM-5X974MSK'/>
      <GoogleAnalytics gaId='G-17YD4R7PBH'/>
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
