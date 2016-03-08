/** Cast a value to its boolean representation.
 *
 * @argument value - value to properly cast to a boolean
 * @return {Boolean}
 */
export default function convertToBoolean(value) {
  if (typeof value === 'number') return value != 0;
  if (typeof value === 'string') return value === 'true';
  if (typeof value === 'boolean') return value;
  if (typeof value === 'undefined') return false;
  return false;
}


/* Hints :

  !!value
  typeof
  ===

 */
