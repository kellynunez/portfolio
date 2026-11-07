import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { translations, type Locale, type Translation } from "./translations";

const STORAGE_KEY = "portfolio-locale";

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: (section: keyof Translation) => Translation[keyof Translation];
  dictionary: Translation;
};

const I18nContext = createContext<I18nContextValue | null>(null);

const getBrowserLocale = (): Locale => {
  if (typeof navigator === "undefined") return "es";
  return navigator.language.toLowerCase().startsWith("en") ? "en" : "es";
};

export const I18nProvider = ({ children, initialLocale }: { children: ReactNode; initialLocale?: Locale }) => {
  const [locale, setLocaleState] = useState<Locale>(initialLocale ?? "es");

  useEffect(() => {
    if (initialLocale) {
      setLocaleState(initialLocale);
      window.localStorage.setItem(STORAGE_KEY, initialLocale);
      document.documentElement.lang = initialLocale;
      return;
    }

    const storedLocale = window.localStorage.getItem(STORAGE_KEY);
    const nextLocale: Locale = storedLocale === "en" || storedLocale === "es" ? storedLocale : getBrowserLocale();
    setLocaleState(nextLocale);
    document.documentElement.lang = nextLocale;
  }, [initialLocale]);

  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale);
    window.localStorage.setItem(STORAGE_KEY, nextLocale);
    document.documentElement.lang = nextLocale;
  };

  const value = useMemo<I18nContextValue>(() => ({
    locale,
    setLocale,
    toggleLocale: () => setLocale(locale === "es" ? "en" : "es"),
    t: (section) => translations[locale][section],
    dictionary: translations[locale],
  }), [locale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used inside I18nProvider");
  return context;
};
