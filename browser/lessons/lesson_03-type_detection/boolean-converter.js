/** Cast a value to its boolean representation.
 *
 * @argument value - value to properly cast to a boolean
 * @return {Boolean}
 */
export default function convertToBoolean(value) {
  // TODO write the function so it passes the tests below !
  let type = typeof value;
  switch (type) {
    case 'string':
      return value.toLowerCase() === 'true';
    case 'number':
      return value !== 0;
    case 'object':
      return value !== null;
    case 'undefined':
      return false;
    default:
      return value;
  }
}


/* Hints :

  !!value
  typeof
  ===

 */
