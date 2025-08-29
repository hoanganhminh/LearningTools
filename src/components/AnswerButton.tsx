import clsx from "clsx";

type Props = {
  id: string;
  text: string;
  selected: boolean;
  disabled?: boolean;
  state?: "neutral" | "correct" | "incorrect";
  onClick: (id: string) => void;
};

export default function AnswerButton({
  id,
  text,
  selected,
  disabled,
  state = "neutral",
  onClick,
}: Props) {
  const base =
    "w-full text-left p-3 rounded-lg border shadow-sm transition-transform transform-gpu";
  const neutral = "bg-white hover:scale-[1.01] border-slate-200";
  const selectedClass = "ring-2 ring-offset-1 ring-brand-300";
  const correctClass = "bg-emerald-50 border-emerald-300";
  const incorrectClass = "bg-rose-50 border-rose-300 animate-pulse";
  //const hiddenCorrect = "bg-emerald-50/30";

  return (
    <button
      className={clsx(
        base,
        neutral,
        selected && selectedClass,
        state === "correct" && correctClass,
        state === "incorrect" && incorrectClass,
        disabled && "opacity-80 cursor-not-allowed"
      )}
      onClick={() => onClick(id)}
      disabled={disabled}
      aria-pressed={selected}
    >
      <div className="flex items-start gap-3">
        <div
          className={clsx(
            "w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold text-slate-700 shrink-0",
            state === "correct" ? "bg-emerald-200" : "bg-slate-100"
          )}
        >
          {id.toUpperCase()}
        </div>
        <div className="flex-1">
          <div className="leading-snug">{text}</div>
        </div>
        {/* optional status pill */}
        {state === "correct" && (
          <div className="text-sm text-emerald-700 font-medium ml-2">✓</div>
        )}
        {state === "incorrect" && (
          <div className="text-sm text-rose-700 font-medium ml-2">✕</div>
        )}
      </div>
    </button>
  );
}
