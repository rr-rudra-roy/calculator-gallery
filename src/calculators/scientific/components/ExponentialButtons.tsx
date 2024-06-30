import { Dispatch } from "react"
import { Action, ActionType } from "@/calculators/scientific/reducer/ScientificCalculatorReducer"
import { spaceGrotesk } from "@/lib/fonts"

export function XToThePowerTen({ dispatch }: { dispatch: Dispatch<Action> }) {
  return (
    <>
      <button
        type="button"
        className="py-4 lg:py-6 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
        onClick={() => dispatch({ type: ActionType.CALCULATE_POWER_TEN })}
      >
        <span className="sr-only">Tan Inverse</span>
        <span
          className={`${spaceGrotesk.className} text-base md:text-lg lg:text-xl text-gray-900 dark:text-gray-100`}
        >
          x
        </span>
        <sup className="mx-1 text-xs md:text-sm text-gray-900 dark:text-gray-100">10</sup>
      </button>
    </>
  )
}

export function XToThePowerTwo({ dispatch }: { dispatch: Dispatch<Action> }) {
  return (
    <>
      <button
        type="button"
        className="py-4 lg:py-6 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
        onClick={() => dispatch({ type: ActionType.CALCULATE_SQUARE })}
      >
        <span className="sr-only">Tan Inverse</span>
        <span
          className={`${spaceGrotesk.className} text-base md:text-lg lg:text-xl text-gray-900 dark:text-gray-100`}
        >
          x
        </span>
        <sup className="mx-1 text-xs md:text-sm text-gray-900 dark:text-gray-100">2</sup>
      </button>
    </>
  )
}

export function XToThePowerThree({ dispatch }: { dispatch: Dispatch<Action> }) {
  return (
    <>
      <button
        type="button"
        className="py-4 lg:py-6 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
        onClick={() => dispatch({ type: ActionType.CALCULATE_CUBE })}
      >
        <span className="sr-only">Tan Inverse</span>
        <span
          className={`${spaceGrotesk.className} text-base md:text-lg lg:text-xl text-gray-900 dark:text-gray-100`}
        >
          x
        </span>
        <sup className="mx-1 text-xs md:text-sm text-gray-900 dark:text-gray-100">3</sup>
      </button>
    </>
  )
}

export function EToThePowerX({ dispatch }: { dispatch: Dispatch<Action> }) {
  return (
    <>
      <button
        type="button"
        className="py-4 lg:py-6 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
        onClick={() => dispatch({ type: ActionType.CALCULATE_EULERS_POWER })}
      >
        <span
          className={`${spaceGrotesk.className} text-base md:text-lg lg:text-xl text-gray-900 dark:text-gray-100`}
        >
          e
        </span>
        <sup className="mx-1 text-xs md:text-sm text-gray-900 dark:text-gray-100">x</sup>
      </button>
    </>
  )
}

export function SquareRoot({ dispatch }: { dispatch: Dispatch<Action> }) {
  return (
    <>
      <button
        type="button"
        className="py-4 flex justify-center items-center lg:py-6 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
        onClick={() => dispatch({ type: ActionType.CALCULATE_SQUARE_ROOT })}
      >
        <span className="sr-only">Square root</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-6 w-6 aspect-auto fill-gray-700 dark:fill-gray-300"
        >
          <path d="M11.76 16.83L14.59 14l-2.83-2.83l1.41-1.41L16 12.59l2.83-2.83l1.41 1.41L17.41 14l2.83 2.83l-1.41 1.41L16 15.41l-2.83 2.83l-1.41-1.41M2 11h3l2.29 5.4L10 6h12v2H11.55L8.68 19H6.22l-2.54-6H2v-2Z" />
        </svg>
      </button>
    </>
  )
}

export function CubeRoot({ dispatch }: { dispatch: Dispatch<Action> }) {
  return (
    <>
      <button
        type="button"
        className="py-2 lg:py-4 flex justify-center items-center bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
        onClick={() => dispatch({ type: ActionType.CALCULATE_CUBE_ROOT })}
      >
        <span className="sr-only">cube root</span>
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="400.000000pt"
          height="400.000000pt"
          viewBox="0 0 400.000000 400.000000"
          preserveAspectRatio="xMidYMid meet"
          className="h-10 w-10 aspect-auto fill-gray-900 dark:fill-gray-100"
        >
          <g transform="translate(0.000000,400.000000) scale(0.100000,-0.100000)">
            <path d="M1225 2877 c-51 -24 -103 -75 -130 -126 -14 -28 -13 -30 12 -47 26 -17 27 -16 42 7 52 78 101 109 174 109 82 0 137 -73 123 -162 -11 -66 -39 -96 -107 -115 -59 -16 -59 -16 -59 -55 0 -37 1 -38 35 -38 138 0 220 -164 142 -282 -24 -37 -97 -78 -137 -78 -88 0 -173 65 -206 158 -18 49 -21 52 -53 52 l-34 0 7 -42 c29 -178 185 -276 378 -238 74 14 123 38 160 77 58 61 75 180 37 263 -27 60 -54 88 -113 116 l-48 22 40 21 c141 72 135 273 -11 347 -76 40 -183 44 -252 11z" />
            <path d="M1942 2848 c-53 -191 -406 -1375 -411 -1380 -3 -4 -49 100 -101 232 l-95 240 -72 -72 -73 -72 0 -90 0 -90 55 54 c30 29 57 52 59 49 3 -2 57 -139 122 -304 64 -165 119 -303 123 -308 4 -4 119 362 256 813 l248 820 469 0 468 0 0 70 0 70 -520 0 -519 0 -9 -32z" />
          </g>
        </svg>
      </button>
    </>
  )
}
