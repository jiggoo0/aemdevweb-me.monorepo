import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.warn('Supabase credentials are not defined. Check your .env file at the root.');
}

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  supabaseUrl || '',
  supabaseKey || ''
);

// Helper function to create admin client (server side only)
export const createAdminClient = () => {
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!serviceKey) throw new Error('SUPABASE_SERVICE_ROLE_KEY is required for admin client');
  
  return createClient(supabaseUrl || '', serviceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  });
};