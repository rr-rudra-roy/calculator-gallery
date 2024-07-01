import { math, evaluate } from "@/calculators/scientific/lib/ScientificCalculatoMathjsConfig"
import {
  StateType,
  Action,
  CalculatorActionType,
  AddConstantsType,
  DigitActionType,
  ExponentialActionType,
  LogActionType,
  MemoryActionType,
  OperationActionType,
  ParenthesesActionType,
  TrignometricActionType,
} from "./ScientificCalculatorReducerType"
import { isOperationExpressionValid } from "../utils/funcs"
import { BigNumber, bignumber } from "mathjs"

// Define the initial state
export const INITIAL_STATE: StateType = {
  currentOperand: "0",
  previousOperand: "",
  operation: null,
  operationExpression: "",
  memory: "",
  degOrRad: "deg",
}

// Reducer function using mathjs for calculations
export function reducer(state: StateType, action: Action): StateType {
  switch (action.type) {
    case CalculatorActionType.CLEAR_ALL:
      return INITIAL_STATE

    case CalculatorActionType.CLEAR:
      return {
        ...state,
        currentOperand: "0",
        previousOperand: "",
        operation: null,
        operationExpression: "",
      }

    case CalculatorActionType.BACKSPACE:
      if (state.currentOperand === "") return state
      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      }

    case CalculatorActionType.EVALUATE:
      if (state.operation == null || state.currentOperand === "" || state.previousOperand === "") {
        return state
      }

      return {
        ...state,
        previousOperand: "",
        operation: null,
        operationExpression: "",
        currentOperand: evaluate(state),
      }

    case AddConstantsType.ADD_PI:
      if (
        (state.currentOperand === "" || state.currentOperand === "0") &&
        state.previousOperand === ""
      ) {
        return { ...state, currentOperand: `${Math.PI}`, operationExpression: "π" }
      }

      // If previousOperand is not empty
      // Multply with previousOperand if operation is not provided else follow provided operation
      if (state.previousOperand !== "") {
        return {
          ...state,
          currentOperand: `${math.evaluate(
            `${state.previousOperand} ${state.operation === null ? "*" : state.operation} ${
              Math.PI
            }`
          )}`,
          operationExpression: ` ${
            state.operationExpression === "" ? "×" : state.operationExpression
          } π`,
        }
      }

      return {
        ...state,
        currentOperand: `${Math.E}`,
        operationExpression: `π`,
      }

    case AddConstantsType.ADD_EULERS_NUMBER:
      if (
        (state.currentOperand === "" || state.currentOperand === "0") &&
        state.previousOperand === ""
      ) {
        return { ...state, currentOperand: `${Math.E}`, operationExpression: "e" }
      }

      // If previousOperand is not empty
      // Multply with previousOperand if operation is not provided else follow provided operation
      if (state.previousOperand !== "") {
        return {
          ...state,
          currentOperand: `${math.evaluate(
            `${state.previousOperand} ${state.operation === null ? "*" : state.operation} ${Math.E}`
          )}`,
          operationExpression: ` ${
            state.operationExpression === "" ? "×" : state.operationExpression
          } e`,
        }
      }

      return {
        ...state,
        currentOperand: `${Math.E}`,
        operationExpression: `e`,
      }

    case DigitActionType.ADD_DIGIT:
      if (action.payload.digit === "0" && state.currentOperand === "0") return state

      // If currentOperand is zero and payload digit is not preiod replace 0 with provided payload digit.
      // If payload is period then keep zero in currentOperand
      if (
        action.payload.digit !== "0" &&
        action.payload.digit !== "." &&
        state.currentOperand === "0"
      )
        return { ...state, currentOperand: `${action.payload.digit}` }

      // If only preiod is present in currentOperand don't add another.
      if (action.payload.digit === "." && state.currentOperand.includes(".")) return state

      return {
        ...state,
        currentOperand: `${state.currentOperand}${action.payload.digit}`,
      }

    case ExponentialActionType.CALCULATE_EULERS_POWER:
      if (!isOperationExpressionValid(state)) return state
      if (
        (state.currentOperand === "" || state.currentOperand === "0") &&
        state.previousOperand === ""
      ) {
        return { ...state, currentOperand: `1`, operationExpression: `e <sup>${0}</sup>` }
      }

      // If previousOperand is not empty
      // Multply with previousOperand if operation is not provided else follow provided operation
      if (state.previousOperand !== "") {
        return {
          ...state,
          currentOperand: `${math.evaluate(`(${Math.E}^${state.currentOperand})`)}`,
          operationExpression: ` ${
            state.operationExpression === "" ? "×" : state.operationExpression
          } e <sup>${state.currentOperand}</sup>`,
        }
      }

      return {
        ...state,
        currentOperand: `${math.evaluate(`${Math.E}^${state.currentOperand}`)}` || "",
        operationExpression: `e <sup>${state.currentOperand}</sup>`,
      }

    case ExponentialActionType.CALCULATE_POWER_TEN:
      if (!isOperationExpressionValid(state)) return state
      if (
        (state.currentOperand === "" || state.currentOperand === "0") &&
        state.previousOperand === ""
      ) {
        return { ...state, currentOperand: `0`, operationExpression: `0 <sup>10</sup>` }
      }

      if (state.previousOperand !== "") {
        return {
          ...state,
          currentOperand: `${math.evaluate(`(${state.currentOperand}^10)`)}`,
          operationExpression: ` ${
            state.operationExpression === "" ? "×" : state.operationExpression
          } ${state.currentOperand} <sup>10</sup>`,
        }
      }

      return {
        ...state,
        currentOperand: `${math.evaluate(`${state.currentOperand}^10`)}` || "",
        operationExpression: `${state.currentOperand} <sup>10</sup>`,
      }

    case ExponentialActionType.CALCULATE_SQUARE:
      if (!isOperationExpressionValid(state)) return state
      if (
        (state.currentOperand === "" || state.currentOperand === "0") &&
        state.previousOperand === ""
      ) {
        return { ...state, currentOperand: `0`, operationExpression: `0 <sup>2</sup>` }
      }

      if (state.previousOperand !== "") {
        return {
          ...state,
          currentOperand: `${math.evaluate(`(${state.currentOperand}^2)`)}` || "",
          operationExpression: ` ${
            state.operationExpression === "" ? "×" : state.operationExpression
          } ${state.currentOperand} <sup>2</sup>`,
        }
      }

      return {
        ...state,
        currentOperand: `${math.evaluate(`${state.currentOperand}^2`)}` || "",
        operationExpression: `${state.currentOperand} <sup>2</sup>`,
      }

    case ExponentialActionType.CALCULATE_CUBE:
      if (!isOperationExpressionValid(state)) return state
      if (
        (state.currentOperand === "" || state.currentOperand === "0") &&
        state.previousOperand === ""
      ) {
        return { ...state, currentOperand: `0`, operationExpression: `0 <sup>3</sup>` }
      }

      if (state.previousOperand !== "") {
        return {
          ...state,
          currentOperand: `${math.evaluate(`(${state.currentOperand}^3)`)}` || "",
          operationExpression: ` ${
            state.operationExpression === "" ? "×" : state.operationExpression
          } ${state.currentOperand} <sup>3</sup>`,
        }
      }

      return {
        ...state,
        currentOperand: `${math.evaluate(`${state.currentOperand}^3`)}` || "",
        operationExpression: `${state.currentOperand} <sup>3</sup>`,
      }

    case ExponentialActionType.CALCULATE_SQUARE_ROOT:
      if (!isOperationExpressionValid(state)) return state
      if (
        (state.currentOperand === "" || state.currentOperand === "0") &&
        state.previousOperand === ""
      ) {
        return { ...state, currentOperand: `0`, operationExpression: `√ <sub>0</sub>` }
      }

      if (state.previousOperand !== "") {
        return {
          ...state,
          currentOperand: `${math.evaluate(`(${state.currentOperand}^(1/2))`)}` || "",
          operationExpression: ` ${
            state.operationExpression === "" ? "×" : state.operationExpression
          } √ <sub>${state.currentOperand}</sub>`,
        }
      }

      return {
        ...state,
        currentOperand: `${math.evaluate(`${state.currentOperand}^(1/2)`)}` || "",
        operationExpression: `√ <sub>${state.currentOperand}</sub>`,
      }

    case ExponentialActionType.CALCULATE_CUBE_ROOT:
      if (!isOperationExpressionValid(state)) return state
      if (
        (state.currentOperand === "" || state.currentOperand === "0") &&
        state.previousOperand === ""
      ) {
        return { ...state, currentOperand: `0`, operationExpression: `∛ <sub>0</sub>` }
      }

      if (state.previousOperand !== "") {
        return {
          ...state,
          currentOperand: `${math.evaluate(`(${state.currentOperand}^(1/3))`)}` || "",
          operationExpression: ` ${
            state.operationExpression === "" ? "×" : state.operationExpression
          } ∛ <sub>${state.currentOperand}</sub>`,
        }
      }

      return {
        ...state,
        currentOperand: `${math.evaluate(`${state.currentOperand}^(1/3)`)}` || "",
        operationExpression: `∛ <sub>${state.currentOperand}</sub>`,
      }

    case LogActionType.CALCULATE_NATURAL_LOG:
      if (!isOperationExpressionValid(state)) return state
      if (
        (state.currentOperand === "" || state.currentOperand === "0") &&
        state.previousOperand === ""
      ) {
        return { ...state, currentOperand: `Infinity`, operationExpression: `ln(0)` }
      }

      if (state.previousOperand !== "") {
        return {
          ...state,
          currentOperand: `${math.evaluate(`log(${state.currentOperand})`)}`,
          operationExpression: ` ${
            state.operationExpression === "" ? "×" : state.operationExpression
          } ln(${state.currentOperand})`,
        }
      }

      return {
        ...state,
        currentOperand: `${math.evaluate(`log(${state.currentOperand})`)}` || "",
        operationExpression: `ln(${state.currentOperand})`,
      }

    case LogActionType.CALCULATE_COMMON_LOG:
      if (!isOperationExpressionValid(state)) return state
      if (
        (state.currentOperand === "" || state.currentOperand === "0") &&
        state.previousOperand === ""
      ) {
        return { ...state, currentOperand: `Infinity`, operationExpression: `log(0)` }
      }

      if (state.previousOperand !== "") {
        return {
          ...state,
          currentOperand: `${math.evaluate(`log(${state.currentOperand}, 10)`)}`,
          operationExpression: ` ${
            state.operationExpression === "" ? "×" : state.operationExpression
          } log(${state.currentOperand})`,
        }
      }

      return {
        ...state,
        currentOperand: `${math.evaluate(`log(${state.currentOperand}, 10)`)}` || "",
        operationExpression: `log(${state.currentOperand})`,
      }

    case MemoryActionType.ADD_MEMORY:
      if (!isOperationExpressionValid(state)) return state
      if (state.currentOperand === "") return state

      if (state.memory !== "") {
        return { ...state, memory: `${math.evaluate(`${state.memory} + ${state.currentOperand}`)}` }
      }

      return { ...state, memory: `${state.currentOperand}` }

    case MemoryActionType.SUBTRACT_MEMORY:
      if (!isOperationExpressionValid(state)) return state
      if (state.currentOperand === "") return state

      if (state.memory !== "") {
        return { ...state, memory: `${math.evaluate(`${state.memory} - ${state.currentOperand}`)}` }
      }

      return state

    case MemoryActionType.RECALL_MEMORY:
      return {
        ...state,
        previousOperand: state.memory,
        operation: null,
        operationExpression: "",
        memory: "",
      }

    case MemoryActionType.CLEAR_MEMORY:
      return { ...state, previousOperand: "", operation: null, operationExpression: "", memory: "" }

    case OperationActionType.CHOOSE_OPERATION:
      if (state.currentOperand === "" && state.previousOperand === "") return state
      if (!isOperationExpressionValid(state)) {
        return { ...state, currentOperand: `${state.currentOperand} ${action.payload.operation}` }
      }

      if (state.currentOperand === "") {
        if (action.payload.operation === "/") {
          return {
            ...state,
            operation: action.payload.operation,
            operationExpression: "÷",
          }
        }
        if (action.payload.operation === "*") {
          return {
            ...state,
            operation: action.payload.operation,
            operationExpression: "×",
          }
        }

        return {
          ...state,
          operation: action.payload.operation,
          operationExpression: action.payload.operation,
        }
      }
      if (state.previousOperand === "") {
        if (action.payload.operation === "/") {
          return {
            ...state,
            operation: action.payload.operation,
            operationExpression: "÷",
            previousOperand: state.currentOperand,
            currentOperand: "0",
          }
        }
        if (action.payload.operation === "*") {
          return {
            ...state,
            operation: action.payload.operation,
            operationExpression: "×",
            previousOperand: state.currentOperand,
            currentOperand: "0",
          }
        }
        return {
          ...state,
          operation: action.payload.operation,
          operationExpression: action.payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: "0",
        }
      }

      if (action.payload.operation === "/") {
        return {
          ...state,
          previousOperand: evaluate(state),
          operation: action.payload.operation,
          operationExpression: "÷",
          currentOperand: "0",
        }
      } else if (action.payload.operation === "*") {
        return {
          ...state,
          previousOperand: evaluate(state),
          operation: action.payload.operation,
          operationExpression: "×",
          currentOperand: "0",
        }
      }

      return {
        ...state,
        previousOperand: evaluate(state),
        operation: action.payload.operation,
        operationExpression: action.payload.operation,
        currentOperand: "0",
      }

    case OperationActionType.CALCULATE_INVERSE:
      if (!isOperationExpressionValid(state)) return state
      if (state.currentOperand.includes("(") || state.currentOperand.includes(")")) return state
      if (
        state.currentOperand === "" ||
        state.currentOperand === "0" ||
        state.currentOperand === "."
      )
        return state

      if (state.previousOperand !== "") {
        return {
          ...state,
          currentOperand: `${math.evaluate(`(1/${state.currentOperand})`)}`,
          operationExpression: ` ${state.operationExpression || "×"}  <sup>1</sup>&frasl;<sub>${
            state.currentOperand
          }</sub>`,
        }
      }

      return {
        ...state,
        currentOperand: `${math.evaluate(`1/${state.currentOperand}`)}`,
        operationExpression: `<sup>1</sup>&frasl;<sub>${state.currentOperand}</sub>`,
      }

    case OperationActionType.CALCULATE_FACTORIAL:
      if (!isOperationExpressionValid(state)) return state
      if (state.currentOperand.includes("(") || state.currentOperand.includes(")")) return state
      if (state.currentOperand === "" || state.currentOperand === ".") return state
      return { ...state, currentOperand: `${math.factorial(parseFloat(state.currentOperand))}` }

    case OperationActionType.PLUS_MINUS:
      if (!isOperationExpressionValid(state)) return state
      if (state.currentOperand.includes("(") || state.currentOperand.includes(")")) return state
      if (
        state.currentOperand === "" ||
        state.currentOperand === "0" ||
        state.currentOperand === "."
      )
        return state
      return { ...state, currentOperand: (parseFloat(state.currentOperand) * -1).toString() }

    case ParenthesesActionType.ADD_PARENTHESES_OPEN:
      const OPEN_PARENTHESES = "("

      if (state.currentOperand === "0") return { ...state, currentOperand: `${OPEN_PARENTHESES}` }
      if (
        (state.currentOperand === "" || state.currentOperand === "0") &&
        state.previousOperand === ""
      )
        return { ...state, currentOperand: `${OPEN_PARENTHESES}` }

      if (
        state.currentOperand !== "" &&
        state.currentOperand !== "0" &&
        !state.currentOperand.includes("(")
      )
        return {
          ...state,
          previousOperand: `${state.currentOperand}`,
          operation: "*",
          operationExpression: "×",
          currentOperand: `${OPEN_PARENTHESES}`,
        }

      return {
        ...state,
        currentOperand: `${state.currentOperand} ${OPEN_PARENTHESES}`,
      }

    case ParenthesesActionType.ADD_PARENTHESES_CLOSE:
      const CLOSE_PARENTHESES = ")"

      if (!state.currentOperand.includes("(")) return state
      if (
        (state.currentOperand.match(/\)/gi) || []).length >=
        (state.currentOperand.match(/\(/gi) || []).length
      )
        return state
      if (state.currentOperand === "" || state.currentOperand === "0")
        return { ...state, currentOperand: `${CLOSE_PARENTHESES}` }

      return {
        ...state,
        currentOperand: `${state.currentOperand}${CLOSE_PARENTHESES}`,
      }

    case TrignometricActionType.TOOGLE_DEGREE_AND_RADIANS:
      if (action.payload.degOrRad === "deg") {
        return { ...state, degOrRad: "deg" }
      } else if (action.payload.degOrRad === "rad") {
        return { ...state, degOrRad: "rad" }
      }

    case TrignometricActionType.CALCULATE_SIN:
      if (!isOperationExpressionValid(state)) return state
      if (
        (state.currentOperand === "" || state.currentOperand === "0") &&
        state.previousOperand === ""
      ) {
        return { ...state, currentOperand: `0`, operationExpression: `sin(0 ${state.degOrRad})` }
      }

      if (state.previousOperand !== "") {
        return {
          ...state,
          currentOperand:
            `${math.evaluate(`sin(${state.currentOperand} ${state.degOrRad})`)}` || "",
          operationExpression: ` ${
            state.operationExpression === "" ? "×" : state.operationExpression
          } sin(${state.currentOperand} ${state.degOrRad})`,
        }
      }

      return {
        ...state,
        currentOperand: `${math.evaluate(`sin(${state.currentOperand} ${state.degOrRad})`)}` || "",
        operationExpression: `sin(${state.currentOperand} ${state.degOrRad})`,
      }

    case TrignometricActionType.CALCULATE_COS:
      const cosTolerance = 1e-10
      let cosCurrentOperand: number | BigNumber = 0
      let cosCalculatedValue: number | BigNumber = 0

      if (!isOperationExpressionValid(state)) return state
      if (
        (state.currentOperand === "" || state.currentOperand === "0") &&
        state.previousOperand === ""
      ) {
        return { ...state, currentOperand: `1`, operationExpression: `cos(0 ${state.degOrRad})` }
      }

      // try catch block needed to be placed under above if else statements
      try {
        cosCurrentOperand = parseFloat(state.currentOperand)
        cosCalculatedValue = math.cos(math.unit(cosCurrentOperand, state.degOrRad))
      } catch (error) {
        return { ...state, currentOperand: "Infinity" }
      }

      if (state.previousOperand !== "") {
        return {
          ...state,
          currentOperand: `${
            math.abs(cosCalculatedValue) < cosTolerance ? "0" : cosCalculatedValue
          }`,
          operationExpression: ` ${
            state.operationExpression === "" ? "×" : state.operationExpression
          } cos(${state.currentOperand} ${state.degOrRad})`,
        }
      }

      return {
        ...state,
        currentOperand: `${math.abs(cosCalculatedValue) < cosTolerance ? "0" : cosCalculatedValue}`,
        operationExpression: `cos(${state.currentOperand} ${state.degOrRad})`,
      }

    case TrignometricActionType.CALCULATE_TAN:
      const tanTolerance = 1e-10
      let tanCurrentOperand: number | BigNumber = 0
      let tanCalculatedValue: number | BigNumber = 0

      if (!isOperationExpressionValid(state)) return state
      if (
        (state.currentOperand === "" || state.currentOperand === "0") &&
        state.previousOperand === ""
      ) {
        return { ...state, currentOperand: `0`, operationExpression: `tan(0 ${state.degOrRad})` }
      }

      if (state.currentOperand === "90" && state.degOrRad === "deg") {
        return { ...state, currentOperand: "Infinity" }
      }

      // try catch block needed to be placed under above if else statements
      try {
        tanCurrentOperand = parseFloat(state.currentOperand) || bignumber(state.currentOperand)
        tanCalculatedValue = math.tan(math.unit(tanCurrentOperand, state.degOrRad))
      } catch (error) {
        return { ...state, currentOperand: "Infinity" }
      }

      if (tanCurrentOperand === math.pi / 2 && state.degOrRad === "rad") {
        return { ...state, currentOperand: "Infinity" }
      }

      if (state.previousOperand !== "") {
        return {
          ...state,
          currentOperand: `${
            math.abs(tanCalculatedValue) < tanTolerance ? "0" : tanCalculatedValue
          }`,
          operationExpression: ` ${
            state.operationExpression === "" ? "×" : state.operationExpression
          } tan(${state.currentOperand} ${state.degOrRad})`,
        }
      }

      return {
        ...state,
        currentOperand: `${math.abs(tanCalculatedValue) < tanTolerance ? "0" : tanCalculatedValue}`,
        operationExpression: `tan(${state.currentOperand} ${state.degOrRad})`,
      }

    case TrignometricActionType.CALCULATE_SIN_INVERSE:
      if (!isOperationExpressionValid(state)) return state
      if (
        (state.currentOperand === "" || state.currentOperand === "0") &&
        state.previousOperand === ""
      ) {
        return { ...state, currentOperand: `0`, operationExpression: `asin(0)` }
      }

      if (state.previousOperand !== "") {
        return {
          ...state,
          currentOperand: `${math.evaluate(`asin(${state.currentOperand})`)}` || "",
          operationExpression: ` ${
            state.operationExpression === "" ? "×" : state.operationExpression
          } asin(${state.currentOperand})`,
        }
      }

      return {
        ...state,
        currentOperand: `${math.evaluate(`asin(${state.currentOperand})`)}` || "",
        operationExpression: `asin(${state.currentOperand})`,
      }

    case TrignometricActionType.CALCULATE_COS_INVERSE:
      if (!isOperationExpressionValid(state)) return state
      if (
        (state.currentOperand === "" || state.currentOperand === "0") &&
        state.previousOperand === ""
      ) {
        return { ...state, currentOperand: `0`, operationExpression: `acos(0)` }
      }

      if (state.previousOperand !== "") {
        return {
          ...state,
          currentOperand: `${math.evaluate(`acos(${state.currentOperand})`)}` || "",
          operationExpression: ` ${
            state.operationExpression === "" ? "×" : state.operationExpression
          } acos(${state.currentOperand})`,
        }
      }

      return {
        ...state,
        currentOperand: `${math.evaluate(`acos(${state.currentOperand})`)}` || "",
        operationExpression: `acos(${state.currentOperand})`,
      }

    case TrignometricActionType.CALCULATE_TAN_INVERSE:
      if (!isOperationExpressionValid(state)) return state
      if (
        (state.currentOperand === "" || state.currentOperand === "0") &&
        state.previousOperand === ""
      ) {
        return { ...state, currentOperand: `0`, operationExpression: `atan(0)` }
      }

      if (state.previousOperand !== "") {
        return {
          ...state,
          currentOperand: `${math.evaluate(`atan(${state.currentOperand})`)}` || "",
          operationExpression: ` ${
            state.operationExpression === "" ? "×" : state.operationExpression
          } atan(${state.currentOperand})`,
        }
      }

      return {
        ...state,
        currentOperand: `${math.evaluate(`atan(${state.currentOperand})`)}` || "",
        operationExpression: `atan(${state.currentOperand})`,
      }

    default:
      return state
  }
}
