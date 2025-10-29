import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import QuizPage from "./pages/QuizPage";
import type { ExamId, Question } from "./types/quiz";
import { awsSAAQuestions } from "./data/awsSAAQuestions";
import { scrumMasterIIQuestions } from "./data/scrumMasterIIQuestions";
import { I18nProvider, useI18n } from "./locales/I18nProvider";

type ExamMeta = {
  id: ExamId;
  nameKey: "exams.awsSAA" | "exams.scrumMasterII";
  questions: Question[];
};

const STORAGE_EXAM = "aws-quiz.exam";

function AppInner() {
  const { t } = useI18n();

  const exams: Record<ExamId, ExamMeta> = useMemo(
    () => ({
      "aws-saa": {
        id: "aws-saa",
        nameKey: "exams.awsSAA",
        questions: awsSAAQuestions,
      },
      "scrum-master-ii": {
        id: "scrum-master-ii",
        nameKey: "exams.scrumMasterII",
        questions: scrumMasterIIQuestions,
      },
    }),
    []
  );

  const [selectedExam, setSelectedExam] = useState<ExamId>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(STORAGE_EXAM) as ExamId | null;
      if (saved === "aws-saa" || saved === "scrum-master-ii") return saved;
    }
    return "aws-saa";
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_EXAM, selectedExam);
    } catch {}
  }, [selectedExam]);

  const exam = exams[selectedExam];
  const [quizConfig, setQuizConfig] = useState<{
    mode: "random" | "sequential" | null;
    count: number;
    started: boolean;
  }>({ mode: null, count: 0, started: false });

  const startQuiz = (mode: "random" | "sequential", count: number) => {
    setQuizConfig({ mode, count, started: true });
  };

  const quitQuiz = () => {
    setQuizConfig({ mode: null, count: 0, started: false });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <Header
        currentExam={selectedExam}
        onChangeExam={(id) => {
          // nếu đang trong quiz, quay về home trước khi đổi
          if (quizConfig.started) {
            setQuizConfig({ mode: null, count: 0, started: false });
          }
          setSelectedExam(id);
        }}
      />
      <main className="flex-1 w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6">
        <AnimatePresence mode="wait">
          {!quizConfig.started ? (
            <motion.div
              key={`home-${exam.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <HomePage
                questions={exam.questions}
                examName={t(exam.nameKey)}
                onStart={startQuiz}
              />
            </motion.div>
          ) : (
            <motion.div
              key={`quiz-${exam.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <QuizPage
                questions={exam.questions}
                mode={quizConfig.mode!}
                count={quizConfig.count}
                onQuit={quitQuiz}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <div className="hidden sm:block">
        <Footer />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <I18nProvider>
      <AppInner />
    </I18nProvider>
  );
}
