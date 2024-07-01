"use client"
import { Dispatch, useState } from "react"
import {
  Action,
  MemoryActionType,
} from "@/calculators/scientific/reducer/ScientificCalculatorReducerType"
import { spaceGrotesk } from "@/lib/fonts"

export function MemoryPlus({ dispatch }: { dispatch: Dispatch<Action> }) {
  return (
    <>
      <button
        type="button"
        className="py-4 lg:py-6 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
        onClick={() => dispatch({ type: MemoryActionType.ADD_MEMORY })}
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
        onClick={() => dispatch({ type: MemoryActionType.SUBTRACT_MEMORY })}
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

export function MemoryRememberOrClear({ dispatch }: { dispatch: Dispatch<Action> }) {
  const [showMemoryClear, setShowMemoryClear] = useState(false)

  const clickHandler = () => {
    if (showMemoryClear) {
      dispatch({ type: MemoryActionType.CLEAR_MEMORY })
      setShowMemoryClear((prev) => !prev)
    } else {
      dispatch({ type: MemoryActionType.RECALL_MEMORY })
      setShowMemoryClear((prev) => !prev)
    }
  }

  if (showMemoryClear) {
    return <MemoryClear clickHandler={clickHandler} />
  } else {
    return <MemoryRemember clickHandler={clickHandler} />
  }
}

export function MemoryRemember({ clickHandler }: { clickHandler: () => void }) {
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
          MR
        </span>
      </button>
    </>
  )
}

export function MemoryClear({ clickHandler }: { clickHandler: () => void }) {
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
          MC
        </span>
      </button>
    </>
  )
}
