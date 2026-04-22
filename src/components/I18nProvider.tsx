import { useEffect, useMemo, useState, type ReactNode } from "react";
import { I18nContext, dictionaries, detectLang, type Lang } from "@/lib/i18n";

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("sl");

  useEffect(() => {
    setLangState(detectLang());
  }, []);

  const value = useMemo(
    () => ({
      lang,
      setLang: (l: Lang) => {
        setLangState(l);
        if (typeof window !== "undefined") window.localStorage.setItem("lang", l);
        if (typeof document !== "undefined") document.documentElement.lang = l;
      },
      t: dictionaries[lang],
    }),
    [lang],
  );

  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = lang;
  }, [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}