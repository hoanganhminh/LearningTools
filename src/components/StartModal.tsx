import { useState } from "react";

type Props = {
  maxCount: number;
  onStart: (mode: "random" | "sequential", count: number) => void;
  onClose: () => void;
};

export default function StartModal({ maxCount, onStart, onClose }: Props) {
  const [mode, setMode] = useState<"random" | "sequential">("random");
  const [count, setCount] = useState<number>(Math.min(10, maxCount));

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center px-3 sm:px-4">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative bg-white rounded-xl shadow-xl p-5 sm:p-6 w-full max-w-sm sm:max-w-md md:max-w-lg">
        <h3 className="text-lg sm:text-xl font-semibold mb-2">
          Bắt đầu kiểm tra
        </h3>
        <p className="text-sm text-slate-600 mb-4">Chọn chế độ và số câu hỏi</p>

        <div className="mb-4">
          <label className="block text-sm mb-1">Chế độ</label>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => setMode("random")}
              className={`flex-1 px-4 py-2 rounded transition ${
                mode === "random"
                  ? "bg-brand-500 text-white"
                  : "border hover:bg-slate-50"
              }`}
            >
              Random
            </button>
            <button
              onClick={() => setMode("sequential")}
              className={`flex-1 px-4 py-2 rounded transition ${
                mode === "sequential"
                  ? "bg-brand-500 text-white"
                  : "border hover:bg-slate-50"
              }`}
            >
              Theo thứ tự
            </button>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm mb-1">
            Số câu hỏi (1 - {maxCount})
          </label>
          <input
            type="number"
            min={1}
            max={maxCount}
            value={count}
            onChange={(e) =>
              setCount(
                Math.min(maxCount, Math.max(1, Number(e.target.value || 1)))
              )
            }
            className="w-full sm:w-32 p-2 border rounded"
          />
        </div>

        <div className="flex flex-col-reverse sm:flex-row justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded border w-full sm:w-auto"
          >
            Hủy
          </button>
          <button
            onClick={() => onStart(mode, count)}
            className="px-4 py-2 rounded bg-brand-500 text-white w-full sm:w-auto"
          >
            Bắt đầu
          </button>
        </div>
      </div>
    </div>
  );
}
