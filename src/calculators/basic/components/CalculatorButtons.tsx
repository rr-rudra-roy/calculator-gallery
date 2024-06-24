import { Dispatch } from "react"
import { Action, ActionType } from "../reducer/BasicCalculatorReducer"
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
        className="py-4 lg:py-6 bg-white hover:bg-gray-100 transition-all duration-200"
        onClick={() =>
          dispatch({ type: ActionType.ADD_DIGIT, payload: { digit: digit } })
        }
      >
        <span
          className={`${spaceGrotesk.className} text-base md:text-lg lg:text-xl text-gray-900`}
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
        className="py-4 lg:py-7 bg-white hover:bg-gray-100 transition-all duration-200"
        onClick={() => dispatch({ type: ActionType.CLEAR })}
      >
        <span className="sr-only">Clear</span>
        <span
          className={`${spaceGrotesk.className} text-base md:text-lg lg:text-xl font-medium text-oceanBlue`}
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
        className="py-4 lg:py-6 flex justify-center items-center bg-white hover:bg-gray-100 transition-all duration-200"
        onClick={() => dispatch({ type: ActionType.DELETE_DIGIT })}
      >
        <span className="sr-only">Backspace</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          className="h-6 w-6 aspect-auto fill-gray-900"
        >
          <path d="M360-200q-20 0-37.5-9T294-234L120-480l174-246q11-16 28.5-25t37.5-9h400q33 0 56.5 23.5T840-680v400q0 33-23.5 56.5T760-200H360Zm400-80v-400 400Zm-400 0h400v-400H360L218-480l142 200Zm96-40 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Z" />
        </svg>
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
        className="py-4 lg:py-6 bg-white hover:bg-gray-100 transition-all duration-200"
        onClick={() =>
          dispatch({
            type: ActionType.CHOOSE_OPERATION,
            payload: { operation: "+" },
          })
        }
      >
        <span className="sr-only">Addition</span>
        <span
          className={`${spaceGrotesk.className} text-lg md:text-xl lg:text-2xl text-gray-900`}
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
        className="py-4 lg:py-6 bg-white hover:bg-gray-100 transition-all duration-200"
        onClick={() =>
          dispatch({
            type: ActionType.CHOOSE_OPERATION,
            payload: { operation: "-" },
          })
        }
      >
        <span className="sr-only">Subtraction</span>
        <span
          className={`${spaceGrotesk.className} text-lg md:text-xl lg:text-2xl text-gray-900`}
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
        className="py-4 lg:py-6 flex justify-center items-center bg-white hover:bg-gray-100 transition-all duration-200"
        onClick={() =>
          dispatch({
            type: ActionType.CHOOSE_OPERATION,
            payload: { operation: "*" },
          })
        }
      >
        <span className="sr-only">Multiplication</span>
        <svg
          className="h-4 w-4 aspect-auto fill-gray-800"
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
}: {
  dispatch: Dispatch<Action>
}) {
  return (
    <>
      <button
        type="button"
        className="py-4 lg:py-6 flex justify-center items-center bg-white hover:bg-gray-100 transition-all duration-200"
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
          className="h-6 w-6 aspect-auto fill-gray-900"
        >
          <path d="M6.34277 12L17.6565 12" stroke="#000000" />
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
        className="py-4 lg:py-6 bg-white hover:bg-gray-100 transition-all duration-200"
        onClick={() =>
          dispatch({
            type: ActionType.CHOOSE_OPERATION,
            payload: { operation: "%" },
          })
        }
      >
        <span className="sr-only">Modulus</span>
        <span
          className={`${spaceGrotesk.className} text-base md:text-lg lg:text-xl text-gray-900`}
        >
          %
        </span>
      </button>
    </>
  )
}

export function PlusMinusButton({ dispatch }: { dispatch: Dispatch<Action> }) {
  return (
    <>
      <button
        type="button"
        className="py-4 lg:py-6 flex justify-center items-center bg-white hover:bg-gray-100 transition-all duration-200"
        onClick={() => dispatch({ type: ActionType.PLUS_MINUS })}
      >
        <span className="sr-only">Plus Minus</span>
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 aspect-auto fill-gray-900"
        >
          <path d="M12 4V14M7 9H17M7 20H17" stroke="#000000" />
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
        className="py-4 lg:py-6 flex justify-center items-center bg-white hover:bg-gray-100 transition-all duration-200"
        onClick={() =>
          dispatch({ type: ActionType.ADD_DIGIT, payload: { digit: "." } })
        }
      >
        <span className="sr-only">Period</span>
        <span
          className={`${spaceGrotesk.className} text-lg md:text-xl lg:text-2xl text-gray-900`}
        >
          .
        </span>
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
        onClick={() => dispatch({ type: ActionType.CALCULATE })}
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
