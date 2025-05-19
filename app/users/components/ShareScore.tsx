interface ShareScoreProps {
  score: number;
}

export default function ShareScore({ score }: ShareScoreProps) {
  return (
    <div className="pl-2">
      <div className="text-xs/3 pb-2">나눔지수</div>
      <div className="flex items-baseline">
        <div className="text-3xl/7.5 pr-1">{score}</div>
        <div className="text-xl/5 font-bold">°C</div>
      </div>
    </div>
  );
}
