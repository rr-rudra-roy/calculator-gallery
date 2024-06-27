import { Dispatch } from "react"
import {
  Action,
  ActionType,
} from "@/calculators/basic/reducer/BasicCalculatorReducer"
import { spaceGrotesk } from "@/lib/fonts"

export function DigitButton({
  digit,
  dispatch,
}: {
  digit: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
  dispatch: Dispatch<Action>
}) {
  return (
    <>
      <button
        type="button"
        className="py-4 lg:py-6 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
        onClick={() =>
          dispatch({ type: ActionType.ADD_DIGIT, payload: { digit: digit } })
        }
      >
        <span
          className={`${spaceGrotesk.className} text-base md:text-lg lg:text-xl text-gray-900 dark:text-gray-100`}
        >
          {digit}
        </span>
      </button>
    </>
  )
}

export function PeriodButton({ dispatch }: { dispatch: Dispatch<Action> }) {
  return (
    <>
      <button
        type="button"
        className="py-4 lg:py-6 flex justify-center items-center bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
        onClick={() =>
          dispatch({ type: ActionType.ADD_DIGIT, payload: { digit: "." } })
        }
      >
        <span className="sr-only">Period</span>
        <span
          className={`${spaceGrotesk.className} text-lg md:text-xl lg:text-2xl text-gray-900 dark:text-gray-100`}
        >
          .
        </span>
      </button>
    </>
  )
}
