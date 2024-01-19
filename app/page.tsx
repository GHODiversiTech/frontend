
'use client';
import { WagmiConfig, createConfig } from "wagmi";
import { ConnectKitProvider, ConnectKitButton, getDefaultConfig } from "connectkit";

const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    alchemyId: process.env.API_KEY,
    walletConnectProjectId: process.env.PROJECT_ID,

    // Required
    appName: "GHODiversitech",

    // Optional
    appDescription: "Your App Description",
    appUrl: "https://family.co", // your app's url
    appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
  }),
);
export default function Home() {
  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider>
  <>
    <h1>Hello World</h1>
    <ConnectKitButton />
  </>
  </ConnectKitProvider>
  </WagmiConfig>
  )
}
