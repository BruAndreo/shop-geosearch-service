export function cleanDocument (value: string) {
  return value.replace(/\D||[A-Za-z]/g, "")
}
