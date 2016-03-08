/** Cast a value to its boolean representation.
 *
 * @argument value - value to properly cast to a boolean
 * @return {Boolean}
 */
export default function convertToBoolean(value) {
  // TODO write the function so it passes the tests below !
  console.log(value);
  if (typeof value === 'number') {
      return value !== 0;
  } else if (typeof value === 'string') {
      return value === "true"
  } else if (typeof value === 'boolean') {
      return value
  }
  return !!value
}


/* Hints :

  !!value
  typeof
  ===

 */
