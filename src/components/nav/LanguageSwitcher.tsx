import { useI18n } from "../../i18n/I18nProvider";

export const LanguageSwitcher = () => {
  const { locale, toggleLocale, dictionary } = useI18n();

  return (
    <button
      type="button"
      onClick={toggleLocale}
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
