/** Cast a value to its boolean representation.
 *
 * @argument value - value to properly cast to a boolean
 * @return {Boolean}
 */
export default function convertToBoolean(value) {
  // TODO write the function so it passes the tests below !

  if (typeof (value) === 'boolean')
    return value;

  if (typeof(value) === 'string')
    return value == "true" ? true : false;

  if (typeof(value) === 'number')
    return value == "1" ? true : false;

  if (value == 'undefined' || value == null)
    return !!value;

  return value.valueOf();
}


/* Hints :

  !!value
  typeof
  ===

 */
