import { isLayer, type Layer } from './layer.js'

export type ModuleName = `${Layer}/${string}`

export function parseName(name: string): [Layer, string] | null {
  const parts = name.split('/')
  if (parts.length !== 2 || !isLayer(parts[0]) || parts[1].length === 0) {
    return null
  }
  return [parts[0], parts[1]]
}
