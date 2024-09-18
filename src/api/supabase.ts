import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  "https://omjefmadzcsbopwfxksv.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9tamVmbWFkemNzYm9wd2Z4a3N2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY1NjkwNTEsImV4cCI6MjA0MjE0NTA1MX0.0jmYyBjXhbG7AS_T_t85PnhMVDRgcg_EPBOEtmPeV-8",
);
