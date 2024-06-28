"use client"
import { useEffect, useReducer, useCallback } from "react"
import Header from "@/layouts/Header"
import Footer from "@/layouts/Footer"
import { useTheme } from "@/context/ThemeContext"
import {
  INITIAL_STATE,
  ActionType,
  reducer,
} from "./reducer/BasicCalculatorReducer"
import { DigitButton, PeriodButton } from "./components/DigitButtons"
import {
  AdditionOperationButton,
  SubtractionOperationButton,
  MultiplicationOperationButton,
  DivisonOperationButton,
  ModulusOperationButton,
  PlusMinusButton,
} from "./components/OperatorButtons"
import {
  ACButton,
  BackSpaceButton,
  EqualButton,
} from "./components/CalculatorButtons"

export default function BasicCalculator() {
  const { theme, toggleTheme } = useTheme()
  const [{ previousOperand, currentOperand, operationSymbol }, dispatch] =
    useReducer(reducer, INITIAL_STATE)

  // Handle key press events
  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    if (event.repeat) return // Prevent multiple triggers on long key press

    const digitKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    const operationKeys = ["+", "-", "*", "/", "%"]

    if (digitKeys.includes(event.key)) {
      dispatch({ type: ActionType.ADD_DIGIT, payload: { digit: event.key } })
    } else if (event.key === ".") {
      dispatch({ type: ActionType.ADD_DIGIT, payload: { digit: "." } })
    } else if (operationKeys.includes(event.key)) {
      dispatch({
        type: ActionType.CHOOSE_OPERATION,
        payload: { operation: event.key },
      })
    } else if (event.key === "Enter" || event.key === "=") {
      event.preventDefault() // Prevent default behavior (e.g., form submission)
      dispatch({ type: ActionType.CALCULATE })
    } else if (event.key === "Backspace") {
      dispatch({ type: ActionType.DELETE_DIGIT })
    } else if (event.key === "Escape") {
      dispatch({ type: ActionType.CLEAR })
    }
  }, [])

  // Add event listener for key press
  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress)
    return () => {
      window.removeEventListener("keydown", handleKeyPress)
    }
  }, [handleKeyPress])

  return (
    <>
      <main className={`w-full h-full ${theme}`}>
        <section className="w-full h-full bg-white dark:bg-darkJungleGreen">
          <div>
            <Header />
          </div>
          <section className="w-full h-full mt-12 sm:mt-20 md:mt-28 lg:mt-36">
            <div className="w-full md:max-w-[600px] mx-auto px-4">
              <div className="h-full w-full my-8 bg-slate-100 dark:bg-slate-900 shadow-md dark:shadow-slate-700">
                <div className="w-full h-full flex flex-col bg-slate-200 dark:bg-slate-800">
                  <div
                    id="previousOperand"
                    className="h-12 md:h-16 px-4 flex justify-end items-center text-base md:text-lg lg:text-xl font-semibold text-gray-700 dark:text-gray-300"
                  >
                    {previousOperand} {operationSymbol}
                  </div>
                  <div
                    id="currentOperand"
                    className="h-12 md:h-16 px-4 flex justify-end items-center text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 dark:text-gray-100"
                  >
                    {currentOperand}
                  </div>
                </div>
                <div className="w-full h-full grid grid-cols-4 gap-0.5">
                  <ACButton dispatch={dispatch} />
                  <BackSpaceButton dispatch={dispatch} theme={theme} />
                  <ModulusOperationButton dispatch={dispatch} />
                  <DivisonOperationButton dispatch={dispatch} theme={theme} />

                  <DigitButton digit="7" dispatch={dispatch} />
                  <DigitButton digit="8" dispatch={dispatch} />
                  <DigitButton digit="9" dispatch={dispatch} />
                  <MultiplicationOperationButton dispatch={dispatch} />

                  <DigitButton digit="4" dispatch={dispatch} />
                  <DigitButton digit="5" dispatch={dispatch} />
                  <DigitButton digit="6" dispatch={dispatch} />
                  <SubtractionOperationButton dispatch={dispatch} />

                  <DigitButton digit="1" dispatch={dispatch} />
                  <DigitButton digit="2" dispatch={dispatch} />
                  <DigitButton digit="3" dispatch={dispatch} />
                  <AdditionOperationButton dispatch={dispatch} />

                  <PlusMinusButton dispatch={dispatch} theme={theme} />
                  <DigitButton digit="0" dispatch={dispatch} />
                  <PeriodButton dispatch={dispatch} />
                  <EqualButton dispatch={dispatch} />
                </div>
              </div>
            </div>
          </section>
          <div>
            <Footer />
          </div>
        </section>
      </main>
    </>
  )
}
