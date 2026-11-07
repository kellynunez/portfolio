import { useI18n } from "../../i18n/I18nProvider";
import { useRouter } from "next/router";

export const LanguageSwitcher = () => {
  const router = useRouter();
  const { locale, setLocale, dictionary } = useI18n();

  const handleToggle = () => {
    const nextLocale = locale === "es" ? "en" : "es";
    setLocale(nextLocale);
    void router.push(nextLocale === "en" ? "/en" : "/");
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={dictionary.language.switchTo}
      title={dictionary.language.switchTo}
      className="flex h-8 items-center gap-1 border border-zinc-700 bg-zinc-900/80 px-2 text-[11px] font-bold tracking-wider text-zinc-400 transition-colors hover:border-[#38FF96] hover:text-white"
    >
      <span className={locale === "es" ? "text-[#38FF96]" : ""}>ES</span>
      <span className="text-zinc-600">/</span>
      <span className={locale === "en" ? "text-[#38FF96]" : ""}>EN</span>
    </button>
  );
};
