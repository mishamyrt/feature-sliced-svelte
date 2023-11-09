//@ts-check
import { allowedLayersSet } from './constants.js';

/**
 * @param {string} name
 * @returns {name is import('./types.js').ModuleName}
 */
export function isCorrectName(name) {
  const parts = name.split('/');
  if (parts.length !== 2) {
    return false;
  }
  return allowedLayersSet.has(parts[0]);
}
