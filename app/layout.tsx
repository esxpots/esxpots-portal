import type { ReactNode } from 'react';

export const metadata = { title: 'esxpots' };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="tr">
      <body>
        <main style={{ maxWidth: 980, margin: '0 auto', padding: '24px 16px' }}>
          {children}
        </main>
      </body>
    </html>
  );
}
