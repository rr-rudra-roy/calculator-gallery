import { create, all } from "mathjs"
import { StateType } from "@/calculators/scientific/reducer/ScientificCalculatorReducerType"

// Create a mathjs instance
export const math = create(all, {
  number: "BigNumber", // Use BigNumber for all calculations
  precision: 16, // Set a high precision to ensure accuracy
})

// Use mathjs to evaluate the expression
export function evaluate({ currentOperand, previousOperand, operation }: StateType): string {
  const expression = `${previousOperand} ${operation} ${currentOperand}`
  try {
    return math.evaluate(expression).toString()
  } catch (error) {
    console.error(error)
    return ""
  }
}
