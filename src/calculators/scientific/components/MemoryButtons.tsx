"use client"
import { Dispatch, useState } from "react"
import { Action, ActionType } from "@/calculators/scientific/reducer/ScientificCalculatorReducer"
import { spaceGrotesk } from "@/lib/fonts"

export function MemoryPlus({ dispatch }: { dispatch: Dispatch<Action> }) {
  return (
    <>
      <button
        type="button"
        className="py-4 lg:py-6 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
        onClick={() => dispatch({ type: ActionType.ADD_MEMORY })}
      >
        <span
          className={`${spaceGrotesk.className} text-sm md:text-base font-semibold text-blue-600 dark:text-blue-500`}
        >
          M+
        </span>
      </button>
    </>
  )
}

export function MemoryMinus({ dispatch }: { dispatch: Dispatch<Action> }) {
  return (
    <>
      <button
        type="button"
        className="py-4 lg:py-6 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
        onClick={() => dispatch({ type: ActionType.SUBTRACT_MEMORY })}
      >
        <span
          className={`${spaceGrotesk.className} text-sm md:text-base font-semibold text-blue-600 dark:text-blue-500`}
        >
          M-
        </span>
      </button>
    </>
  )
}

export function MemoryRemember({ dispatch }: { dispatch: Dispatch<Action> }) {
  const [showClearMemory, setShowClearMemory] = useState(false)

  const clickHandler = () => {
    setShowClearMemory((prev) => !prev)

    if (showClearMemory) {
      dispatch({ type: ActionType.CLEAR_MEMORY })
    } else {
      dispatch({ type: ActionType.RECALL_MEMORY })
    }
  }

  return (
    <>
      <button
        type="button"
        className="py-4 lg:py-6 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
        onClick={clickHandler}
      >
        <span
          className={`${spaceGrotesk.className} text-sm md:text-base font-semibold text-blue-600 dark:text-blue-500`}
        >
          {showClearMemory ? "MC" : "MR"}
        </span>
      </button>
    </>
  )
}
