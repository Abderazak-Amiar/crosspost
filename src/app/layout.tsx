import type { Metadata } from 'next';
import './globals.css';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import Home from '@/components/Home';
export const metadata: Metadata = {
  title: 'Crosspost',
  description: 'This is a crosspost app !',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <Home>{children}</Home>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
