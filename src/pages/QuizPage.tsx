import { useEffect, useMemo, useState } from "react";
import type { Question } from "../types/quiz";
import ProgressBar from "../components/ProgressBar";
import QuestionCard from "../components/QuestionCard";

type Props = {
  questions: Question[];
  mode: "random" | "sequential";
  count: number;
  onQuit: () => void;
};

function shuffle<T>(arr: T[]) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function QuizPage({ questions, mode, count, onQuit }: Props) {
  const prepared = useMemo(() => {
    return mode === "random"
      ? shuffle(questions).slice(0, count)
      : questions.slice(0, count);
  }, [questions, mode, count]);

  const [index, setIndex] = useState(0);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [revealState, setRevealState] = useState<{
    [id: string]: "neutral" | "correct" | "incorrect";
  }>({});
  const [disabledOps, setDisabledOps] = useState(false);
  const [score, setScore] = useState(0);
  const [checked, setChecked] = useState(false);
  const [showQuitConfirm, setShowQuitConfirm] = useState(false);

  useEffect(() => {
    setIndex(0);
    setSelectedIds([]);
    setRevealState({});
    setDisabledOps(false);
    setScore(0);
    setChecked(false);
  }, [prepared]);

  const currentQ = prepared[index];

  const correctIds = useMemo(() => {
    if (!currentQ) return [];
    return currentQ.correctOptionId.split(",").map((s) => s.trim());
  }, [currentQ]);

  function toggleSelect(id: string) {
    if (disabledOps || checked) return;
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }

  function handleCheck() {
    if (!currentQ || selectedIds.length === 0) return;

    const selSet = new Set(selectedIds);
    const corrSet = new Set(correctIds);

    let equal = selSet.size === corrSet.size;
    if (equal) {
      for (const id of selSet) {
        if (!corrSet.has(id)) {
          equal = false;
          break;
        }
      }
    }

    if (equal) {
      const newReveal: { [id: string]: "neutral" | "correct" } = {};
      correctIds.forEach((id) => (newReveal[id] = "correct"));
      setRevealState(newReveal);
      setChecked(true);
      setDisabledOps(true);
      setScore((s) => s + 1);
    } else {
      const incorrectSelected = selectedIds.filter((id) => !corrSet.has(id));
      if (incorrectSelected.length === 0) {
        setDisabledOps(true);
        setTimeout(() => setDisabledOps(false), 900);
      } else {
        const newReveal: { [id: string]: "incorrect" } = {};
        incorrectSelected.forEach((id) => (newReveal[id] = "incorrect"));
        setRevealState(newReveal);
        setDisabledOps(true);
        setTimeout(() => {
          setRevealState({});
          setDisabledOps(false);
          setSelectedIds([]);
        }, 1200);
      }
    }
  }

  function handleNext() {
    if (!checked) return;
    if (index + 1 >= prepared.length) {
      setTimeout(() => {
        alert(`Kết thúc! Điểm của bạn: ${score}/${prepared.length}`);
        onQuit();
      }, 100);
      return;
    }
    setIndex((i) => i + 1);
    setSelectedIds([]);
    setRevealState({});
    setDisabledOps(false);
    setChecked(false);
  }

  return (
    <div className="max-w-3xl mx-auto px-3 sm:px-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2 sm:gap-0">
        <div className="text-sm text-slate-600">
          Mode: <span className="font-medium">{mode}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-sm text-slate-600">
            Score: <span className="font-semibold">{score}</span>
          </div>
          <button
            onClick={() => setShowQuitConfirm(true)}
            className="text-sm px-3 py-1 rounded border hover:bg-slate-100"
          >
            Thoát
          </button>
        </div>
      </div>

      <ProgressBar
        current={index + (checked ? 1 : 0)}
        total={prepared.length}
      />

      {currentQ ? (
        <>
          <QuestionCard
            q={currentQ}
            selectedIds={selectedIds}
            onToggle={toggleSelect}
            disabled={disabledOps || checked}
            revealState={revealState}
          />

          <div className="mt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              className="px-4 py-2 rounded bg-slate-100 border hover:bg-slate-200"
              onClick={() => {
                setSelectedIds([]);
                setRevealState({});
              }}
            >
              Reset selection
            </button>

            <button
              onClick={handleCheck}
              disabled={selectedIds.length === 0 || checked || disabledOps}
              className="px-4 py-2 rounded bg-brand-500 text-white disabled:opacity-50"
            >
              Kiểm tra
            </button>

            <button
              onClick={handleNext}
              className="px-4 py-2 rounded border hover:bg-slate-50 sm:ml-auto"
              disabled={!checked}
            >
              {index + 1 >= prepared.length ? "Xem kết quả" : "Câu tiếp theo"}
            </button>
          </div>

          <div className="mt-3 text-sm text-slate-500">
            Bạn đã làm {index + (checked ? 1 : 0)} / {prepared.length}
          </div>
        </>
      ) : (
        <div>Không có câu hỏi</div>
      )}

      {showQuitConfirm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm w-full">
            <h2 className="text-lg font-semibold text-slate-800 mb-3">
              Thoát bài kiểm tra?
            </h2>
            <p className="text-sm text-slate-600 mb-4">
              Bạn sẽ mất toàn bộ tiến độ hiện tại. Bạn có chắc chắn muốn thoát?
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowQuitConfirm(false)}
                className="px-4 py-2 rounded border hover:bg-slate-100"
              >
                Hủy
              </button>
              <button
                onClick={() => {
                  setShowQuitConfirm(false);
                  onQuit();
                }}
                className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600"
              >
                Thoát
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
