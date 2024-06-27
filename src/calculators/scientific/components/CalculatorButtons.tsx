"use client"
import { Dispatch, useState } from "react"
import { Action, ActionType } from "../reducer/ScientificCalculatorReducer"
import { spaceGrotesk } from "@/lib/fonts"

export function DigitButton({
  digit,
  dispatch,
}: {
  digit: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
  dispatch: Dispatch<Action>
}) {
  return (
    <>
      <button
        type="button"
        className="py-4 lg:py-6 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
        onClick={() =>
          dispatch({ type: ActionType.ADD_DIGIT, payload: { digit: digit } })
        }
      >
        <span
          className={`${spaceGrotesk.className} text-base md:text-lg lg:text-xl text-gray-900 dark:text-gray-100`}
        >
          {digit}
        </span>
      </button>
    </>
  )
}

export function ACButton({ dispatch }: { dispatch: Dispatch<Action> }) {
  return (
    <>
      <button
        type="button"
        className="py-4 lg:py-7 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
        onClick={() => dispatch({ type: ActionType.CLEAR })}
      >
        <span className="sr-only">Clear</span>
        <span
          className={`${spaceGrotesk.className} text-base md:text-lg lg:text-xl font-medium text-oceanBlue dark:text-blue-400`}
        >
          AC
        </span>
      </button>
    </>
  )
}

export function BackSpaceButton({ dispatch }: { dispatch: Dispatch<Action> }) {
  return (
    <>
      <button
        type="button"
        className="py-4 lg:py-6 flex justify-center items-center bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
        onClick={() => dispatch({ type: ActionType.BACKSPACE })}
      >
        <span className="sr-only">Backspace</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          className="h-6 w-6 aspect-auto fill-gray-900 dark:fill-gray-100"
        >
          <path d="M360-200q-20 0-37.5-9T294-234L120-480l174-246q11-16 28.5-25t37.5-9h400q33 0 56.5 23.5T840-680v400q0 33-23.5 56.5T760-200H360Zm400-80v-400 400Zm-400 0h400v-400H360L218-480l142 200Zm96-40 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Z" />
        </svg>
      </button>
    </>
  )
}

export function EqualButton({ dispatch }: { dispatch: Dispatch<Action> }) {
  return (
    <>
      <button
        type="button"
        className="py-4 lg:py-6 flex justify-center items-center bg-oceanBlue hover:bg-cosmicCobalt transition-all duration-200"
        onClick={() => dispatch({ type: ActionType.EVALUATE })}
      >
        <span className="sr-only">Equal</span>
        <span
          className={`${spaceGrotesk.className} text-xl md:text-2xl lg:text-4xl text-gray-50`}
        >
          =
        </span>
      </button>
    </>
  )
}

export function ParenthesesLeft() {
  return (
    <>
      <button
        type="button"
        className="py-4 lg:py-6 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
      >
        <span
          className={`text-base md:text-lg lg:text-xl text-gray-900 dark:text-gray-100`}
        >
          {"("}
        </span>
      </button>
    </>
  )
}

export function ParenthesesRight() {
  return (
    <>
      <button
        type="button"
        className="py-4 lg:py-6 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
      >
        <span
          className={`text-base md:text-lg lg:text-xl text-gray-900 dark:text-gray-100`}
        >
          {")"}
        </span>
      </button>
    </>
  )
}

export function AdditionOperationButton({
  dispatch,
}: {
  dispatch: Dispatch<Action>
}) {
  return (
    <>
      <button
        type="button"
        className="py-4 lg:py-6 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
        onClick={() => {
          dispatch({
            type: ActionType.CHOOSE_OPERATION,
            payload: { operation: "+" },
          })
        }}
      >
        <span className="sr-only">Addition</span>
        <span
          className={`${spaceGrotesk.className} text-lg md:text-xl lg:text-2xl text-gray-900 dark:text-gray-100`}
        >
          +
        </span>
      </button>
    </>
  )
}

export function SubtractionOperationButton({
  dispatch,
}: {
  dispatch: Dispatch<Action>
}) {
  return (
    <>
      <button
        type="button"
        className="py-4 lg:py-6 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
        onClick={() => {
          dispatch({
            type: ActionType.CHOOSE_OPERATION,
            payload: { operation: "-" },
          })
        }}
      >
        <span className="sr-only">Subtraction</span>
        <span
          className={`${spaceGrotesk.className} text-lg md:text-xl lg:text-2xl text-gray-900 dark:text-gray-100`}
        >
          -
        </span>
      </button>
    </>
  )
}

export function MultiplicationOperationButton({
  dispatch,
}: {
  dispatch: Dispatch<Action>
}) {
  return (
    <>
      <button
        type="button"
        className="py-4 lg:py-6 flex justify-center items-center bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
        onClick={() => {
          dispatch({
            type: ActionType.CHOOSE_OPERATION,
            payload: { operation: "*" },
          })
        }}
      >
        <span className="sr-only">Multiplication</span>
        <svg
          className="h-4 w-4 aspect-auto fill-gray-800 dark:fill-gray-100"
          viewBox="-3.5 0 19 19"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z" />
        </svg>
      </button>
    </>
  )
}

