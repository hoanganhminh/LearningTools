import type { Question } from "../types/quiz";
import AnswerButton from "./AnswerButton";

type Props = {
  q: Question;
  selectedIds: string[]; // hỗ trợ multi-select
  onToggle: (id: string) => void;
  disabled: boolean;
  revealState?: { [id: string]: "neutral" | "correct" | "incorrect" };
};

export default function QuestionCard({
  q,
  selectedIds,
  onToggle,
  disabled,
  revealState = {},
}: Props) {
  const isSelected = (id: string) => selectedIds.includes(id);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-lg font-semibold mb-4">{q.prompt}</h2>

      <div className="grid gap-3">
        {q.options.map((opt) => (
          <AnswerButton
            key={opt.id}
            id={opt.id}
            text={opt.text}
            selected={isSelected(opt.id)}
            disabled={disabled}
            state={revealState[opt.id] ?? "neutral"}
            onClick={(id) => onToggle(id)}
          />
        ))}
      </div>
    </div>
  );
}
