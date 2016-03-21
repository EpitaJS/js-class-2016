/** Cast a value to its boolean representation.
 *
 * @argument value - value to properly cast to a boolean
 * @return {Boolean}
 */
export default function convertToBoolean(value) {
	if (typeof(value) === "string")
		return value === "true";
	return Boolean(value);
}


/* Hints :

  !!value
  typeof
  ===

 */
