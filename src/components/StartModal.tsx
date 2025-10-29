import { useState, useRef } from "react";
import { useI18n } from "../locales/I18nProvider";

type Props = {
  maxCount: number;
  onStart: (mode: "random" | "sequential", count: number) => void;
  onClose: () => void;
};

export default function StartModal({ maxCount, onStart, onClose }: Props) {
  const { t } = useI18n();
  const [mode, setMode] = useState<"random" | "sequential">("random");

  const [countInput, setCountInput] = useState<string>(
    String(Math.min(10, maxCount))
  );
  const inputRef = useRef<HTMLInputElement | null>(null);

  const parsed = /^\d+$/.test(countInput) ? parseInt(countInput, 10) : NaN;
  const isValid = Number.isInteger(parsed) && parsed >= 1 && parsed <= maxCount;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const digitsOnly = e.target.value.replace(/[^\d]/g, "");
    setCountInput(digitsOnly);
  }

  function handleBlur() {
    if (!/^\d+$/.test(countInput)) return;
    const n = Math.min(maxCount, Math.max(1, parseInt(countInput, 10)));
    setCountInput(String(n));
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && isValid) {
      onStart(mode, parsed as number);
    }
  }

  function start() {
    if (!isValid) {
      // focus vào input nếu chưa hợp lệ
      inputRef.current?.focus();
      return;
    }
    onStart(mode, parsed as number);
  }

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center px-3 sm:px-4">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative bg-white rounded-xl shadow-xl p-5 sm:p-6 w-full max-w-sm sm:max-w-md md:max-w-lg">
        <h3 className="text-lg sm:text-xl font-semibold mb-2">
          {t("start.title")}
        </h3>
        <p className="text-sm text-slate-600 mb-4">{t("start.desc")}</p>

        <div className="mb-4">
          <label className="block text-sm mb-1">{t("start.mode")}</label>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => setMode("random")}
              className={`flex-1 px-4 py-2 rounded transition ${
                mode === "random"
                  ? "bg-brand-500 text-white"
                  : "border hover:bg-slate-50"
              }`}
            >
              {t("start.mode.random")}
            </button>
            <button
              onClick={() => setMode("sequential")}
              className={`flex-1 px-4 py-2 rounded transition ${
                mode === "sequential"
                  ? "bg-brand-500 text-white"
                  : "border hover:bg-slate-50"
              }`}
            >
              {t("start.mode.sequential")}
            </button>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm mb-1">
            {t("start.countLabel", { max: maxCount })}
          </label>
          <input
            ref={inputRef}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            value={countInput}
            onChange={handleChange}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            className={`w-full sm:w-32 p-2 border rounded ${
              isValid || countInput === ""
                ? "border-slate-300"
                : "border-rose-400"
            }`}
            aria-invalid={!isValid && countInput !== "" ? true : undefined}
            aria-describedby="count-help"
            placeholder="e.g. 10"
          />
          {!isValid && countInput !== "" && (
            <div id="count-help" className="mt-1 text-xs text-rose-600">
              {t("start.countLabel", { max: maxCount })}
            </div>
          )}
        </div>

        <div className="flex flex-col-reverse sm:flex-row justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded border w-full sm:w-auto"
          >
            {t("start.btn.cancel")}
          </button>
          <button
            onClick={start}
            disabled={!isValid}
            className="px-4 py-2 rounded bg-brand-500 text-white w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {t("start.btn.start")}
          </button>
        </div>
      </div>
    </div>
  );
}
