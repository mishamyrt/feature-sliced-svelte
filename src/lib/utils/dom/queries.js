//@ts-check

/**
 * @typedef {import('../layers/types.js').Layer} Layer
 * @typedef {Record<Layer, number>} ComponentsCountMap
 *
 * @typedef ComponentsCount
 * @prop {Layer} name
 * @prop {number} count
 */

/**
 * Counts the number of FSD components in the DOM, grouping the result by layer
 * @returns {ComponentsCount[]}
 */
export function countByLayers() {
  const items = document.querySelectorAll('[data-fsd]');
  const results = /** @type {ComponentsCountMap} */ ({});
  for (const item of items) {
    const layer = /** @type {Layer} */ (item.getAttribute('data-fsd-layer'));
    if (!layer) continue;
    if (layer in results) {
      results[layer]++;
    } else {
      results[layer] = 1;
    }
  }
  return Object.entries(results).map(([name, count]) => ({
    name: /** @type {Layer} */ (name),
    count,
  }));
}
