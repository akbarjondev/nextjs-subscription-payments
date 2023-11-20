'use client';

import { useSupabase } from '@/app/supabase-provider';
import { getURL } from '@/utils/helpers';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';

export default function AuthUI() {
  const { supabase } = useSupabase();
  return (
    <div className="flex flex-col space-y-4">
      <Auth
        supabaseClient={supabase}
        providers={[]}
        redirectTo={`${getURL()}/dashboard`}
        appearance={{
          theme: ThemeSupa
        }}
        theme={'light'}
        showLinks={false}
        localization={{
          variables: {
            sign_in: {
              email_label: 'Email',
              email_input_placeholder: 'Emailingizni kiriting',
              password_label: 'Parol',
              password_input_placeholder: 'Parolingizni kiriting',
              button_label: 'Kirish'
            }
          }
        }}
      />
    </div>
  );
}
