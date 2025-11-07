import { createClient } from '@supabase/supabase-js'

// Prefer NEXT_PUBLIC_* vars for browser access; fall back to server-side vars if present
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY || process.env.SUPABASE_KEY

// Assert as string to satisfy TypeScript during build. Ensure these are set in Vercel.
export const supabase = createClient(supabaseUrl as string, supabaseKey as string)

