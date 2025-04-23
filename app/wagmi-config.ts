import { createConfig } from 'wagmi'
import { mainnet, bsc } from 'wagmi/chains'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'

export const config = createConfig({
  chains: [mainnet, bsc],
  connectors: [
    new MetaMaskConnector(),
  ],
})
