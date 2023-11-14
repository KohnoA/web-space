import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import Header from '@/components/UI/Header';
import Footer from '@/components/UI/Footer';
import '@/styles/globals.css';

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
      <body className={nunito.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
