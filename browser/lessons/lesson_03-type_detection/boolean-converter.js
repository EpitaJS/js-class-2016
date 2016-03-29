/* Cast a value to its boolean representation.
 *
 * @argument value - value to properly cast to a boolean
 * @return {Boolean}
 */
export default function convertToBoolean(value) {
	switch (typeof value)
	{
		case "boolean":
			return value;
		case "undefined":
			return false;
		case "object":
			return !!value
		case "number":
			return !!value;
		case "string":
			if (value === "true")
				return true;
			return false;
		case "symbol":
		case "function":
		default:
			break;
	}
	return false;
}


/* Hints :

  !!value
  typeof
  ===

 */
