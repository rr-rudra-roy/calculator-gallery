import { create, all } from "mathjs"

// Create a mathjs instance
const math = create(all, {})

// Define state type
export interface StateType {
  currentOperand: string
  previousOperand: string
  operation: string | null
  operationSymbol: string
}

// Define action type
export enum ActionType {
  ADD_DIGIT = "ADD_DIGIT",
  CHOOSE_OPERATION = "CHOOSE_OPERATION",
  PLUS_MINUS = "PLUS_MINUS",
  CLEAR = "CLEAR",
  DELETE_DIGIT = "DELETE_DIGIT",
  CALCULATE = "CALCULATE",
}

// Define the shape of action objects with custom payload types
interface AddDigitAction {
  type: ActionType.ADD_DIGIT
  payload: { digit: string }
}

interface ChooseOperationAction {
  type: ActionType.CHOOSE_OPERATION
  payload: { operation: string }
}

interface ToogleSign {
  type: ActionType.PLUS_MINUS
}

interface ClearAction {
  type: ActionType.CLEAR
}

interface DeleteDigitAction {
  type: ActionType.DELETE_DIGIT
}

interface CalculateAction {
  type: ActionType.CALCULATE
}

// Create a union type for all action objects
export type Action =
  | AddDigitAction
  | ChooseOperationAction
  | ToogleSign
  | ClearAction
  | DeleteDigitAction
  | CalculateAction

// Define the initial state
export const INITIAL_STATE: StateType = {
  currentOperand: "0",
  previousOperand: "",
  operation: null,
  operationSymbol: "",
}

// Reducer function using mathjs for calculations
export function reducer(state: StateType, action: Action): StateType {
  switch (action.type) {
    case ActionType.ADD_DIGIT:
      if (action.payload.digit === "0" && state.currentOperand === "0")
        return state
      if (action.payload.digit === "." && state.currentOperand.includes("."))
        return state
      if (action.payload.digit !== "0" && state.currentOperand === "0")
        return {
          ...state,
          currentOperand: `${action.payload.digit}`,
        }
      return {
        ...state,
        currentOperand: `${state.currentOperand}${action.payload.digit}`,
      }

    case ActionType.CHOOSE_OPERATION:
      if (state.currentOperand === "" && state.previousOperand === "")
        return state
      if (state.currentOperand === "") {
        if (action.payload.operation === "/") {
          return {
            ...state,
            operation: action.payload.operation,
            operationSymbol: "÷",
          }
        }

        return {
          ...state,
          operation: action.payload.operation,
          operationSymbol: action.payload.operation,
        }
      }
      if (state.previousOperand === "") {
        if (action.payload.operation === "/") {
          return {
            ...state,
            operation: action.payload.operation,
            operationSymbol: "÷",
            previousOperand: state.currentOperand,
            currentOperand: "0",
          }
        }
        return {
          ...state,
          operation: action.payload.operation,
          operationSymbol: action.payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: "0",
        }
      }

      if (action.payload.operation === "/") {
        return {
          ...state,
          previousOperand: evaluate(state),
          operation: action.payload.operation,
          operationSymbol: "÷",
          currentOperand: "0",
        }
      }

      return {
        ...state,
        previousOperand: evaluate(state),
        operation: action.payload.operation,
        operationSymbol: action.payload.operation,
        currentOperand: "0",
      }

    case ActionType.PLUS_MINUS:
      if (state.currentOperand === "") return state
      if (state.currentOperand === "0") return state
      if (state.currentOperand === ".") return state
      return {
        ...state,
        currentOperand: (parseFloat(state.currentOperand) * -1).toString(),
      }

    case ActionType.CLEAR:
      return INITIAL_STATE

    case ActionType.DELETE_DIGIT:
      if (state.currentOperand === "") return state
      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      }

    case ActionType.CALCULATE:
      if (
        state.operation == null ||
        state.currentOperand === "" ||
        state.previousOperand === ""
      ) {
        return state
      }
      return {
        ...state,
        previousOperand: "",
        operation: null,
        operationSymbol: "",
        currentOperand: evaluate(state),
      }

    default:
      return state
  }
}

// Use mathjs to evaluate the expression
function evaluate({
  currentOperand,
  previousOperand,
  operation,
}: StateType): string {
  const expression = `${previousOperand} ${operation} ${currentOperand}`
  try {
    return math.evaluate(expression).toString()
  } catch (error) {
    console.error(error)
    return ""
  }
}
