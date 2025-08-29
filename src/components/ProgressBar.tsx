type Props = {
  current: number;
  total: number;
};

export default function ProgressBar({ current, total }: Props) {
  const pct = Math.round((current / Math.max(1, total)) * 100);
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-1 text-sm">
        <div>Progress</div>
        <div className="text-slate-600">
          {current}/{total}
        </div>
      </div>
      <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-brand-300 to-brand-500 transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
