// Define state type
export interface StateType {
  currentOperand: string
  previousOperand: string
  operation: string | null
  operationExpression: string
  memory: string
  degOrRad: "deg" | "rad"
}

// Define action types
export enum CalculatorActionType {
  CLEAR_ALL = "CLEAR_ALL",
  CLEAR = "CLEAR",
  BACKSPACE = "BACKSPACE",
  EVALUATE = "EVALUATE",
}

export enum AddConstantsType {
  ADD_PI = "ADD_PI",
  ADD_EULERS_NUMBER = "ADD_EULERS_NUMBER",
}

export enum DigitActionType {
  ADD_DIGIT = "ADD_DIGIT",
}

export enum ExponentialActionType {
  CALCULATE_EULERS_POWER = "CALCULATE_EULERS_POWER",
  CALCULATE_POWER_TEN = "CALCULATE_POWER_TEN",
  CALCULATE_SQUARE = "CALCULATE_SQUARE",
  CALCULATE_CUBE = "CALCULATE_CUBE",
  CALCULATE_SQUARE_ROOT = "CALCULATE_SQUARE_ROOT",
  CALCULATE_CUBE_ROOT = "CALCULATE_CUBE_ROOT",
}

export enum LogActionType {
  CALCULATE_NATURAL_LOG = "CALCULATE_NATURAL_LOG",
  CALCULATE_COMMON_LOG = "CALCULATE_COMMON_LOG",
}

export enum MemoryActionType {
  ADD_MEMORY = "ADD_MEMORY",
  SUBTRACT_MEMORY = "SUBTRACT_MEMORY",
  RECALL_MEMORY = "RECALL_MEMORY",
  CLEAR_MEMORY = "CLEAR_MEMORY",
}

export enum OperationActionType {
  CHOOSE_OPERATION = "CHOOSE_OPERATION",
  PLUS_MINUS = "PLUS_MINUS",
  CALCULATE_INVERSE = "CALCULATE_INVERSE",
  CALCULATE_FACTORIAL = "CALCULATE_FACTORIAL",
}

export enum ParenthesesActionType {
  ADD_PARENTHESES_OPEN = "ADD_PARENTHESES_OPEN",
  ADD_PARENTHESES_CLOSE = "ADD_PARENTHESES_CLOSE",
}

export enum TrignometricActionType {
  TOOGLE_DEGREE_AND_RADIANS = "TOOGLE_DEGREE_AND_RADIANS",
  CALCULATE_SIN = "CALCULATE_SIN",
  CALCULATE_COS = "CALCULATE_COS",
  CALCULATE_TAN = "CALCULATE_TAN",
  CALCULATE_SIN_INVERSE = "CALCULATE_SIN_INVERSE",
  CALCULATE_COS_INVERSE = "CALCULATE_COS_INVERSE",
  CALCULATE_TAN_INVERSE = "CALCULATE_TAN_INVERSE",
}

// Define the shape of action objects with custom payload types
export interface ClearAllAction {
  type: CalculatorActionType.CLEAR_ALL
}

export interface ClearAction {
  type: CalculatorActionType.CLEAR
}

export interface BackspaceAction {
  type: CalculatorActionType.BACKSPACE
}

export interface EvaluateAction {
  type: CalculatorActionType.EVALUATE
}

export interface AddPI {
  type: AddConstantsType.ADD_PI
}

export interface AddEulersNumber {
  type: AddConstantsType.ADD_EULERS_NUMBER
}

export interface AddDigitAction {
  type: DigitActionType.ADD_DIGIT
  payload: { digit: string }
}

export interface CalculateEulersPower {
  type: ExponentialActionType.CALCULATE_EULERS_POWER
}

export interface CalculatePowerTen {
  type: ExponentialActionType.CALCULATE_POWER_TEN
}

export interface CalculateSquare {
  type: ExponentialActionType.CALCULATE_SQUARE
}

export interface CalculateCube {
  type: ExponentialActionType.CALCULATE_CUBE
}

export interface CalculateSquareRoot {
  type: ExponentialActionType.CALCULATE_SQUARE_ROOT
}

export interface CalculateCubeRoot {
  type: ExponentialActionType.CALCULATE_CUBE_ROOT
}

export interface CalculateNaturalLog {
  type: LogActionType.CALCULATE_NATURAL_LOG
}

export interface CalculateCommonLog {
  type: LogActionType.CALCULATE_COMMON_LOG
}

export interface AddMemory {
  type: MemoryActionType.ADD_MEMORY
}

export interface SubtractMemory {
  type: MemoryActionType.SUBTRACT_MEMORY
}

export interface RecallMemory {
  type: MemoryActionType.RECALL_MEMORY
}

export interface ClearMemory {
  type: MemoryActionType.CLEAR_MEMORY
}

export interface ChooseOperationAction {
  type: OperationActionType.CHOOSE_OPERATION
  payload: { operation: string }
}

export interface CalculatePlusMinus {
  type: OperationActionType.PLUS_MINUS
}

export interface CalculateInverse {
  type: OperationActionType.CALCULATE_INVERSE
}

export interface CalculateFactorial {
  type: OperationActionType.CALCULATE_FACTORIAL
}

export interface AddParenthesesLeft {
  type: ParenthesesActionType.ADD_PARENTHESES_OPEN
}

export interface AddParenthesesRight {
  type: ParenthesesActionType.ADD_PARENTHESES_CLOSE
}

export interface ToogleDegreeAndRadians {
  type: TrignometricActionType.TOOGLE_DEGREE_AND_RADIANS
  payload: { degOrRad: "deg" | "rad" }
}

export interface CalculateSin {
  type: TrignometricActionType.CALCULATE_SIN
}

export interface CalculateCos {
  type: TrignometricActionType.CALCULATE_COS
}

export interface CalculateTan {
  type: TrignometricActionType.CALCULATE_TAN
}

export interface CalculateSinInverse {
  type: TrignometricActionType.CALCULATE_SIN_INVERSE
}

export interface CalculateCosInverse {
  type: TrignometricActionType.CALCULATE_COS_INVERSE
}

export interface CalculateTanInverse {
  type: TrignometricActionType.CALCULATE_TAN_INVERSE
}

// Create a union type for all action objects
export type Action =
  | ClearAllAction
  | ClearAction
  | BackspaceAction
  | EvaluateAction
  | AddPI
  | AddEulersNumber
  | AddDigitAction
  | CalculateEulersPower
  | CalculatePowerTen
  | CalculateSquare
  | CalculateCube
  | CalculateSquareRoot
  | CalculateCubeRoot
  | CalculateNaturalLog
  | CalculateCommonLog
  | AddMemory
  | SubtractMemory
  | RecallMemory
  | ClearMemory
  | ChooseOperationAction
  | CalculatePlusMinus
  | CalculateInverse
  | CalculateFactorial
  | AddParenthesesLeft
  | AddParenthesesRight
  | ToogleDegreeAndRadians
  | CalculateSin
  | CalculateCos
  | CalculateTan
  | CalculateSinInverse
  | CalculateCosInverse
  | CalculateTanInverse
