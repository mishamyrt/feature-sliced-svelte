import { allowedLayersSet, type ModuleName } from './constants.js'

export function isCorrectName(name: string): name is ModuleName {
  const parts = name.split('/')
  if (parts.length !== 2) {
    return false
  }
  return allowedLayersSet.has(parts[0])
}
