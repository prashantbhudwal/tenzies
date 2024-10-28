type DieProps = React.HTMLAttributes<HTMLDivElement> & {
  value: number;
  holdDie: (id: string) => void;
  id: string;
};

export function Die({ value, id, holdDie, ...props }: DieProps) {
  return (
    <div {...props} onClick={() => holdDie(id)}>
      <h1 className="text-xl font-bold">{value}</h1>
    </div>
  );
}
