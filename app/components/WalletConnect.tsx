'use client';
import { useAccount, useContractWrite } from 'wagmi';
import PresaleABI from './../../contracts/PresaleABI.json';

export default function BuyForm() {
  const { address } = useAccount();
  const { write } = useContractWrite({
    address: '0x186288D8028A1CB7dDB9cDd7e991196C7922C521',
    abi: PresaleABI,
    functionName: 'buyWithUSDT',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const usdtAmount = formData.get('usdtAmount');
    write({ args: [usdtAmount] });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="number" 
        name="usdtAmount" 
        placeholder="Množství USDT" 
        required 
      />
      <button type="submit">Koupit tokeny</button>
    </form>
  );
}
