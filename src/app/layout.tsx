import type { Metadata } from "next";
import { Grandstander } from "next/font/google";
import { MantineProvider } from '@mantine/core';
import "./globals.css";
import '@mantine/core/styles.css';
import StyledComponentsRegistry from "@ap/lib/registry";
import Floater from "@ap/components/Floater";
import Head from "next/head";

const grandstander = Grandstander({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Stanley The Cat Community Takeover",
  description: "Community Site of Stanley The Cat",
  keywords: "Stanley The Cat on Solana",
  authors: { name: "Stanley The Cat" },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Official Website of HODL100K",
    description: "Community Takeover of Stanley The Cat",
    url: "https://stanleythecat.com",
    siteName: "Stanley The Cat",
    images: [
      {
        url: "https://hodl100k.xyz/images/Sample.png",
        width: 1184,
        height: 709,
        alt: "Official Website of HODL100K",
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
            {children}
            {/* <Repeater children={children}/> */}
            {/* <Siders /> */}
            <Floater />
            {/* <CAFloater /> */}
            {/* <CallToActionFloater /> */}
            {/* <Notifications /> */}
          </StyledComponentsRegistry>
        </MantineProvider>
      </body>
    </html>
  );
}
