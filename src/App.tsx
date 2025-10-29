import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import QuizPage from "./pages/QuizPage";
import type { ExamId, Question } from "./types/quiz";
import { useI18n } from "./locales/I18nProvider";

import { awsSAAQuestions } from "./data/awsSAAQuestions";
import { awsCloudPractitionerQuestions } from "./data/awsCloudPractitionerQuestions";
import { microsoftAzureAZ900Questions } from "./data/microsoftAzureAZ900Questions";
import { scrumMasterIQuestions } from "./data/scrumMasterIQuestions";
import { scrumMasterIIQuestions } from "./data/scrumMasterIIQuestions";
import { scrumDeveloperIQuestions } from "./data/scrumDeveloperIQuestions";
import ScrollToTopButton from "./components/ScrollToTopButton";

type ExamMeta = {
  id: ExamId;
  nameKey:
    | "exams.awsSAA"
    | "exams.awsCloudPractitioner"
    | "exams.microsoftAzureAZ900"
    | "exams.scrumMasterI"
    | "exams.scrumMasterII"
    | "exams.scrumDeveloperI";
  questions: Question[];
};

const STORAGE_EXAM = "aws-quiz.exam";

export default function App() {
  const { t } = useI18n();

  const exams = useMemo<Record<ExamId, ExamMeta>>(
    () => ({
      "aws-saa": {
        id: "aws-saa",
        nameKey: "exams.awsSAA",
        questions: awsSAAQuestions,
      },
      "aws-cloud-practitioner": {
        id: "aws-cloud-practitioner",
        nameKey: "exams.awsCloudPractitioner",
        questions: awsCloudPractitionerQuestions,
      },
      "azure-az900": {
        id: "azure-az900",
        nameKey: "exams.microsoftAzureAZ900",
        questions: microsoftAzureAZ900Questions,
      },
      "scrum-master-i": {
        id: "scrum-master-i",
        nameKey: "exams.scrumMasterI",
        questions: scrumMasterIQuestions,
      },
      "scrum-master-ii": {
        id: "scrum-master-ii",
        nameKey: "exams.scrumMasterII",
        questions: scrumMasterIIQuestions,
      },
      "scrum-developer-i": {
        id: "scrum-developer-i",
        nameKey: "exams.scrumDeveloperI",
        questions: scrumDeveloperIQuestions,
      },
    }),
    []
  );

  const [currentExam, setCurrentExam] = useState<ExamId>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(STORAGE_EXAM) as ExamId | null;
      if (saved && saved in exams) return saved;
    }
    return "aws-saa";
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_EXAM, currentExam);
    } catch {}
  }, [currentExam]);

  const exam = exams[currentExam];

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
        currentExam={currentExam}
        onChangeExam={(id) => {
          // nếu đang làm bài, đưa về home trước khi đổi đề
          if (quizConfig.started) {
            setQuizConfig({ mode: null, count: 0, started: false });
          }
          setCurrentExam(id);
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
        <ScrollToTopButton />
        <Footer />
      </div>
    </div>
  );
}
