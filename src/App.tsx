import { useEffect, useState } from "react";
import { Die } from "./Die";
import { nanoid } from "nanoid";

const getNewDice = function () {
  return Array.from({ length: 10 }, () => {
    return {
      value: Math.floor(Math.random() * 6) + 1,
      isHeld: false,
      id: nanoid(),
    };
  });
};

function App() {
  const [dieValues, setDieValues] = useState(() => getNewDice());
  const [hasWon, setHasWon] = useState(false);

  const rollDie = function () {
    setDieValues((oldValues) => {
      return oldValues.map((value) => {
        return value.isHeld ? value : getNewDice()[0];
      });
    });
  };

  const holdDie = function (id: string) {
    setDieValues((oldValues) => {
      return oldValues.map((value) => {
        return value.id === id ? { ...value, isHeld: true } : value;
      });
    });
  };

  useEffect(() => {
    const hasUnheldDie = dieValues.find((value) => !value.isHeld);

    const hasDifferentNumbers = dieValues.find(
      (dice) => dice.value !== dieValues[0].value
    );

    if (!hasUnheldDie && !hasDifferentNumbers) setHasWon(true);
  }, [dieValues]);

  return (
    <div className="bg-[#0B2434] min-h-screen">
      <main className=" w-10/12 h-96 mx-auto border-2 border-green-50 rounded-md bg-[#F5F5F5] flex flex-col items-center justify-center">
        <div className="grid grid-cols-5 grid-rows-2 gap-2">
          {dieValues.map((dieValue) => (
            <Die
              value={dieValue.value}
              key={dieValue.id}
              className={`w-16 h-16 rounded-md flex items-center justify-center cursor-pointer hover:scale-105 ${
                dieValue.isHeld ? "bg-green-400" : "bg-slate-400"
              }`}
              holdDie={holdDie}
              id={dieValue.id}
            />
          ))}
        </div>
        {hasWon ? (
          <div>You Win</div>
        ) : (
          <button
            className="mt-10 bg-slate-700 rounded-lg w-24 h-10 text-gray-50 hover:scale-105 active:scale-100"
            onClick={rollDie}
          >
            Roll
          </button>
        )}{" "}
      </main>
    </div>
  );
}

export default App;
