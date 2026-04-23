import { useI18n } from "@/lib/i18n";
import { Flame } from "lucide-react";

export function UrgencyBar() {
  const { t } = useI18n();
  return (
    <div
      className="sticky top-0 z-[60] w-full text-cream text-center text-[11px] sm:text-xs font-semibold tracking-wide py-2 px-4 shadow-md"
      style={{
        background:
          "linear-gradient(90deg, oklch(0.55 0.18 35) 0%, oklch(0.62 0.2 50) 50%, oklch(0.55 0.18 35) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
        <Flame className="w-3.5 h-3.5 shrink-0 animate-pulse" />
        <span className="uppercase">{t.urgencyBar}</span>
        <Flame className="w-3.5 h-3.5 shrink-0 animate-pulse" />
      </div>
    </div>
  );
}