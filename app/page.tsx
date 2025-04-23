import WalletConnect from './components/WalletConnect';
import BuyForm from './components/BuyForm';

export default function Home() {
  return (
    <main className="container">
      <h1>🚀 Předprodej Tokenu</h1>
      <p>Kontrakt: <code>0x186288D8028A1CB7dDB9cDd7e991196C7922C521</code></p>
      <WalletConnect />
      <BuyForm />
    </main>
  );
}
