export function convertRadiansToDegree(radians: number) {
  return radians * (360 / (2 * Math.PI))
}

export function convertDegreeToRadians(degree: number) {
  return degree * ((2 * Math.PI) / 360)
}
