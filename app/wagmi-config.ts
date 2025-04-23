import { createConfig } from 'wagmi'
import { bsc } from 'wagmi/chains' // Pouze BSC, pokud nepotřebujete Ethereum
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { http } from 'viem'

export const config = createConfig({
  chains: [bsc],
  connectors: [
    new MetaMaskConnector({
      chains: [bsc],
      options: { shimDisconnect: true }
    }),
  ],
  transports: {
    [bsc.id]: http(),
  },
})
