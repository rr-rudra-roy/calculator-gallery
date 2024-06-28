import { create, all } from "mathjs"
import { convertDegreeToRadians, convertRadiansToDegree } from "@/utils/funcs"

// Create a mathjs instance
const math = create(all, {})

// Define state type
export interface StateType {
  currentOperand: string
  previousOperand: string
  operation: string | null
  memory: string
  degOrRad: "deg" | "rad"
}

// Define action type
export enum ActionType {
  ADD_DIGIT = "ADD_DIGIT",
  CHOOSE_OPERATION = "CHOOSE_OPERATION",
  PLUS_MINUS = "PLUS_MINUS",
  CALCULATE_SQUARE = "CALCULATE_SQUARE",
  CALCULATE_CUBE = "CALCULATE_CUBE",
  CALCULATE_POWER_TEN = "CALCULATE_POWER_TEN",
  CALCULATE_SQUARE_ROOT = "CALCULATE_SQUARE_ROOT",
  CALCULATE_CUBE_ROOT = "CALCULATE_CUBE_ROOT",
  CALCULATE_FACTORIAL = "CALCULATE_FACTORIAL",
  CALCULATE_INVERSE = "CALCULATE_INVERSE",
  ADD_PI = "ADD_PI",
  ADD_EULERS_NUMBER = "ADD_EULERS_NUMBER",
  CALCULATE_EULERS_POWER = "CALCULATE_EULERS_POWER",
  CALCULATE_NATURAL_LOG = "CALCULATE_NATURAL_LOG",
  CALCULATE_BASE_10_LOG = "CALCULATE_BASE_10_LOG",
  CALCULATE_SIN = "CALCULATE_SIN",
  CALCULATE_COS = "CALCULATE_COS",
  CALCULATE_TAN = "CALCULATE_TAN",
  CALCULATE_SIN_INVERSE = "CALCULATE_SIN_INVERSE",
  CALCULATE_COS_INVERSE = "CALCULATE_COS_INVERSE",
  CALCULATE_TAN_INVERSE = "CALCULATE_TAN_INVERSE",
  SET_DEGREE_AND_RADIANS = "SET_DEGREE_AND_RADIANS",
  ADD_MEMORY = "ADD_MEMORY",
  SUBTRACT_MEMORY = "SUBTRACT_MEMORY",
  RECALL_MEMORY = "RECALL_MEMORY",
  CLEAR_MEMORY = "CLEAR_MEMORY",
  CLEAR = "CLEAR",
  BACKSPACE = "BACKSPACE",
  EVALUATE = "EVALUATE",
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

interface CalculateSquare {
  type: ActionType.CALCULATE_SQUARE
}

interface CalculateCube {
  type: ActionType.CALCULATE_CUBE
}

interface CalculatePowerTen {
  type: ActionType.CALCULATE_POWER_TEN
}

interface CalculateSquareRoot {
  type: ActionType.CALCULATE_SQUARE_ROOT
}

interface CalculateCubeRoot {
  type: ActionType.CALCULATE_CUBE_ROOT
}

interface CalculateFactorial {
  type: ActionType.CALCULATE_FACTORIAL
}

interface CalculateInverse {
  type: ActionType.CALCULATE_INVERSE
}

interface AddPI {
  type: ActionType.ADD_PI
}

interface AddEulersNumber {
  type: ActionType.ADD_EULERS_NUMBER
}

interface CalculateEulersPower {
  type: ActionType.CALCULATE_EULERS_POWER
}

interface CalculateNaturalLog {
  type: ActionType.CALCULATE_NATURAL_LOG
}

interface CalculateBaseTenLog {
  type: ActionType.CALCULATE_BASE_10_LOG
}

interface CalculateSin {
  type: ActionType.CALCULATE_SIN
}

interface CalculateCos {
  type: ActionType.CALCULATE_COS
}

interface CalculateTan {
  type: ActionType.CALCULATE_TAN
}

interface CalculateSinInverse {
  type: ActionType.CALCULATE_SIN_INVERSE
}

interface CalculateCosInverse {
  type: ActionType.CALCULATE_COS_INVERSE
}

interface CalculateTanInverse {
  type: ActionType.CALCULATE_TAN_INVERSE
}

interface SetDegreeAndRadians {
  type: ActionType.SET_DEGREE_AND_RADIANS
  payload: { value: "deg" | "rad" }
}

interface MemoryAdd {
  type: ActionType.ADD_MEMORY
}

interface MemorySubtract {
  type: ActionType.SUBTRACT_MEMORY
}

interface MemoryRecall {
  type: ActionType.RECALL_MEMORY
}

interface MemoryClear {
  type: ActionType.CLEAR_MEMORY
}

interface ClearAction {
  type: ActionType.CLEAR
}

interface BackspaceAction {
  type: ActionType.BACKSPACE
}

interface EvaluateAction {
  type: ActionType.EVALUATE
}

// Create a union type for all action objects
export type Action =
  | AddDigitAction
  | ChooseOperationAction
  | ToogleSign
  | CalculateSquare
  | CalculateCube
  | CalculatePowerTen
  | CalculateSquareRoot
  | CalculateCubeRoot
  | CalculateFactorial
  | CalculateInverse
  | AddPI
  | AddEulersNumber
  | CalculateEulersPower
  | CalculateNaturalLog
  | CalculateBaseTenLog
  | CalculateSin
  | CalculateCos
  | CalculateTan
  | CalculateSinInverse
  | CalculateCosInverse
  | CalculateTanInverse
  | SetDegreeAndRadians
  | MemoryAdd
  | MemorySubtract
  | MemoryRecall
  | MemoryClear
  | ClearAction
  | BackspaceAction
  | EvaluateAction

// Define the initial state
export const INITIAL_STATE: StateType = {
  currentOperand: "0",
  previousOperand: "",
  operation: null,
  memory: "",
  degOrRad: "deg",
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
        return { ...state, currentOperand: `${action.payload.digit}` }
      return {
        ...state,
        currentOperand: `${state.currentOperand}${action.payload.digit}`,
      }

    case ActionType.CHOOSE_OPERATION:
      if (state.currentOperand === "" && state.previousOperand === "")
        return state
      if (state.currentOperand === "") {
        return {
          ...state,
          operation: action.payload.operation,
        }
      }
      if (state.previousOperand === "") {
        return {
          ...state,
          operation: action.payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: "0",
        }
      }
      return {
        ...state,
        previousOperand: evaluate(state),
        operation: action.payload.operation,
        currentOperand: "0",
      }

    case ActionType.PLUS_MINUS:
      if (state.currentOperand === "") return state
      return {
        ...state,
        currentOperand: (parseFloat(state.currentOperand) * -1).toString(),
      }

    case ActionType.CALCULATE_SQUARE:
      if (state.currentOperand === "" || state.currentOperand === "0")
        return state
      return {
        ...state,
        currentOperand: `${math.square(parseFloat(state.currentOperand))}`,
      }

    case ActionType.CALCULATE_CUBE:
      if (state.currentOperand === "" || state.currentOperand === "0")
        return state
      return {
        ...state,
        currentOperand: `${math.cube(parseFloat(state.currentOperand))}`,
      }

    case ActionType.CALCULATE_POWER_TEN:
      if (state.currentOperand === "" || state.currentOperand === "0")
        return state
      return {
        ...state,
        currentOperand: `${math.pow(parseFloat(state.currentOperand), 10)}`,
      }

    case ActionType.CALCULATE_SQUARE_ROOT:
      if (state.currentOperand === "" || state.currentOperand === "0")
        return state
      return {
        ...state,
        currentOperand: `${math.sqrt(parseFloat(state.currentOperand))}`,
      }

    case ActionType.CALCULATE_CUBE_ROOT:
      if (state.currentOperand === "" || state.currentOperand === "0")
        return state
      return {
        ...state,
        currentOperand: `${math.nthRoot(parseFloat(state.currentOperand), 3)}`,
      }

    case ActionType.CALCULATE_FACTORIAL:
      if (state.currentOperand === "" || state.currentOperand === "0")
        return state
      return {
        ...state,
        currentOperand: `${math.factorial(parseFloat(state.currentOperand))}`,
      }

    case ActionType.CALCULATE_INVERSE:
      if (state.currentOperand === "" || state.currentOperand === "0")
        return state
      return {
        ...state,
        currentOperand: `${math.divide(1, parseFloat(state.currentOperand))}`,
      }

    case ActionType.ADD_PI:
      return { ...state, currentOperand: `${math.pi}` }

    case ActionType.ADD_EULERS_NUMBER:
      return { ...state, currentOperand: `${math.e}` }

    case ActionType.CALCULATE_EULERS_POWER:
      if (state.currentOperand === "" || state.currentOperand === "0")
        return state
      return {
        ...state,
        currentOperand: `${math.pow(math.e, parseFloat(state.currentOperand))}`,
      }

    case ActionType.CALCULATE_NATURAL_LOG:
      if (state.currentOperand === "" || state.currentOperand === "0")
        return state
      return {
        ...state,
        currentOperand: `${math.log(parseFloat(state.currentOperand))}`,
      }

    case ActionType.CALCULATE_BASE_10_LOG:
      if (state.currentOperand === "" || state.currentOperand === "0")
        return state
      return {
        ...state,
        currentOperand: `${math.log10(parseFloat(state.currentOperand))}`,
      }

    case ActionType.CALCULATE_SIN:
      let sinRadians: number
      try {
        sinRadians = parseFloat(state.currentOperand)

        if (state.degOrRad === "deg") {
          sinRadians = convertDegreeToRadians(sinRadians)
          return {
            ...state,
            currentOperand: math.sin(math.unit(sinRadians, "rad")).toString(),
          }
        }

        return {
          ...state,
          currentOperand: math.sin(math.unit(sinRadians, "rad")).toString(),
        }
      } catch (error) {
        return state
      }

    case ActionType.CALCULATE_COS:
      let cosRadians: number
      try {
        cosRadians = parseFloat(state.currentOperand)

        if (state.degOrRad === "deg") {
          cosRadians = convertDegreeToRadians(cosRadians)
          return {
            ...state,
            currentOperand: `${Math.cos(cosRadians)}`,
          }
        }

        return {
          ...state,
          currentOperand: `${Math.cos(cosRadians)}`,
        }
      } catch (error) {
        return state
      }

    case ActionType.CALCULATE_TAN:
      let tanRadians: number
      try {
        tanRadians = parseFloat(state.currentOperand)

        if (state.degOrRad === "deg") {
          tanRadians = convertDegreeToRadians(tanRadians)
          return {
            ...state,
            currentOperand: `${Math.tan(tanRadians)}`,
          }
        }

        return {
          ...state,
          currentOperand: `${Math.tan(tanRadians)}`,
        }
      } catch (error) {
        return state
      }

    case ActionType.CALCULATE_SIN_INVERSE:
      let sinInverseValue: number
      try {
        sinInverseValue = parseFloat(state.currentOperand)

        if (state.degOrRad === "deg") {
          return {
            ...state,
            currentOperand: `${convertRadiansToDegree(
              Math.asin(sinInverseValue)
            )}`,
          }
        }

        return {
          ...state,
          currentOperand: `${Math.asin(sinInverseValue)}`,
        }
      } catch (error) {
        return state
      }

    case ActionType.CALCULATE_COS_INVERSE:
      let cosInverseValue: number
      try {
        cosInverseValue = parseFloat(state.currentOperand)

        if (state.degOrRad === "deg") {
          return {
            ...state,
            currentOperand: `${convertRadiansToDegree(
              Math.acos(cosInverseValue)
            )}`,
          }
        }

        return {
          ...state,
          currentOperand: `${Math.acos(cosInverseValue)}`,
        }
      } catch (error) {
        return state
      }

    case ActionType.CALCULATE_TAN_INVERSE:
      let tanInverseValue: number
      try {
        tanInverseValue = parseFloat(state.currentOperand)

        if (state.degOrRad === "deg") {
          return {
            ...state,
            currentOperand: `${convertRadiansToDegree(
              Math.atan(tanInverseValue)
            )}`,
          }
        }

        return {
          ...state,
          currentOperand: `${Math.atan(tanInverseValue)}`,
        }
      } catch (error) {
        return state
      }

    case ActionType.SET_DEGREE_AND_RADIANS:
      if (action.payload.value === "deg") {
        return { ...state, degOrRad: "deg" }
      } else if (action.payload.value === "rad") {
        return { ...state, degOrRad: "rad" }
      }

    case ActionType.ADD_MEMORY:
      return { ...state, memory: state.currentOperand }

    case ActionType.SUBTRACT_MEMORY:
      if (state.currentOperand === "") {
        return state
      }

      if (state.memory === "") {
        return {
          ...state,
          memory: `${math.multiply(-1, parseFloat(state.currentOperand))}`,
        }
      }

      return {
        ...state,
        memory: `${math.subtract(
          parseFloat(state.memory),
          parseFloat(state.currentOperand)
        )}`,
      }

    case ActionType.RECALL_MEMORY:
      return { ...state, previousOperand: state.memory }

    case ActionType.CLEAR_MEMORY:
      return { ...state, memory: "" }

    case ActionType.CLEAR:
      return INITIAL_STATE

    case ActionType.BACKSPACE:
      if (state.currentOperand === "") return state
      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      }

    case ActionType.EVALUATE:
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
