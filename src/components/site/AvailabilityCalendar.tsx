import { useEffect, useMemo, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { getBookedRanges, type BookedRange } from "@/server/ical";

function ymd(d: Date) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function buildBookedSet(ranges: BookedRange[]): Set<string> {
  const set = new Set<string>();
  for (const r of ranges) {
    const start = new Date(r.start + "T00:00:00Z");
    const end = new Date(r.end + "T00:00:00Z");
    // iCal DTEND is exclusive — booked nights are [start, end-1]
    for (let d = new Date(start); d < end; d.setUTCDate(d.getUTCDate() + 1)) {
      set.add(ymd(d));
    }
  }
  return set;
}

const MONTHS_SL = ["Januar","Februar","Marec","April","Maj","Junij","Julij","Avgust","September","Oktober","November","December"];
const MONTHS_EN = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const MONTHS_DE = ["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"];
const MONTHS_HR = ["Siječanj","Veljača","Ožujak","Travanj","Svibanj","Lipanj","Srpanj","Kolovoz","Rujan","Listopad","Studeni","Prosinac"];

const DAYS_SL = ["P","T","S","Č","P","S","N"];
const DAYS_EN = ["M","T","W","T","F","S","S"];

type Props = {
  checkIn: Date | null;
  checkOut: Date | null;
  onChange: (range: { checkIn: Date | null; checkOut: Date | null }) => void;
};

export function AvailabilityCalendar({ checkIn, checkOut, onChange }: Props) {
  const { t, lang } = useI18n();
  const [cursor, setCursor] = useState<Date>(() => {
    const d = new Date();
    return new Date(d.getFullYear(), d.getMonth(), 1);
  });
  const [bookedSet, setBookedSet] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    getBookedRanges()
      .then((res) => {
        if (!mounted) return;
        setBookedSet(buildBookedSet(res.ranges));
      })
      .catch(() => {})
      .finally(() => mounted && setLoading(false));
    return () => {
      mounted = false;
    };
  }, []);

  const months = lang === "sl" ? MONTHS_SL : lang === "de" ? MONTHS_DE : lang === "hr" ? MONTHS_HR : MONTHS_EN;
  const days = lang === "sl" || lang === "hr" ? DAYS_SL : DAYS_EN;

  const renderMonth = (base: Date) => {
    const year = base.getFullYear();
    const month = base.getMonth();
    const first = new Date(year, month, 1);
    const startWeekday = (first.getDay() + 6) % 7; // Mon=0
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const cells: (Date | null)[] = [];
    for (let i = 0; i < startWeekday; i++) cells.push(null);
    for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d));
    while (cells.length % 7 !== 0) cells.push(null);
    return cells;
  };

  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const handleClick = (d: Date) => {
    if (d < today) return;
    if (bookedSet.has(ymd(d))) return;
    if (!checkIn || (checkIn && checkOut)) {
      onChange({ checkIn: d, checkOut: null });
      return;
    }
    if (d <= checkIn) {
      onChange({ checkIn: d, checkOut: null });
      return;
    }
    // Validate range: no booked dates in between
    for (let i = new Date(checkIn); i < d; i.setDate(i.getDate() + 1)) {
      if (bookedSet.has(ymd(i))) {
        onChange({ checkIn: d, checkOut: null });
        return;
      }
    }
    onChange({ checkIn, checkOut: d });
  };

  const monthB = new Date(cursor.getFullYear(), cursor.getMonth() + 1, 1);

  const cellClass = (d: Date | null) => {
    if (!d) return "invisible";
    const isPast = d < today;
    const isBooked = bookedSet.has(ymd(d));
    const isCheckIn = checkIn && ymd(d) === ymd(checkIn);
    const isCheckOut = checkOut && ymd(d) === ymd(checkOut);
    const inRange = checkIn && checkOut && d > checkIn && d < checkOut;
    return cn(
      "relative h-10 sm:h-11 text-sm rounded-lg flex items-center justify-center transition-colors",
      isPast && "text-muted-foreground/40 cursor-not-allowed line-through",
      !isPast && isBooked && "bg-destructive/15 text-destructive/70 cursor-not-allowed line-through",
      !isPast && !isBooked && "hover:bg-gold/30 cursor-pointer text-walnut",
      inRange && "bg-gold/40 text-walnut-deep font-semibold",
      (isCheckIn || isCheckOut) && "bg-walnut text-cream font-bold hover:bg-walnut",
    );
  };

  return (
    <div className="bg-card rounded-2xl p-5 shadow-card border border-border/60">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => setCursor(new Date(cursor.getFullYear(), cursor.getMonth() - 1, 1))}
          className="p-2 rounded-full hover:bg-muted transition-colors"
          aria-label="Previous month"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <div className="text-sm font-semibold text-walnut">
          {months[cursor.getMonth()]} {cursor.getFullYear()}
          <span className="hidden md:inline"> · {months[monthB.getMonth()]} {monthB.getFullYear()}</span>
        </div>
        <button
          onClick={() => setCursor(new Date(cursor.getFullYear(), cursor.getMonth() + 1, 1))}
          className="p-2 rounded-full hover:bg-muted transition-colors"
          aria-label="Next month"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {loading && (
        <div className="flex items-center justify-center py-8 text-muted-foreground gap-2 text-sm">
          <Loader2 className="w-4 h-4 animate-spin" /> ...
        </div>
      )}

      {!loading && (
        <div className="grid md:grid-cols-2 gap-6">
          {[cursor, monthB].map((m, idx) => (
            <div key={idx} className={idx === 1 ? "hidden md:block" : ""}>
              <div className="grid grid-cols-7 text-center text-[10px] uppercase tracking-wider text-muted-foreground mb-1">
                {days.map((d, i) => (
                  <div key={i}>{d}</div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {renderMonth(m).map((d, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => d && handleClick(d)}
                    className={cellClass(d)}
                    disabled={!d}
                  >
                    {d?.getDate()}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="flex items-center gap-4 mt-4 text-xs text-muted-foreground flex-wrap">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded bg-walnut" /> {t.booking.checkin}/{t.booking.checkout}
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded bg-gold/40" /> {t.booking.available}
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded bg-destructive/30" /> {t.booking.booked}
        </div>
      </div>
      <p className="text-xs text-muted-foreground mt-2">{t.booking.pickRange}</p>
    </div>
  );
}