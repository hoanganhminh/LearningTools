import { useState } from "react";
import type { Question } from "../types/quiz";
import BankPreview from "../components/BankPreview";
import StartModal from "../components/StartModal";

type Props = {
  questions: Question[];
  onStart: (mode: "random" | "sequential", count: number) => void;
};

export default function HomePage({ questions, onStart }: Props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Start learning section - show first on mobile */}
      <aside className="bg-white p-6 rounded-2xl shadow-md order-1 md:order-none">
        <h3 className="text-lg font-semibold mb-2">Start learning</h3>
        <p className="text-sm text-slate-600 mb-4">
          Chọn chế độ random hoặc theo thứ tự để kiểm tra.
        </p>
        <div className="space-y-3">
          <button
            onClick={() => setShowModal(true)}
            className="w-full py-3 rounded bg-brand-500 text-white"
          >
            Bắt đầu kiểm tra
          </button>
          <button className="w-full py-3 rounded border">
            Học từng câu (coming soon)
          </button>
        </div>
      </aside>

      {/* Bank preview section */}
      <div className="md:col-span-2 order-2 md:order-none">
        <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between">
          <h2 className="text-2xl font-semibold mb-2 md:mb-0">
            Preview Bank đề (Solutions Architect Associate (SAA-C03))
          </h2>
          <div className="text-sm text-slate-500">
            {questions.length} câu hỏi trong bank
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