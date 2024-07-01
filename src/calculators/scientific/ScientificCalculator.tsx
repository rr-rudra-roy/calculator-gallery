"use client"
import { useEffect, useReducer, useCallback } from "react"
import Header from "@/layouts/Header"
import Footer from "@/layouts/Footer"
import { useTheme } from "@/context/ThemeContext"
import {
  CalculatorActionType,
  DigitActionType,
  OperationActionType,
} from "./reducer/ScientificCalculatorReducerType"
import { INITIAL_STATE, reducer } from "./reducer/ScientificCalculatorReducer"
import { PIButton, EulersNumber } from "./components/Constants"
import { DigitButton, PeriodButton } from "./components/DigitButtons"
import {
  AdditionOperationButton,
  SubtractionOperationButton,
  MultiplicationOperationButton,
  DivisonOperationButton,
  ModulusOperationButton,
  PlusMinusButton,
  InverseOperation,
  Factorial,
} from "./components/OperatorButtons"
import {
  SinButton,
  CosButton,
  TanButton,
  SinInverseButton,
  CosInverseButton,
  TanInverseButton,
  DegreeRadianToggle,
} from "./components/TrignometricButtons"
import {
  Square,
  Cube,
  PowerTen,
  EulersPowerX,
  SquareRoot,
  CubeRoot,
} from "./components/ExponentialButtons"
import { CommonLog, NaturalLog } from "./components/LogButtons"
import { ParenthesesOpen, ParenthesesClose } from "./components/ParenthesesButtons"
import { MemoryPlus, MemoryMinus, MemoryRememberOrClear } from "./components/MemoryButtons"
import { ACButton, BackSpaceButton, EqualButton } from "./components/CalculatorButtons"

export default function ScientificCalculator() {
  const { theme, toggleTheme } = useTheme()

  const [{ previousOperand, currentOperand, operationExpression, memory, degOrRad }, dispatch] =
    useReducer(reducer, INITIAL_STATE)

  // Handle key press events
  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    if (event.repeat) return // Prevent multiple triggers on long key press

    const digitKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    const operationKeys = ["+", "-", "*", "/", "%"]

    if (digitKeys.includes(event.key)) {
      dispatch({ type: DigitActionType.ADD_DIGIT, payload: { digit: event.key } })
    } else if (event.key === ".") {
      dispatch({ type: DigitActionType.ADD_DIGIT, payload: { digit: "." } })
    } else if (operationKeys.includes(event.key)) {
      dispatch({
        type: OperationActionType.CHOOSE_OPERATION,
        payload: { operation: event.key },
      })
    } else if (event.key === "Enter" || event.key === "=") {
      event.preventDefault() // Prevent default behavior (e.g., form submission)
      dispatch({ type: CalculatorActionType.EVALUATE })
    } else if (event.key === "Backspace") {
      dispatch({ type: CalculatorActionType.BACKSPACE })
    } else if (event.key === "Escape") {
      dispatch({ type: CalculatorActionType.CLEAR })
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
        <section className="w-full h-full bg-white dark:bg-darkJungleGreen transition-colors duration-300">
          <div>
            <Header />
          </div>
          <section className="w-full h-full">
            <div className="w-full md:max-w-[600px] mx-auto px-4">
              <div className="h-full w-full my-8 bg-slate-100 dark:bg-slate-900 shadow-md dark:shadow-slate-700 transition-colors duration-300">
                <div className="w-full h-full flex flex-col bg-slate-200 dark:bg-slate-800">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `${previousOperand} ${operationExpression}`,
                    }}
                    className="h-12 md:h-16 px-4 flex justify-end items-center text-base md:text-lg lg:text-xl font-semibold text-gray-700 dark:text-gray-300"
                  ></div>
                  <div className="h-12 md:h-16 px-4 flex justify-end items-center text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 dark:text-gray-100">
                    {currentOperand}
                  </div>
                </div>
                <div className="w-full h-full grid grid-cols-5 gap-0.5">
                  <ACButton dispatch={dispatch} />
                  <BackSpaceButton dispatch={dispatch} />
                  <MemoryPlus dispatch={dispatch} />
                  <MemoryMinus dispatch={dispatch} />
                  <MemoryRememberOrClear dispatch={dispatch} />

                  <DegreeRadianToggle degOrRad={degOrRad} dispatch={dispatch} />
                  <SinButton dispatch={dispatch} />
                  <CosButton dispatch={dispatch} />
                  <TanButton dispatch={dispatch} />

                  <PIButton dispatch={dispatch} />
                  <EulersNumber dispatch={dispatch} />
                  <SinInverseButton dispatch={dispatch} />
                  <CosInverseButton dispatch={dispatch} />
                  <TanInverseButton dispatch={dispatch} />

                  <SquareRoot dispatch={dispatch} />
                  <CubeRoot dispatch={dispatch} />
                  <Square dispatch={dispatch} />
                  <Cube dispatch={dispatch} />
                  <PowerTen dispatch={dispatch} />

                  <InverseOperation dispatch={dispatch} />
                  <ParenthesesOpen dispatch={dispatch} />
                  <ParenthesesClose dispatch={dispatch} />
                  <ModulusOperationButton dispatch={dispatch} />
                  <DivisonOperationButton theme={theme} dispatch={dispatch} />

                  <Factorial dispatch={dispatch} />
                  <DigitButton digit="7" dispatch={dispatch} />
                  <DigitButton digit="8" dispatch={dispatch} />
                  <DigitButton digit="9" dispatch={dispatch} />
                  <MultiplicationOperationButton dispatch={dispatch} />

                  <EulersPowerX dispatch={dispatch} />
                  <DigitButton digit="4" dispatch={dispatch} />
                  <DigitButton digit="5" dispatch={dispatch} />
                  <DigitButton digit="6" dispatch={dispatch} />
                  <SubtractionOperationButton dispatch={dispatch} />

                  <CommonLog dispatch={dispatch} />
                  <DigitButton digit="1" dispatch={dispatch} />
                  <DigitButton digit="2" dispatch={dispatch} />
                  <DigitButton digit="3" dispatch={dispatch} />
                  <AdditionOperationButton dispatch={dispatch} />

                  <NaturalLog dispatch={dispatch} />
                  <PlusMinusButton theme={theme} dispatch={dispatch} />
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
