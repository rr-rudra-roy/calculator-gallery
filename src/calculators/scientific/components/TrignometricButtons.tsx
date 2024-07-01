import { Dispatch } from "react"
import {
  Action,
  TrignometricActionType,
} from "@/calculators/scientific/reducer/ScientificCalculatorReducerType"
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
          className={`h-full w-full flex-grow`}
          onClick={() =>
            dispatch({
              type: TrignometricActionType.TOOGLE_DEGREE_AND_RADIANS,
              payload: { degOrRad: "deg" },
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
        <button type="button" className="h-full w-full flex-grow">
          <span className="sr-only">Radians</span>
          <span
            className={`${spaceGrotesk.className} text-sm md:text-base font-semibold text-blue-600 dark:text-blue-500`}
            onClick={() =>
              dispatch({
                type: TrignometricActionType.TOOGLE_DEGREE_AND_RADIANS,
                payload: { degOrRad: "rad" },
              })
            }
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
        onClick={() => dispatch({ type: TrignometricActionType.CALCULATE_SIN })}
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
        onClick={() => dispatch({ type: TrignometricActionType.CALCULATE_COS })}
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
        onClick={() => dispatch({ type: TrignometricActionType.CALCULATE_TAN })}
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
        onClick={() => dispatch({ type: TrignometricActionType.CALCULATE_SIN_INVERSE })}
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
        onClick={() => dispatch({ type: TrignometricActionType.CALCULATE_COS_INVERSE })}
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
        onClick={() => dispatch({ type: TrignometricActionType.CALCULATE_TAN_INVERSE })}
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
