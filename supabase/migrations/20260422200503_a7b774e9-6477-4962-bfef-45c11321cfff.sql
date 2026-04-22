
CREATE TABLE public.bookings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  check_in DATE NOT NULL,
  check_out DATE NOT NULL,
  guests INT NOT NULL,
  guest_name TEXT NOT NULL,
  guest_email TEXT NOT NULL,
  guest_phone TEXT NOT NULL,
  is_pensioner BOOLEAN NOT NULL DEFAULT false,
  total_price NUMERIC(10,2) NOT NULL,
  nights INT NOT NULL,
  message TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  language TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

-- Anyone can submit a booking request (insert), but no one can read them via the API
CREATE POLICY "Anyone can create booking requests"
  ON public.bookings FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
