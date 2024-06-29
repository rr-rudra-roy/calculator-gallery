import { test, expect } from "@playwright/test"

// Basic calculator page url
const basicCalculatorPageUrl = "http://localhost:3000/calculators/basic"

// Calculator buttons locator
const outputDisplay = "div#currentOperand"
const EvaluateButton = "button#evaluate-button"

const DigitZero = 'button[data-testid="0"]'
const DigitOne = 'button[data-testid="1"]'
const DigitTwo = 'button[data-testid="2"]'
const DigitThree = 'button[data-testid="3"]'
const DigitFour = 'button[data-testid="4"]'
const DigitFive = 'button[data-testid="5"]'
const DigitSix = 'button[data-testid="6"]'
const DigitSeven = 'button[data-testid="7"]'
const DigitEight = 'button[data-testid="8"]'
const DigitNine = 'button[data-testid="9"]'
const periodButton = 'button[data-testid="."]'

const AdditionButton = "button#addition-operator-button"
const SubtractionOperatorButton = "button#subtraction-operator-button"
const MultiplicationOperatorButton = "button#multiplication-operator-button"
const DivisonOperatorButton = "button#divison-operator-button"
const ModulusOperatorButton = "button#modulus-operator-button"
const PlusMinusButtonButton = "button#plus-minus-button"

// testing calculator logic
test.describe("Test Calculator Logic", () => {
  // Addition operation test
  test("Addition operation test", async ({ page }) => {
    await page.goto(basicCalculatorPageUrl)
    await page.click(DigitNine) // Click 9
    await page.click(DigitNine) // Click 9
    await page.click(AdditionButton) // Click +
    await page.click(DigitOne) // Click 1
    await page.click(EvaluateButton) // Click =
    await expect(page.locator(outputDisplay)).toHaveText("100")
  })

  // Subtraction operation test
  test("Subtraction operation test", async ({ page }) => {
    await page.goto(basicCalculatorPageUrl)
    await page.click(DigitSeven) // Click 4
    await page.click(DigitSeven) // Click 4
    await page.click(SubtractionOperatorButton) // Click -
    await page.click(DigitThree) // Click 3
    await page.click(DigitThree) // Click 3
    await page.click(EvaluateButton) // Click =
    await expect(page.locator(outputDisplay)).toHaveText("44")
  })

  // Multiplication operation test
  test("Multiplication operation test", async ({ page }) => {
    await page.goto(basicCalculatorPageUrl)
    await page.click(DigitFour) // Click 4
    await page.click(DigitFour) // Click 4
    await page.click(MultiplicationOperatorButton) // Click *
    await page.click(DigitFive) // Click 5
    await page.click(EvaluateButton) // Click =
    await expect(page.locator(outputDisplay)).toHaveText("220")
  })

  // Divison operation test
  test("Divison operation test", async ({ page }) => {
    await page.goto(basicCalculatorPageUrl)
    await page.click(DigitFour) // Click 4
    await page.click(DigitNine) // Click 9
    await page.click(DivisonOperatorButton) // Click /
    await page.click(DigitSeven) // Click 7
    await page.click(EvaluateButton) // Click =
    await expect(page.locator(outputDisplay)).toHaveText("7")
  })

  // Modulus operation test
  test("Modulus operation test", async ({ page }) => {
    await page.goto(basicCalculatorPageUrl)
    await page.click(DigitSix) // Click 6
    await page.click(DigitEight) // Click 8
    await page.click(ModulusOperatorButton) // Click %
    await page.click(DigitThree) // Click 3
    await page.click(EvaluateButton) // Click =
    await expect(page.locator(outputDisplay)).toHaveText("2")
  })

  // Division by zero test
  test("should handle division by zero gracefully", async ({ page }) => {
    await page.goto(basicCalculatorPageUrl)
    await page.click(DigitOne) // Click 1
    await page.click(DivisonOperatorButton) // Click /
    await page.click(DigitZero) // Click 0
    await page.click(EvaluateButton) // Click =
    await expect(page.locator(outputDisplay)).toHaveText("Infinity")
  })

  // Subtraction sequential operation test
  test("should handle subtraction sequential operations correctly", async ({ page }) => {
    await page.goto(basicCalculatorPageUrl)
    await page.click(DigitTwo) // Click 2
    await page.click(AdditionButton) // Click +
    await page.click(DigitThree) // Click 3
    await page.click(SubtractionOperatorButton) // Click -
    await page.click(DigitOne) // Click 1
    await page.click(EvaluateButton) // Click =
    await expect(page.locator(outputDisplay)).toHaveText("4")
  })

  // Sequential operation test
  test("should handle sequential operations correctly", async ({ page }) => {
    await page.goto(basicCalculatorPageUrl)
    await page.click(DigitTwo) // Click 2
    await page.click(MultiplicationOperatorButton) // Click *
    await page.click(DigitTwo) // Click 2
    await page.click(AdditionButton) // Click +
    await page.click(DigitTwo) // Click 2
    await page.click(EvaluateButton) // Click =
    await expect(page.locator(outputDisplay)).toHaveText("6")
  })

  // Decimal operation
  test("should handle decimal addition correctly", async ({ page }) => {
    await page.goto(basicCalculatorPageUrl)
    await page.click(periodButton)
    await page.click(DigitOne)
    await page.click(AdditionButton)
    await page.click(periodButton)
    await page.click(DigitTwo)
    await page.click(EvaluateButton)
    await expect(page.locator(outputDisplay)).toHaveText("0.3")
  })

  // Check plus minus operation
  test("should handle plus minus operation correctly", async ({ page }) => {
    await page.goto(basicCalculatorPageUrl)
    await page.click(DigitTwo)
    await page.click(PlusMinusButtonButton)
    await expect(page.locator(outputDisplay)).toHaveText("-2")
  })
})
