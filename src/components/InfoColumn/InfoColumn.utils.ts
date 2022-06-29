export const getPositivePercentage = (percentage: number): number => {
  if (percentage > 0) return percentage
  return -percentage
}