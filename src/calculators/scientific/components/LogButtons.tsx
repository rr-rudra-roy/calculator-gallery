import { Dispatch } from "react"
import { Action, ActionType } from "@/calculators/scientific/reducer/ScientificCalculatorReducer"
import { spaceGrotesk } from "@/lib/fonts"

export function CommonLog({ dispatch }: { dispatch: Dispatch<Action> }) {
  return (
    <>
      <button
        type="button"
        className="py-4 lg:py-6 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
        onClick={() => dispatch({ type: ActionType.CALCULATE_BASE_10_LOG })}
      >
        <span
          className={`${spaceGrotesk.className} text-sm md:text-base lg:text-lg text-gray-900 dark:text-gray-100`}
        >
          lg
        </span>
      </button>
    </>
  )
}

export function NaturalLog({ dispatch }: { dispatch: Dispatch<Action> }) {
  return (
    <>
      <button
        type="button"
        className="py-4 lg:py-6 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
        onClick={() => dispatch({ type: ActionType.CALCULATE_NATURAL_LOG })}
      >
        <span
          className={`${spaceGrotesk.className} text-sm md:text-base lg:text-lg text-gray-900 dark:text-gray-100`}
        >
          ln
        </span>
      </button>
    </>
  )
}
