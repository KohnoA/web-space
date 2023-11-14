import type { Metadata } from 'next';
import { Inter, Nunito } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'], weight: '400' });

const nunito = Nunito({
  weight: ['300', '400', '500', '700', '900'],
  style: ['normal'],
  subsets: ['cyrillic', 'latin'],
});

export const metadata: Metadata = {
  title: 'Web Space',
  description: 'Testing task for Web Space',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${nunito.className}`}>
        <header className="bg-black text-white">Header</header>
        {children}
        <footer className="bg-black text-white">Footer</footer>
      </body>
    </html>
  );
}
