import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import vi from "./vi.json";
import en from "./en.json";

type Lang = "vi" | "en";
type Messages = Record<string, string>;
type Vars = Record<string, string | number>;

type I18nContextType = {
  t: (key: string, vars?: Vars) => string;
  lang: Lang;
  setLang: (lang: Lang) => void;
};

const I18nContext = createContext<I18nContextType | null>(null);

function interpolate(template: string, vars?: Vars) {
  if (!vars) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) =>
    vars[k] !== undefined ? String(vars[k]) : `{${k}}`
  );
}

const DICTS: Record<Lang, Messages> = {
  vi: vi as Messages,
  en: en as Messages,
};

const STORAGE_KEY = "aws-quiz.lang";

// Map mọi biến thể (vi, vi-VN, en-GB, en-US, ...) về ngôn ngữ hỗ trợ
function mapToSupported(langTag: string | undefined | null): Lang | null {
  if (!langTag) return null;
  const tag = langTag.toLowerCase();
  if (tag.startsWith("vi")) return "vi";
  if (tag.startsWith("en")) return "en";
  return null;
}

// Lấy ngôn ngữ ưa thích từ trình duyệt (navigator.languages ưu tiên hơn navigator.language)
function detectBrowserLang(): Lang {
  if (typeof window === "undefined") return "vi"; // fallback SSR
  const list = (
    navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language]
  ) as string[];
  for (const l of list) {
    const mapped = mapToSupported(l);
    if (mapped) return mapped;
  }
  return "en"; // fallback nếu không khớp
}

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [lang, setLangState] = useState<Lang>(() => {
    // 1) Ưu tiên localStorage nếu có
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (saved === "vi" || saved === "en") return saved;
    }
    // 2) Nếu chưa có, detect theo browser
    return detectBrowserLang();
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {}
  }, [lang]);

  const dict = DICTS[lang];

  const setLang = (l: Lang) => setLangState(l);

  const value = useMemo<I18nContextType>(() => {
    return {
      lang,
      setLang,
      t: (key: string, vars?: Vars) => {
        const template = dict[key] ?? key;
        return interpolate(template, vars);
      },
    };
  }, [lang, dict]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
