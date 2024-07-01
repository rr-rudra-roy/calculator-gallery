import { Dispatch } from "react"
import { Action, ActionType } from "@/calculators/basic/reducer/BasicCalculatorReducer"
import { spaceGrotesk } from "@/lib/fonts"

export function AdditionOperationButton({ dispatch }: { dispatch: Dispatch<Action> }) {
  return (
    <>
      <button
        type="button"
        id="addition-operator-button"
        className="py-4 lg:py-6 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
        onClick={() =>
          dispatch({
            type: ActionType.CHOOSE_OPERATION,
            payload: { operation: "+" },
          })
        }
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

export function SubtractionOperationButton({ dispatch }: { dispatch: Dispatch<Action> }) {
  return (
    <>
      <button
        type="button"
        id="subtraction-operator-button"
        className="py-4 lg:py-6 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
        onClick={() =>
          dispatch({
            type: ActionType.CHOOSE_OPERATION,
            payload: { operation: "-" },
          })
        }
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

export function MultiplicationOperationButton({ dispatch }: { dispatch: Dispatch<Action> }) {
  return (
    <>
      <button
        type="button"
        id="multiplication-operator-button"
        className="py-4 lg:py-6 flex justify-center items-center bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
        onClick={() =>
          dispatch({
            type: ActionType.CHOOSE_OPERATION,
            payload: { operation: "*" },
          })
        }
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
  dispatch,
  theme,
}: {
  dispatch: Dispatch<Action>
  theme: "light" | "dark"
}) {
  return (
    <>
      <button
        type="button"
        id="divison-operator-button"
        className="py-4 lg:py-6 flex justify-center items-center bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
        onClick={() =>
          dispatch({
            type: ActionType.CHOOSE_OPERATION,
            payload: { operation: "/" },
          })
        }
      >
        <span className="sr-only">Divison</span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 aspect-auto fill-gray-900 dark:fill-white"
        >
          <path d="M6.34277 12L17.6565 12" stroke={theme === "light" ? "#000000" : "#FFFFFF"} />
          <circle cx="12" cy="16.9498" r="1.5" transform="rotate(45 12 16.9498)" />
          <circle cx="12" cy="7.05024" r="1.5" transform="rotate(45 12 7.05024)" />
        </svg>
      </button>
    </>
  )
}

export function ModulusOperationButton({ dispatch }: { dispatch: Dispatch<Action> }) {
  return (
    <>
      <button
        type="button"
        id="modulus-operator-button"
        className="py-4 lg:py-6 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
        onClick={() =>
          dispatch({
            type: ActionType.CHOOSE_OPERATION,
            payload: { operation: "%" },
          })
        }
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

export function PlusMinusButton({
  dispatch,
  theme,
}: {
  dispatch: Dispatch<Action>
  theme: "light" | "dark"
}) {
  return (
    <>
      <button
        type="button"
        id="plus-minus-button"
        className="py-4 lg:py-6 flex justify-center items-center bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
        onClick={() => dispatch({ type: ActionType.PLUS_MINUS })}
      >
        <span className="sr-only">Plus Minus</span>
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 aspect-auto fill-gray-900 dark:fill-gray-100"
        >
          <path d="M12 4V14M7 9H17M7 20H17" stroke={theme === "light" ? "#000000" : "#FFFFFF"} />
        </svg>
      </button>
    </>
  )
}
