import { Dispatch } from "react"
import {
  Action,
  ParenthesesActionType,
} from "@/calculators/scientific/reducer/ScientificCalculatorReducerType"

export function ParenthesesOpen({ dispatch }: { dispatch: Dispatch<Action> }) {
  return (
    <>
      <button
        type="button"
        className="py-4 lg:py-6 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
        onClick={() => dispatch({ type: ParenthesesActionType.ADD_PARENTHESES_OPEN })}
      >
        <span className={`text-base md:text-lg lg:text-xl text-gray-900 dark:text-gray-100`}>
          {"("}
        </span>
      </button>
    </>
  )
}

export function ParenthesesClose({ dispatch }: { dispatch: Dispatch<Action> }) {
  return (
    <>
      <button
        type="button"
        className="py-4 lg:py-6 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
        onClick={() => dispatch({ type: ParenthesesActionType.ADD_PARENTHESES_CLOSE })}
      >
        <span className={`text-base md:text-lg lg:text-xl text-gray-900 dark:text-gray-100`}>
          {")"}
        </span>
      </button>
    </>
  )
}
