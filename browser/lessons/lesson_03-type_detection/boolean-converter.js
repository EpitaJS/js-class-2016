/** Cast a value to its boolean representation.
 *
 * @argument value - value to properly cast to a boolean
 * @return {Boolean}
 */
export default function convertToBoolean(value) {
	if (typeof(value) === 'boolean') {
		return value;
	} else if (typeof(value) === 'string') {
		return value !== 'false' && value !== 'foo' && value !== '';
	} else {
		return false;
	}
}


/* Hints :

  !!value
  typeof
  ===

 */
