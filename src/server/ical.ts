import { createServerFn } from "@tanstack/react-start";


function parseICalDate(value: string): Date | null {
  // Handles YYYYMMDD and YYYYMMDDTHHMMSSZ
  const m = value.match(/^(\d{4})(\d{2})(\d{2})/);
  if (!m) return null;
  return new Date(Date.UTC(Number(m[1]), Number(m[2]) - 1, Number(m[3])));
}

export type BookedRange = { start: string; end: string };

export const getBookedRanges = createServerFn({ method: "GET" }).handler(
  async (): Promise<{ ranges: BookedRange[]; error: string | null }> => {
    try {
      const ICAL_URL = process.env.BOOKING_ICAL_URL;
      if (!ICAL_URL) {
        console.error("BOOKING_ICAL_URL env var is not set");
        return { ranges: [], error: "iCal not configured" };
      }
      const res = await fetch(ICAL_URL, {
        headers: { "User-Agent": "LavitaBookingSync/1.0" },
      });
      if (!res.ok) {
        console.error("iCal fetch failed", res.status);
        return { ranges: [], error: `iCal HTTP ${res.status}` };
      }
      const text = await res.text();
      const ranges: BookedRange[] = [];
      const blocks = text.split(/BEGIN:VEVENT/);
      for (const b of blocks.slice(1)) {
        const startMatch = b.match(/DTSTART(?:;VALUE=DATE)?[^:]*:([\dTZ]+)/);
        const endMatch = b.match(/DTEND(?:;VALUE=DATE)?[^:]*:([\dTZ]+)/);
        if (!startMatch || !endMatch) continue;
        const s = parseICalDate(startMatch[1]);
        const e = parseICalDate(endMatch[1]);
        if (!s || !e) continue;
        ranges.push({
          start: s.toISOString().slice(0, 10),
          end: e.toISOString().slice(0, 10),
        });
      }
      return { ranges, error: null };
    } catch (e) {
      console.error("iCal parse error", e);
      return { ranges: [], error: "Sync unavailable" };
    }
  },
);