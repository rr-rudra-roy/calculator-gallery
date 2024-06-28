import "@testing-library/jest-dom"
import { convertDegreeToRadians, convertRadiansToDegree } from "../funcs"

// test convertDegreeToRadians function
test("test convertDegreeToRadians function", () => {
  // 0deg => 0rad
  expect(convertDegreeToRadians(0)).toBe(0)

  // 30deg => 0.523599rad
  expect(convertDegreeToRadians(30)).toBeCloseTo(0.523599)

  // 45deg => 0.785398rad
  expect(convertDegreeToRadians(45)).toBeCloseTo(0.785398)

  // 60deg => 1.0472rad
  expect(convertDegreeToRadians(60)).toBeCloseTo(1.0472)

  // 90deg => 1.5708rad
  expect(convertDegreeToRadians(90)).toBeCloseTo(1.5708)

  // 180deg => 3.14159rad
  expect(convertDegreeToRadians(180)).toBeCloseTo(3.14159)

  // 360deg => 6.28319rad
  expect(convertDegreeToRadians(360)).toBeCloseTo(6.28319)
})

// test convertRadiansToDegree function
test("test convertRadiansToDegree function", () => {
  // 0rad => 0deg
  expect(convertRadiansToDegree(0)).toBe(0)

  // 0.523599rad => 30deg
  expect(convertRadiansToDegree(0.523599)).toBeCloseTo(30)

  // 0.785398rad => 45deg
  expect(convertRadiansToDegree(0.785398)).toBeCloseTo(45)

  // 1.0472rad => 60deg
  expect(convertRadiansToDegree(1.0472)).toBeCloseTo(60)

  // 1.5708rad => 90deg
  expect(convertRadiansToDegree(1.5708)).toBeCloseTo(90)

  // 3.14159rad => 180deg
  expect(convertRadiansToDegree(3.14159)).toBeCloseTo(180)

  // 6.28319rad => 360deg
  expect(convertRadiansToDegree(6.28319)).toBeCloseTo(360)
})
