'use client';
import { usePathname } from 'next/navigation';
import Nav from './nav';

export default function NavShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideNav = pathname === '/login' || pathname === '/forgot-password';

  return (
    <>
      {!hideNav && <Nav />}
      <main className={hideNav ? '' : 'main-content'}>{children}</main>
    </>
  );
}
