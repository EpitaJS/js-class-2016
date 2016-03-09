/** Cast a value to its boolean representation.
 *
 * @argument value - value to properly cast to a boolean
 * @return {Boolean}
 */
export default function convertToBoolean(value) {
	return value === true || value === 'true';
}


/* Hints :

  !!value
  typeof
  ===

 */
