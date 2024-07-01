import { Dispatch } from "react"
import { Action, ActionType } from "@/calculators/basic/reducer/BasicCalculatorReducer"
import { spaceGrotesk } from "@/lib/fonts"

export function ACButton({ dispatch }: { dispatch: Dispatch<Action> }) {
  return (
    <>
      <button
        type="button"
        id="clear-button"
        className="py-4 lg:py-7 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
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

export function BackSpaceButton({
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
        id="backspace-button"
        className="py-4 lg:py-6 flex justify-center items-center bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
        onClick={() => dispatch({ type: ActionType.DELETE_DIGIT })}
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
        id="evaluate-button"
        className="py-4 lg:py-6 flex justify-center items-center bg-oceanBlue hover:bg-cosmicCobalt transition-all duration-200"
        onClick={() => dispatch({ type: ActionType.CALCULATE })}
      >
        <span className="sr-only">Equal</span>
        <span className={`${spaceGrotesk.className} text-xl md:text-2xl lg:text-4xl text-gray-50`}>
          =
        </span>
      </button>
    </>
  )
}
