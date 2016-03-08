/** Cast a value to its boolean representation.
 *
 * @argument value - value to properly cast to a boolean
 * @return {Boolean}
 */
export default function convertToBoolean(value) {
  // TODO write the function so it passes the tests below !
  if (typeof value == 'boolean')
  	return value;
  if (value == 'true')
  	return true;
  if (value == 'false')
  	return false;
  if (typeof value == 'string' && value.length > 0)
  	return false;
  return new Boolean(value).valueOf();
}


/* Hints :

  !!value
  typeof
  ===

 */
