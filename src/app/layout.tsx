import type { Metadata } from "next";
import { Grandstander, Poppins } from "next/font/google";
import { createTheme, MantineProvider } from '@mantine/core';
import "./globals.css";
import '@mantine/core/styles.css';
import StyledComponentsRegistry from "@ap/lib/registry";
import Head from "next/head";
import { Web3Provider } from "@ap/components/WalletProvider";
import { Suspense } from "react";

const grandstander = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Public Library",
  description: "Public Library",
  keywords: "Public Library",
  authors: { name: "Public Library" },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Public Library",
    description: "Public Library",
    url: "https://stanleythecat.com",
    siteName: "Public Library",
    images: [
      {
        url: "https://hodl100k.xyz/images/Sample.png",
        width: 1184,
        height: 709,
        alt: "Public Library",
      },
    ],
    type: "website",
  },
  icons: [
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
      <meta name="referrer" content="no-referrer"></meta>

        <meta http-equiv="X-IDM-Disable" content="true"></meta>
        <link rel='icon' href='/icons/icon16.png' type='image/png' sizes='16x16' />
        <link rel='icon' href='/icons/icon32.png' type='image/png' sizes='32x32' />
      </Head>
      <body
        className={grandstander.className}
      >
        <MantineProvider>
          <StyledComponentsRegistry>
            <Web3Provider>
              <Suspense>
                {children}
              </Suspense>
            </Web3Provider>
          </StyledComponentsRegistry>
        </MantineProvider>
      </body>
    </html>
  );
}
