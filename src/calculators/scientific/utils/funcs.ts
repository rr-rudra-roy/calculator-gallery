import { StateType } from "@/calculators/scientific/reducer/ScientificCalculatorReducerType"

export function isOperationExpressionValid(state: StateType): boolean {
  return (
    (state.currentOperand.match(/\(/gi) || [])?.length ===
    (state.currentOperand.match(/\)/gi) || [])?.length
  )
}
