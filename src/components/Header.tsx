import { useEffect, useRef, useState } from "react";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { useI18n } from "../locales/I18nProvider";

export type ExamId = "aws-saa" | "scrum-master-ii";

type Props = {
  currentExam: ExamId;
  onChangeExam: (exam: ExamId) => void;
};

export default function Header({ currentExam, onChangeExam }: Props) {
  const { t, lang, setLang } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false); // mobile hamburger
  const [examOpen, setExamOpen] = useState(false); // exam dropdown (desktop & mobile)
  const [kbdIndex, setKbdIndex] = useState<number>(-1); // keyboard active item
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const toggleLang = () => setLang(lang === "vi" ? "en" : "vi");
  const examLabel = (id: ExamId) =>
    id === "aws-saa" ? t("exams.awsSAA") : t("exams.scrumMasterII");

  const examItems: { id: ExamId; label: string }[] = [
    { id: "aws-saa", label: t("exams.awsSAA") },
    { id: "scrum-master-ii", label: t("exams.scrumMasterII") },
  ];

  // Close on outside click
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!examOpen) return;
      const target = e.target as Node;
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(target) &&
        triggerRef.current &&
        !triggerRef.current.contains(target)
      ) {
        setExamOpen(false);
        setKbdIndex(-1);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [examOpen]);

  // Close on ESC
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setExamOpen(false);
        setKbdIndex(-1);
        triggerRef.current?.focus();
      }
      if (!examOpen) return;
      if (["ArrowDown", "ArrowUp", "Home", "End"].includes(e.key)) {
        e.preventDefault();
        const max = examItems.length;
        if (e.key === "ArrowDown") setKbdIndex((i) => (i + 1 + max) % max);
        if (e.key === "ArrowUp") setKbdIndex((i) => (i - 1 + max) % max);
        if (e.key === "Home") setKbdIndex(0);
        if (e.key === "End") setKbdIndex(max - 1);
      }
      if (e.key === "Enter" && kbdIndex >= 0) {
        const chosen = examItems[kbdIndex];
        onChangeExam(chosen.id);
        setExamOpen(false);
        setKbdIndex(-1);
        triggerRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [examOpen, kbdIndex, examItems, onChangeExam]);

  // When opening, focus first item for keyboard users
  useEffect(() => {
    if (examOpen) setKbdIndex(0);
    else setKbdIndex(-1);
  }, [examOpen]);

  const ExamDropdown = (
    <div
      ref={dropdownRef}
      className="absolute right-0 mt-2 w-56 rounded-lg border bg-white shadow-md py-2 z-40"
      role="menu"
      aria-label={t("exams.select")}
    >
      <div className="px-3 pb-2 text-xs text-slate-500">
        {t("exams.select")}
      </div>
      {examItems.map((item, idx) => {
        const active = idx === kbdIndex;
        const isCurrent = item.id === currentExam;
        return (
          <button
            key={item.id}
            className={`w-full text-left px-3 py-2 text-sm flex items-center gap-2
              ${active ? "bg-slate-100" : "hover:bg-slate-50"}
              ${isCurrent ? "font-semibold" : ""}`}
            role="menuitem"
            aria-current={isCurrent ? "true" : undefined}
            onMouseEnter={() => setKbdIndex(idx)}
            onClick={() => {
              onChangeExam(item.id);
              setExamOpen(false);
              setKbdIndex(-1);
              triggerRef.current?.focus();
            }}
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-400" />
            <span>{item.label}</span>
          </button>
        );
      })}
    </div>
  );

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

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-4">
          {/* Exams dropdown (click) */}
          <div className="relative">
            <button
              ref={triggerRef}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded border text-sm hover:bg-slate-50"
              aria-haspopup="menu"
              aria-expanded={examOpen}
              title={t("exams.select")}
              onClick={() => setExamOpen((o) => !o)}
            >
              <span className="font-medium">{t("exams.label")}:</span>
              <span>{examLabel(currentExam)}</span>
              <ChevronDown
                size={16}
                className={`transition ${examOpen ? "rotate-180" : ""}`}
              />
            </button>
            {examOpen && ExamDropdown}
          </div>

          {/* (optional) quick nav labels */}
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
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded border text-sm hover:bg-slate-50"
          >
            <Globe size={16} />
            <span className="font-medium">
              {lang === "vi" ? t("lang.vi") : t("lang.en")}
            </span>
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded hover:bg-slate-100"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden border-t bg-white px-4 py-3 text-sm text-slate-700 space-y-1">
          {/* Exams (click-to-open) */}
          <div className="relative">
            <button
              className="w-full flex items-center justify-between px-2 py-2 rounded border hover:bg-slate-50"
              onClick={() => setExamOpen((o) => !o)}
              aria-expanded={examOpen}
              aria-haspopup="menu"
              title={t("exams.select")}
            >
              <span className="font-medium">{t("exams.label")}:</span>
              <div className="flex items-center gap-2">
                <span className="text-slate-600">{examLabel(currentExam)}</span>
                <ChevronDown
                  size={16}
                  className={`${examOpen ? "rotate-180" : ""} transition`}
                />
              </div>
            </button>
            {examOpen && (
              <div
                className="mt-2 rounded-lg border bg-white shadow-sm"
                role="menu"
              >
                {examItems.map((item) => {
                  const isCurrent = item.id === currentExam;
                  return (
                    <button
                      key={item.id}
                      className={`w-full text-left px-3 py-2 text-sm hover:bg-slate-50 ${
                        isCurrent ? "font-semibold" : ""
                      }`}
                      role="menuitem"
                      onClick={() => {
                        onChangeExam(item.id);
                        setExamOpen(false);
                        setMenuOpen(false);
                      }}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Quick labels */}
          <div className="py-2 hover:text-brand-500 cursor-pointer">
            {t("nav.preview")}
          </div>
          <div className="py-2 hover:text-brand-500 cursor-pointer">
            {t("nav.study")}
          </div>
          <div className="py-2 font-medium hover:text-brand-500 cursor-pointer">
            {t("nav.quiz")}
          </div>

          {/* Language toggle */}
          <button
            aria-label={t("lang.toggleLabel")}
            title={t("lang.toggleLabel")}
            onClick={() => {
              toggleLang();
              // giữ menu mở để user thấy thay đổi
            }}
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
