'use client';

import { useSupabase } from '@/app/supabase-provider';
import { User } from '@supabase/supabase-js';
import {
  PropsWithChildren,
  useState,
  createContext,
  useContext,
  useEffect
} from 'react';

export const UserContext = createContext<User | null>(null);

export const UserProvider = ({ children }: PropsWithChildren) => {
  const { supabase } = useSupabase();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    (async () => {
      const data = (await supabase.auth.getSession()).data.session?.user;

      setUser(data || null);
    })();
  }, []);

  console.log(user);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUser must be used inside UserProvider');
  }

  return context;
};
