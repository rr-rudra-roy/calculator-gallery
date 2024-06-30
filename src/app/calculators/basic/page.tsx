import { Metadata } from "next"
import { SEO } from "@/data/seo"
import BasicCalculator from "@/calculators/basic/BasicCalculator"

export const metadata: Metadata = {
  title: SEO.basicCalculatorTitle,
  description: SEO.basicCalculatorDescription,
}

export default function Page() {
  return (
    <>
      <BasicCalculator />
    </>
  )
}
