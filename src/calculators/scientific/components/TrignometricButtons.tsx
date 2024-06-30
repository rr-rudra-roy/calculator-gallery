import { Dispatch } from "react"
import { Action, ActionType } from "@/calculators/scientific/reducer/ScientificCalculatorReducer"
import { spaceGrotesk } from "@/lib/fonts"

export function DegreeRadianToggle({
  degOrRad,
  dispatch,
}: {
  degOrRad: "deg" | "rad"
  dispatch: Dispatch<Action>
}) {
  return (
    <>
      <div className="w-full relative col-span-2 flex bg-white dark:bg-gray-800">
        <div
          className={`absolute h-full w-1/2 ${
            degOrRad === "deg" ? "translate-x-0" : "translate-x-[100%]"
          } rounded border border-blue-600 transition-all duration-300"`}
        ></div>
        <button
          type="button"
          className={`flex-grow`}
          onClick={() =>
            dispatch({
              type: ActionType.SET_DEGREE_AND_RADIANS,
              payload: { value: "deg" },
            })
          }
        >
          <span className="sr-only">Degree</span>
          <span
            className={`${spaceGrotesk.className} text-sm md:text-base font-semibold text-blue-600 dark:text-blue-500`}
          >
            Deg
          </span>
        </button>
        <button
          type="button"
          className="flex-grow"
          onClick={() =>
            dispatch({
              type: ActionType.SET_DEGREE_AND_RADIANS,
              payload: { value: "rad" },
            })
          }
        >
          <span className="sr-only">Radians</span>
          <span
            className={`${spaceGrotesk.className} text-sm md:text-base font-semibold text-blue-600 dark:text-blue-500`}
          >
            Rad
          </span>
        </button>
      </div>
    </>
  )
}

export function SinButton({ dispatch }: { dispatch: Dispatch<Action> }) {
  return (
    <>
      <button
        type="button"
        className="py-4 lg:py-6 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
        onClick={() => dispatch({ type: ActionType.CALCULATE_SIN })}
      >
        <span
          className={`${spaceGrotesk.className} text-sm lg:text-base text-gray-900 dark:text-gray-100`}
        >
          Sin
        </span>
      </button>
    </>
  )
}

export function CosButton({ dispatch }: { dispatch: Dispatch<Action> }) {
  return (
    <>
      <button
        type="button"
        className="py-4 lg:py-6 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
        onClick={() => dispatch({ type: ActionType.CALCULATE_COS })}
      >
        <span
          className={`${spaceGrotesk.className} text-sm lg:text-base text-gray-900 dark:text-gray-100`}
        >
          Cos
        </span>
      </button>
    </>
  )
}

export function TanButton({ dispatch }: { dispatch: Dispatch<Action> }) {
  return (
    <>
      <button
        type="button"
        className="py-4 lg:py-6 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
        onClick={() => dispatch({ type: ActionType.CALCULATE_TAN })}
      >
        <span
          className={`${spaceGrotesk.className} text-sm lg:text-base text-gray-900 dark:text-gray-100`}
        >
          Tan
        </span>
      </button>
    </>
  )
}

export function SinInverseButton({ dispatch }: { dispatch: Dispatch<Action> }) {
  return (
    <>
      <button
        type="button"
        className="py-4 lg:py-6 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
        onClick={() => dispatch({ type: ActionType.CALCULATE_SIN_INVERSE })}
      >
        <span
          className={`${spaceGrotesk.className} text-sm lg:text-base text-gray-900 dark:text-gray-100`}
        >
          Sin
        </span>
        <sup className="mx-1 text-[0.5rem] sm:text-xs text-gray-900 dark:text-gray-100">-1</sup>
      </button>
    </>
  )
}

export function CosInverseButton({ dispatch }: { dispatch: Dispatch<Action> }) {
  return (
    <>
      <button
        type="button"
        className="py-4 lg:py-6 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
        onClick={() => dispatch({ type: ActionType.CALCULATE_COS_INVERSE })}
      >
        <span
          className={`${spaceGrotesk.className} text-sm lg:text-base text-gray-900 dark:text-gray-100`}
        >
          Cos
        </span>
        <sup className="mx-1 text-[0.5rem] sm:text-xs text-gray-900 dark:text-gray-100">-1</sup>
      </button>
    </>
  )
}

export function TanInverseButton({ dispatch }: { dispatch: Dispatch<Action> }) {
  return (
    <>
      <button
        type="button"
        className="py-4 lg:py-6 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
        onClick={() => dispatch({ type: ActionType.CALCULATE_TAN_INVERSE })}
      >
        <span className="sr-only">Tan Inverse</span>
        <span
          className={`${spaceGrotesk.className} text-sm lg:text-base text-gray-900 dark:text-gray-100`}
        >
          Tan
        </span>
        <sup className="mx-1 text-[0.5rem] sm:text-xs text-gray-900 dark:text-gray-100">-1</sup>
      </button>
    </>
  )
}
