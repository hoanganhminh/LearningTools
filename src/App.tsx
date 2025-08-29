import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import QuizPage from "./pages/QuizPage";
import type { Question } from "./types/quiz";
import { awsQuestions } from "./data/awsQuestions";

export default function App() {
  const [questions] = useState<Question[]>(awsQuestions);
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
      <Header />
      <main className="flex-1 w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6">
        <AnimatePresence mode="wait">
          {!quizConfig.started ? (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <HomePage questions={questions} onStart={startQuiz} />
            </motion.div>
          ) : (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <QuizPage
                questions={questions}
                mode={quizConfig.mode!}
                count={quizConfig.count}
                onQuit={quitQuiz}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      {/* Footer chỉ hiện trên tablet/desktop */}
      <div className="hidden sm:block">
        <Footer />
      </div>
    </div>
  );
}
