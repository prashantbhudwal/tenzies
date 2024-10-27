export function Die({ value }: { value: number }) {
  return (
    <div className="w-16 h-16 bg-slate-400 rounded-md flex items-center justify-center">
      <h1 className="text-xl font-bold">{value}</h1>
    </div>
  );
}
