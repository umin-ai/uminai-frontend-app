"use client";
import { WagmiProvider, createConfig, http } from "wagmi";
import { mainnet } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { defineChain } from "viem";

const xrpEvmTestnet = defineChain({
  id: 1440002,
  name: 'XRP EVM Devnet',
  nativeCurrency: { name: 'XRP', symbol: 'XRP', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://rpc-evm-sidechain.xrpl.org/'],
    },
  },
  blockExplorers: {
    default: {
      name: 'XRP EVM Explorer',
      url: 'https://explorer.xrplevm.org',
      apiUrl: 'https://explorer.xrplevm.org',
    },
  }
})
export const config = createConfig(
  getDefaultConfig({
    // Your dApps chains
    chains: [xrpEvmTestnet],
    transports: {
      // RPC URL for each chain
      // [mainnet.id]: http(
      //   `https://eth-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_ID}`,
      // ),
      [1440002]: http(
        `https://rpc-evm-sidechain.xrpl.org`,
      ),
    },

    // Required API Keys
    walletConnectProjectId: 'ec15dcd9aabab13b8fbf89b371a1aaae',

    // Required App Info
    appName: "uminai",

    // Optional App Info
    appDescription: "uminai: DeThing",
    appUrl: "https://app.umin.ai", // your app's url
    appIcon: "https://app.umin.ai/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
  }),
);

const queryClient = new QueryClient();

export const Web3Provider = ({ children }: { children: 
  React.ReactNode
}) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider
          theme="soft"
          mode="light"
          options={{
            embedGoogleFonts: true,
          }}
        >{children}</ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};