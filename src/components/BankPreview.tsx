import { useState } from "react";
import type { Question } from "../types/quiz";
import { useI18n } from "../locales/I18nProvider";

function EyeIcon({ open = false }: { open?: boolean }) {
  return open ? (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 5c5 0 9.27 3.11 11 7-1.73 3.89-6 7-11 7S3.73 15.89 2 12c1.73-3.89 6-7 10-7z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ) : (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M17.94 17.94C16.11 19.09 14.12 20 12 20c-5 0-9.27-3.11-11-7 .93-2.09 2.6-3.88 4.64-5.12M1 1l22 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type Props = {
  questions: Question[];
};

export default function BankPreview({ questions }: Props) {
  const { t } = useI18n();
  const [revealMap, setRevealMap] = useState<Record<string, boolean>>({});

  return (
    <div className="space-y-4">
      {questions.map((q, idx) => {
        const show = !!revealMap[q.id];
        const correctIds = q.correctOptionId.split(",").map((s) => s.trim());
        return (
          <div key={q.id} className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="font-medium mb-1">
                  {t("bank.questionNumber", { n: idx + 1 })}
                </div>
                <div className="text-sm text-slate-700 mb-3">{q.prompt}</div>

                <div className="grid gap-2">
                  {q.options.map((opt) => {
                    const isCorrect = correctIds.includes(opt.id);
                    return (
                      <div
                        key={opt.id}
                        className={`p-2 rounded-md border ${
                          show && isCorrect
                            ? "bg-emerald-50 border-emerald-300"
                            : "bg-white border-slate-200"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-sm font-semibold">
                            {opt.id.toUpperCase()}
                          </div>
                          <div className="text-sm">{opt.text}</div>
                          {show && isCorrect && (
                            <div className="ml-auto text-emerald-700 font-medium">
                              ✓
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex-shrink-0">
                <button
                  title={show ? t("bank.hideAnswers") : t("bank.showAnswers")}
                  onClick={() =>
                    setRevealMap((m) => ({ ...m, [q.id]: !m[q.id] }))
                  }
                  className="p-2 rounded-md border hover:bg-slate-50"
                  aria-label={
                    show ? t("bank.hideAnswers") : t("bank.showAnswers")
                  }
                >
                  <EyeIcon open={show} />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
