import { toDateTime } from './helpers';
import { createClient } from '@supabase/supabase-js';
import type { Database } from 'types_db';

type Client = Database['public']['Tables']['clients']['Row'];
type Queue = Database['public']['Tables']['queues']['Row'];
type Service = Database['public']['Tables']['services']['Row'];
type Price = Database['public']['Tables']['prices']['Row'];

// Note: supabaseAdmin uses the SERVICE_ROLE_KEY which you must only use in a secure server-side context
// as it has admin privileges and overwrites RLS policies!
const supabaseAdmin = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || ''
);

const upsertProductRecord = async (service: Service) => {
  const productData: Service = {
    id: service.id,
    created_at: service.created_at,
    name: service.name
  };

  const { error } = await supabaseAdmin.from('products').upsert([productData]);
  if (error) throw error;
  console.log(`Product inserted/updated: ${service.id}`);
};

const upsertPriceRecord = async (price: Price) => {
  const priceData: Price = {
    id: price.id,
    created_at: price.created_at,
    name: price.name,
    service_id: price.service_id
  };

  const { error } = await supabaseAdmin.from('prices').upsert([priceData]);
  if (error) throw error;
  console.log(`Price inserted/updated: ${price.id}`);
};

export { upsertProductRecord, upsertPriceRecord };
