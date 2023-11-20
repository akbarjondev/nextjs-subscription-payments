import SupabaseProvider from './supabase-provider';
import Navbar from '@/components/ui/Navbar';
import { PropsWithChildren } from 'react';
import 'styles/main.css';
import { Inter as FontSans } from 'next/font/google';

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children
}: PropsWithChildren) {
  return (
    <html lang="uz">
      <body className="loading">
        <SupabaseProvider>
          <Navbar />
          <main
            id="skip"
            className="min-h-[calc(100dvh-4rem)] md:min-h[calc(100dvh-5rem)]"
          >
            {children}
          </main>
        </SupabaseProvider>
      </body>
    </html>
  );
}
