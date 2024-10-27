import { useState } from "react";
import { Die } from "./Die";

function App() {
  const getNewDice = function () {
    return Array.from({ length: 10 }, () => Math.floor(Math.random() * 6) + 1);
  };

  const [dieValues, setDieValues] = useState(() => getNewDice());

  return (
    <div className="bg-[#0B2434] min-h-screen">
      <main className=" w-10/12 h-96 mx-auto border-2 border-green-50 rounded-md bg-[#F5F5F5] flex flex-col items-center justify-center">
        <div className="grid grid-cols-5 grid-rows-2 gap-2">
          {dieValues.map((dieValue, i) => (
            <Die value={dieValue} key={i} />
          ))}
        </div>
        <button
          className="mt-10 bg-slate-700 rounded-lg w-24 h-10 text-gray-50 hover:scale-105 active:scale-100"
          onClick={() => setDieValues(getNewDice())}
        >
          Roll
        </button>
      </main>
    </div>
  );
}

export default App;
