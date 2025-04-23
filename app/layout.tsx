import './../public/styles.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Předprodej Tokenu | BSC',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <body>{children}</body>
    </html>
  );
}
