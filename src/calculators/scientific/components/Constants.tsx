import { Dispatch } from "react"
import {
  Action,
  AddConstantsType,
} from "@/calculators/scientific/reducer/ScientificCalculatorReducerType"
import { spaceGrotesk } from "@/lib/fonts"

export function PIButton({ dispatch }: { dispatch: Dispatch<Action> }) {
  return (
    <>
      <button
        type="button"
        className="py-4 lg:py-6 flex justify-center items-center bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
        onClick={() => {
          dispatch({ type: AddConstantsType.ADD_PI })
        }}
      >
        <span className="sr-only">Pi</span>
        <span
          className={`${spaceGrotesk.className} font-thin text-base md:text-lg lg:text-xl text-gray-800 dark:text-gray-200`}
        >
          π
        </span>
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
        onClick={() => {
          dispatch({ type: AddConstantsType.ADD_EULERS_NUMBER })
        }}
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
