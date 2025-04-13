import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://usdvgakddkzodonhsneq.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZjY3ppY2duY3BzaWpkdnJ5dmtyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzNzA0OTQsImV4cCI6MjA1OTk0NjQ5NH0.eg141Qqtp48Lgo784XOw3d4eiKztmxhBQQr6OczyQxM',
);
