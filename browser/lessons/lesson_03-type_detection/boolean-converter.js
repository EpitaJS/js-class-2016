/** Cast a value to its boolean representation.
 *
 * @argument value - value to properly cast to a boolean
 * @return {Boolean}
 */
export default function convertToBoolean(value) {
  if (value === 'true')
    return true;

  if (typeof value === 'string')
    return false;

  return !!value;
}


/* Hints :

  !!value
  typeof
  ===

 */
