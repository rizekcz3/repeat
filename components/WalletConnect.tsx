'use client';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';

export default function WalletConnect() {
  const { connect } = useConnect({
    connector: new MetaMaskConnector(),
  });
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  return (
    <div>
      {!isConnected ? (
        <button onClick={() => connect()}>Připojit MetaMask</button>
      ) : (
        <div>
          <p>Připojeno: {address?.slice(0, 6)}...{address?.slice(-4)}</p>
          <button onClick={() => disconnect()}>Odpojit</button>
        </div>
      )}
    </div>
  );
}
