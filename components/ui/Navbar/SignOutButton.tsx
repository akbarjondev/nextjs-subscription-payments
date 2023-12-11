'use client';

import s from './Navbar.module.css';
import { useSupabase } from '@/app/supabase-provider';
import { useRouter } from 'next/navigation';

export default function SignOutButton() {
  const router = useRouter();
  const { supabase } = useSupabase();

  const handleSignOut = async () => {
    console.log('signing out');

    const data = await supabase.auth.signOut();
    console.log(data);

    router.refresh();
  };

  return (
    <button className={s.link} onClick={handleSignOut}>
      Chiqish
    </button>
  );
}