export function DivisonOperationButton({
  theme,
  dispatch,
}: {
  theme: "light" | "dark"
  dispatch: Dispatch<Action>
}) {
  return (
    <>
      <button
        type="button"
        className="py-4 lg:py-6 flex justify-center items-center bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
        onClick={() => {
          dispatch({
            type: ActionType.CHOOSE_OPERATION,
            payload: { operation: "/" },
          })
        }}
      >
        <span className="sr-only">Divison</span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 aspect-auto fill-gray-900 dark:fill-white"
        >
          <path
            d="M6.34277 12L17.6565 12"
            stroke={theme === "light" ? "#000000" : "#FFFFFF"}
          />
          <circle
            cx="12"
            cy="16.9498"
            r="1.5"
            transform="rotate(45 12 16.9498)"
          />
          <circle
            cx="12"
            cy="7.05024"
            r="1.5"
            transform="rotate(45 12 7.05024)"
          />
        </svg>
      </button>
    </>
  )
}

export function ModulusOperationButton({
  dispatch,
}: {
  dispatch: Dispatch<Action>
}) {
  return (
    <>
      <button
        type="button"
        className="py-4 lg:py-6 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
        onClick={() => {
          dispatch({
            type: ActionType.CHOOSE_OPERATION,
            payload: { operation: "%" },
          })
        }}
      >
        <span className="sr-only">Modulus</span>
        <span
          className={`${spaceGrotesk.className} text-base md:text-lg lg:text-xl text-gray-900 dark:text-gray-100`}
        >
          %
        </span>
      </button>
    </>
  )
}

export function PIButton({
  theme,
  dispatch,
}: {
  theme: "light" | "dark"
  dispatch: Dispatch<Action>
}) {
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

export function PlusMinusButton({
  theme,
  dispatch,
}: {
  theme: "light" | "dark"
  dispatch: Dispatch<Action>
}) {
  return (
    <>
      <button
        type="button"
        className="py-4 lg:py-6 flex justify-center items-center bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
        onClick={() => dispatch({ type: ActionType.PLUS_MINUS })}
      >
        <span className="sr-only">Plus Minus</span>
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 aspect-auto fill-gray-900 dark:fill-gray-100"
        >
          <path
            d="M12 4V14M7 9H17M7 20H17"
            stroke={theme === "light" ? "#000000" : "#FFFFFF"}
          />
        </svg>
      </button>
    </>
  )
}

export function PeriodButton({ dispatch }: { dispatch: Dispatch<Action> }) {
  return (
    <>
      <button
        type="button"
        className="py-4 lg:py-6 flex justify-center items-center bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
        onClick={() =>
          dispatch({ type: ActionType.ADD_DIGIT, payload: { digit: "." } })
        }
      >
        <span className="sr-only">Period</span>
        <span
          className={`${spaceGrotesk.className} text-lg md:text-xl lg:text-2xl text-gray-900 dark:text-gray-100`}
        >
          .
        </span>
      </button>
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
        <sup className="mx-1 text-[0.5rem] sm:text-xs text-gray-900 dark:text-gray-100">
          -1
        </sup>
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
        <sup className="mx-1 text-[0.5rem] sm:text-xs text-gray-900 dark:text-gray-100">
          -1
        </sup>
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
        <sup className="mx-1 text-[0.5rem] sm:text-xs text-gray-900 dark:text-gray-100">
          -1
        </sup>
      </button>
    </>
  )
}

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
        <sup className="mx-1 text-xs md:text-sm text-gray-900 dark:text-gray-100">
          10
        </sup>
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
        <sup className="mx-1 text-xs md:text-sm text-gray-900 dark:text-gray-100">
          2
        </sup>
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
        <sup className="mx-1 text-xs md:text-sm text-gray-900 dark:text-gray-100">
          3
        </sup>
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
        <sup className="mx-1 text-xs md:text-sm text-gray-900 dark:text-gray-100">
          x
        </sup>
      </button>
    </>
  )
}

export function OneDividedByX({ dispatch }: { dispatch: Dispatch<Action> }) {
  return (
    <>
      <button
        type="button"
        className="py-4 lg:py-6 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
        onClick={() => dispatch({ type: ActionType.CALCULATE_INVERSE })}
      >
        <span className="sr-only">Inverse</span>
        <span
          className={`${spaceGrotesk.className} text-sm md:text-base text-gray-900 dark:text-gray-100`}
        >
          1/x
        </span>
      </button>
    </>
  )
}

export function XFactorial({ dispatch }: { dispatch: Dispatch<Action> }) {
  return (
    <>
      <button
        type="button"
        className="py-4 lg:py-6 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
        onClick={() => dispatch({ type: ActionType.CALCULATE_FACTORIAL })}
      >
        <span className="sr-only">Factorial</span>
        <span
          className={`${spaceGrotesk.className} text-sm md:text-base text-gray-900 dark:text-gray-100`}
        >
          x
        </span>
        <span
          className={`${spaceGrotesk.className} mx-0.5 text-sm md:text-base text-gray-900 dark:text-gray-100`}
        >
          !
        </span>
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
