/** Cast a value to its boolean representation.
 *
 * @argument value - value to properly cast to a boolean
 * @return {Boolean}
 */
export default function convertToBoolean(value) {
	if (typeof value === 'boolean')
		return value;
	else if (typeof value === 'string')
		return value == 'true' ? true : false;
	else if (value === undefined || value === null)
		return false;
	else
		return null;
  // TODO write the function so it passes the tests below !
}


/* Hints :

  !!value
  typeof
  ===

 */
