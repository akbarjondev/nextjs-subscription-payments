import { getSession, getUserDetails } from '@/app/supabase-server';

export default async function PricingPage() {
  const [session, user] = await Promise.all([getSession(), getUserDetails()]);

  console.log('session: ', user);

  return <>Home page</>;
}
