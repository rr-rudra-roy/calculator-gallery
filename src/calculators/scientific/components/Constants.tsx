import { Dispatch } from "react"
import { Action, ActionType } from "@/calculators/scientific/reducer/ScientificCalculatorReducer"
import { spaceGrotesk } from "@/lib/fonts"

export function PIButton({ dispatch }: { dispatch: Dispatch<Action> }) {
  return (
    <>
      <button
        type="button"
        className="py-4 lg:py-6 flex justify-center items-center bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
        onClick={() => dispatch({ type: ActionType.ADD_PI })}
      >
        <span className="sr-only">Pi</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 494.37"
          className="h-3 w-3 aspect-auto fill-gray-900 dark:fill-gray-100"
        >
          <path d="m0 150.27 18.66 1.39C38 129.78 45.6 65.06 159.61 77.72 155.47 355.03 33.86 384.28 41.46 441.17c2.76 32.24 28.33 52.05 55.96 53.2 87.3-2.99 83.38-120.68 110.56-417.34H320.6c-5.98 104.57-22.34 209.13-24.18 311.63 1.38 68.17 42.84 104.56 97.43 105.02 89.82 3 118.15-101.8 118.15-146.48h-19.35c-1.84 36.85-19.57 63.34-57.35 64.95-102.95 1.38-46.29-181.03-45.6-333.74l122.3.7-.69-78.08C2.98-1.44 67.5-11.4 0 150.27z" />
        </svg>
      </button>
    </>
  )
}

export function EulersNumber({ dispatch }: { dispatch: Dispatch<Action> }) {
  return (
    <>
      <button
        type="button"
        className="py-4 lg:py-6 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
        onClick={() => dispatch({ type: ActionType.ADD_EULERS_NUMBER })}
      >
        <span
          className={`${spaceGrotesk.className} text-base md:text-lg lg:text-xl text-gray-900 dark:text-gray-100`}
        >
          e
        </span>
      </button>
    </>
  )
}
