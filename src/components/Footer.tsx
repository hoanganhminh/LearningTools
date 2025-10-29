import { useI18n } from "../locales/I18nProvider";

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="mt-8 py-6 px-4 text-center text-xs sm:text-sm text-slate-500 dark:text-slate-400">
      <p className="leading-relaxed">{t("footer.built")}</p>
    </footer>
  );
}
