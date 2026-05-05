ALTER TABLE public.bookings ADD CONSTRAINT bookings_status_check CHECK (status IN ('pending','confirmed','cancelled'));

DROP POLICY IF EXISTS "Anyone can create booking requests" ON public.bookings;

CREATE POLICY "Anyone can create pending booking requests"
ON public.bookings
FOR INSERT
TO anon, authenticated
WITH CHECK (status = 'pending');