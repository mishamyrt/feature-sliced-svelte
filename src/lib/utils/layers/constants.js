export const allowedLayers = /** @type {const} */ ([
  'shared',
  'entities',
  'features',
  'widgets',
  'pages',
  'app',
]);

/** @type {Set<string>} */
export const allowedLayersSet = new Set(allowedLayers);
