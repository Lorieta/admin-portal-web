import { Mulish } from 'next/font/google';
import NavShell from '@/components/shared/navbar/NavShell';
import { Inter } from 'next/font/google';
import '@/components/styles/global.scss';

const inter = Inter({ subsets: ['latin'] });
const mulish = Mulish({ subsets: ['latin'], variable: '--font-mulish' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`main ${mulish.variable}`}>
      <body className={inter.className}>
        <NavShell>{children}</NavShell>
      </body>
    </html>
  );
}
