
ALTER TABLE public.bookings
  ADD CONSTRAINT bookings_dates_valid CHECK (check_out > check_in AND check_in >= '2024-01-01'),
  ADD CONSTRAINT bookings_guests_valid CHECK (guests BETWEEN 1 AND 6),
  ADD CONSTRAINT bookings_name_len CHECK (char_length(guest_name) BETWEEN 2 AND 120),
  ADD CONSTRAINT bookings_email_fmt CHECK (guest_email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$' AND char_length(guest_email) <= 255),
  ADD CONSTRAINT bookings_phone_len CHECK (char_length(guest_phone) BETWEEN 5 AND 40),
  ADD CONSTRAINT bookings_message_len CHECK (message IS NULL OR char_length(message) <= 2000),
  ADD CONSTRAINT bookings_lang_len CHECK (language IS NULL OR char_length(language) <= 8),
  ADD CONSTRAINT bookings_price_valid CHECK (total_price >= 0 AND total_price <= 100000),
  ADD CONSTRAINT bookings_nights_valid CHECK (nights BETWEEN 1 AND 365);
