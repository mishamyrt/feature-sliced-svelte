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

export type ModuleName = `${Layer}/${string}`
