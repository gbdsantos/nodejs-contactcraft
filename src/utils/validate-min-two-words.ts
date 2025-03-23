export const validateMinTwoWords = (value: string) => {
  const words = value.split(/\s+/).filter(word => word.length >= 3)
  return words.length >= 2
}
