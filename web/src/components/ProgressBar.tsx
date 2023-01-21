interface ProgressBarProps {
  progress: number;
}

export function ProgressBar(props: ProgressBarProps) {
  return (
    <div className="h-3 rounded-xl bg-zinc-700 w-full mt-4">
      <div
        role="progressbar"
        aria-label="progresso de hábitos completados nesse dia"
        aria-valuenow={props.progress}
        aria-valuemax={100}
        style={{ width: `${props.progress}%` }}
        className="h-3 rounded-xl bg-violet-600"
      ></div>
    </div>
  );
}
