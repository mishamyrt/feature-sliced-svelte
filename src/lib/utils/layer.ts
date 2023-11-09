export const allowedLayers = [
  'shared',
  'entities',
  'features',
  'widgets',
  'pages',
  'app',
] as const

export const allowedLayersSet = new Set<string>(allowedLayers)

export type Layer = (typeof allowedLayers)[number]

export function isLayer(x: string): x is Layer {
  return allowedLayersSet.has(x)
}
