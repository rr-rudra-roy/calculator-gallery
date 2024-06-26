import { Metadata } from "next"
import ScientificCalculator from "@/calculators/scientific/ScientificCalculator"

export const metadata: Metadata = {
  title: "Scientific Calculator",
}

export default function Page() {
  return (
    <>
      <ScientificCalculator />
    </>
  )
}
