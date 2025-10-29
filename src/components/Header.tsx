import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useI18n } from "../locales/I18nProvider";

export default function Header() {
  const { t, lang, setLang } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleLang = () => setLang(lang === "vi" ? "en" : "vi");

  return (
    <header className="bg-white/80 backdrop-blur sticky top-0 z-30 border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-300 to-brand-500 flex items-center justify-center text-white font-bold shadow">
            AWS
          </div>
          <div>
            <h1 className="text-lg font-semibold">{t("app.title")}</h1>
            <p className="text-sm text-slate-500">{t("app.subtitle")}</p>
          </div>
        </div>

        {/* Actions (desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <nav className="text-sm text-slate-600">
            <span className="mr-4 hover:text-brand-500 cursor-pointer">
              {t("nav.preview")}
            </span>
            <span className="mr-4 hover:text-brand-500 cursor-pointer">
              {t("nav.study")}
            </span>
            <span className="font-medium hover:text-brand-500 cursor-pointer">
              {t("nav.quiz")}
            </span>
          </nav>

          {/* Language toggle */}
          <button
            aria-label={t("lang.toggleLabel")}
            title={t("lang.toggleLabel")}
            onClick={toggleLang}
            className="ml-2 inline-flex items-center gap-2 px-3 py-1.5 rounded border text-sm hover:bg-slate-50"
          >
            <Globe size={16} />
            <span className="font-medium">
              {lang === "vi" ? t("lang.vi") : t("lang.en")}
            </span>
          </button>
        </div>

        {/* Hamburger (mobile) */}
        <button
          className="md:hidden p-2 rounded hover:bg-slate-100"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t bg-white px-4 py-3 text-sm text-slate-600">
          <div className="py-2 hover:text-brand-500 cursor-pointer">
            {t("nav.preview")}
          </div>
          <div className="py-2 hover:text-brand-500 cursor-pointer">
            {t("nav.study")}
          </div>
          <div className="py-2 font-medium hover:text-brand-500 cursor-pointer">
            {t("nav.quiz")}
          </div>

          {/* Language toggle mobile */}
          <button
            aria-label={t("lang.toggleLabel")}
            title={t("lang.toggleLabel")}
            onClick={toggleLang}
            className="mt-2 inline-flex items-center gap-2 px-3 py-2 rounded border w-full justify-center"
          >
            <Globe size={16} />
            <span className="font-medium">
              {lang === "vi" ? t("lang.vi") : t("lang.en")}
            </span>
          </button>
        </div>
      )}
    </header>
  );
}
