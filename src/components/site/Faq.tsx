import { useI18n } from "@/lib/i18n";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

export function Faq() {
  const { t } = useI18n();
  return (
    <section id="faq" className="py-20 sm:py-28 bg-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-gold shadow-gold mb-4">
            <HelpCircle className="w-7 h-7 text-walnut-deep" />
          </div>
          <h2 className="font-display text-3xl sm:text-5xl text-walnut mb-3">{t.faq.title}</h2>
          <p className="text-muted-foreground">{t.faq.subtitle}</p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {t.faq.items.map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-card rounded-2xl border border-border/60 shadow-card px-5 data-[state=open]:shadow-luxe transition-luxe"
            >
              <AccordionTrigger className="text-left font-display text-base sm:text-lg text-walnut hover:text-gold-deep py-5">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}