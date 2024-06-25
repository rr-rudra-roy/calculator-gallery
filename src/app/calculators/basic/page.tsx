import { Metadata } from "next"
import BasicCalculator from "@/calculators/basic/BasicCalculator"

export const metadata: Metadata = {
  title: "Basic Calculator",
  description:
    "Basic 4 function calculator. This calculator include all arithmetic operations including plus minus and modulus operations.",
}

export default function Page() {
  return (
    <>
      <BasicCalculator />
    </>
  )
}
