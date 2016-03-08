/** Cast a value to its boolean representation.
 *
 * @argument value - value to properly cast to a boolean
 * @return {Boolean}
 */
export default function convertToBoolean(value) {

    let type = typeof value;

    if (type === 'string') return value.toLowerCase() === 'true';
    if (type === 'number') return value !== 0;
    if (type === 'undefined') return false;
    if (type === 'object') return value !== null;
    return value;
}


/* Hints :

  !!value
  typeof
  ===

 */
