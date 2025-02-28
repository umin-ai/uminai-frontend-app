import type { Metadata } from "next";
import { Grandstander, Poppins } from "next/font/google";
import { MantineProvider } from '@mantine/core';
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
  title: "LLM",
  description: "LLM",
  keywords: "LLM",
  authors: { name: "LLM" },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "LLM",
    description: "LLM",
    url: "https://stanleythecat.com",
    siteName: "LLM",
    images: [
      {
        url: "https://hodl100k.xyz/images/Sample.png",
        width: 1184,
        height: 709,
        alt: "LLM",
      },
    ],
    type: "website",
  },
  icons: [
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
      <Head>
      <meta name="referrer" content="no-referrer"></meta>

        <meta http-equiv="X-IDM-Disable" content="true"></meta>
        <link rel='icon' href='/icons/icon16.png' type='image/png' sizes='16x16' />
        <link rel='icon' href='/icons/icon32.png' type='image/png' sizes='32x32' />
      </Head>
      <body
        className={grandstander.className}
      >
        {/* <AnimatedCursor       
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          showSystemCursor={false}
          outerStyle={{
            border: '3px solid #E7AE35'
          }}
          innerStyle={{
            backgroundColor: '#E7AE35',
          }}
          clickables={[{
            target: '.lefter',
            innerSize: 10,
            innerScale: 1,
            outerScale: 1,
            outerAlpha: 0,
            innerStyle: {
              backgroundColor: '#fff',
            },
            outerStyle: {
              border: '3px solid #fff',
            }
          }, {
            target: '.righter',
            innerSize: 10,
            innerScale: 1,
            outerScale: 1,
            outerAlpha: 0,
            innerStyle: {
              backgroundColor: '#fff',
            },
            outerStyle: {
              border: '3px solid #fff',
            }
          }]}
        /> */}
        <MantineProvider>
          <StyledComponentsRegistry>
            <Web3Provider>
              <Suspense>
                {children}
              </Suspense>
            </Web3Provider>
            {/* <Repeater children={children}/> */}
            {/* <Siders /> */}
            {/* <Floater /> */}
            {/* <CAFloater /> */}
            {/* <CallToActionFloater /> */}
            {/* <Notifications /> */}
          </StyledComponentsRegistry>
        </MantineProvider>
      </body>
    </html>
  );
}
