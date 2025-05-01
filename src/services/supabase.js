import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://qjdasirnmsmqtfnplgpa.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFqZGFzaXJubXNtcXRmbnBsZ3BhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYwMTc5NTIsImV4cCI6MjA2MTU5Mzk1Mn0.E1PtV6PEyX3Q4ADkH1-y_xvGKI3VNkxes8a_uGwRYx8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
