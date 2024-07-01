import { Dispatch } from "react"
import {
  Action,
  LogActionType,
} from "@/calculators/scientific/reducer/ScientificCalculatorReducerType"
import { spaceGrotesk } from "@/lib/fonts"

export function CommonLog({ dispatch }: { dispatch: Dispatch<Action> }) {
  return (
    <>
      <button
        type="button"
        className="py-4 lg:py-6 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
        onClick={() => dispatch({ type: LogActionType.CALCULATE_COMMON_LOG })}
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
        onClick={() => dispatch({ type: LogActionType.CALCULATE_NATURAL_LOG })}
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
