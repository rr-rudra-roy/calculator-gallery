import { Metadata } from "next"
import { SEO } from "@/data/seo"
import ScientificCalculator from "@/calculators/scientific/ScientificCalculator"

export const metadata: Metadata = {
  title: SEO.scientificCalculatorTitle,
  description: SEO.ScientificCalculatorDescription
}

export default function Page() {
  return (
    <>
      <ScientificCalculator />
    </>
  )
}
