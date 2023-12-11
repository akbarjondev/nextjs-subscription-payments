import SupabaseProvider from './supabase-provider';
import Navbar from '@/components/ui/Navbar';
import { Suspense, PropsWithChildren } from 'react';
import 'styles/main.css';
import { UserProvider } from '@/components/hoc/user-context';
import clsx from 'clsx';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="uz">
      <body className={clsx('loading')}>
        <SupabaseProvider>
          <UserProvider>
            <Suspense fallback={<>Loading navbar...</>}>
              <Navbar />
            </Suspense>
            <main
              id="skip"
              className="min-h-[calc(100dvh-4rem)] md:min-h[calc(100dvh-5rem)]"
            >
              {children}
            </main>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
