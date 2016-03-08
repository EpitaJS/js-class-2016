/** Cast a value to its boolean representation.
 *
 * @argument value - value to properly cast to a boolean
 * @return {Boolean}
 */
export default function convertToBoolean(value) {
  switch (value) {
    case 1:
    case 'true':
    case true:
      return true;
    default:
      return false;
  }
}


/* Hints :

  !!value
  typeof
  ===

 */
