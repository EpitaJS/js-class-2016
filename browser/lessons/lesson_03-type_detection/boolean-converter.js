/** Cast a value to its boolean representation.
 *
 * @argument value - value to properly cast to a boolean
 * @return {Boolean}
 */
export default function convertToBoolean(value) {
  // TODO write the function so it passes the tests below !
  if (value === 'true' || value === 'false')
  	return value == 'true';
  if (typeof value === 'boolean')
  	return value;
  if (typeof value === 'undefined' || typeof value === 'object')
	return !!value;
  return false;
}


/* Hints :

  !!value
  typeof
  ===

 */
