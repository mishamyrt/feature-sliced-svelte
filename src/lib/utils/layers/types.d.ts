import { allowedLayers } from './constants.js'

export type Layer = (typeof allowedLayers)[number]
export type ModuleName = `${Layer}/${string}`
