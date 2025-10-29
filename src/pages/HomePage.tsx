import { useState } from "react";
import type { Question } from "../types/quiz";
import BankPreview from "../components/BankPreview";
import StartModal from "../components/StartModal";
import { useI18n } from "../locales/I18nProvider";

type Props = {
  questions: Question[];
  examName: string;
  onStart: (mode: "random" | "sequential", count: number) => void;
};

export default function HomePage({ questions, examName, onStart }: Props) {
  const { t } = useI18n();
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <aside className="bg-white p-6 rounded-2xl shadow-md order-1 md:order-none">
        <h3 className="text-lg font-semibold mb-2">
          {t("home.startLearning")}
        </h3>
        <p className="text-sm text-slate-600 mb-4">{t("home.desc")}</p>
        <div className="space-y-3">
          <button
            onClick={() => setShowModal(true)}
            className="w-full py-3 rounded bg-brand-500 text-white"
          >
            {t("home.btn.startQuiz")}
          </button>
          <button className="w-full py-3 rounded border">
            {t("home.btn.studyEach")}
          </button>
        </div>
      </aside>

      <div className="md:col-span-2 order-2 md:order-none">
        <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between">
          <h2 className="text-2xl font-semibold mb-2 md:mb-0">
            {t("home.previewTitle", { exam: examName })}
          </h2>
          <div className="text-sm text-slate-500">
            {t("home.total", { count: questions.length })}
          </div>
        </div>
        <BankPreview questions={questions} />
      </div>

      {showModal && (
        <StartModal
          maxCount={questions.length}
          onStart={(mode, count) => {
            setShowModal(false);
            onStart(mode, count);
          }}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}
