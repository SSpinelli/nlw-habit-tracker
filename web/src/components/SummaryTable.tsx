import { generateDatesFromYearBeginning } from "../utils/generate-dates-from-year-beginning";
import HabitDay from "./HabitDay";

const daysArray = ["D", "S", "T", "Q", "Q", "S", "S"];

const summaryDates = generateDatesFromYearBeginning();
const minimumSumaryDatesSize = 18 * 7;
const amountOfDaysToFill = minimumSumaryDatesSize - summaryDates.length;

export function SummaryTable() {
  return (
    <main className="w-full flex">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {daysArray.map((d, i) => (
          <div
            key={`${d}-${i}`}
            className="text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center"
          >
            {d}
          </div>
        ))}
      </div>
      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {summaryDates.map((d) => (
          (
            <HabitDay 
              key={`${d}`} 
              amount={5} 
              completed={Math.round(Math.random() * 5)}
            />
          )
        ))}

        {amountOfDaysToFill > 0 &&
          Array.from({ length: amountOfDaysToFill }).map((_d, i) => {
            return (
              <div
                key={i}
                className="w-10 h-10 bg-zinc-800 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed"
              />
            );
          })}
      </div>
    </main>
  );
}
