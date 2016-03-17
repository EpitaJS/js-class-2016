/** Cast a value to its boolean representation.
 *
 * @argument value - value to properly cast to a boolean
 * @return {Boolean}
 */
export default function convertToBoolean(value) {
  if (typeof(value) === typeof(" "))
  {
	  if (value.toLowerCase() === "true")
		  return true;
	  else
		  return false;
  }
  else if (typeof(value) === typeof(15))
  {
	  if (!value)
		  return false;
	  else
		  return true;
  }
  else if (value === true)
	  return true;
  else
	  return false;
}


/* Hints :

  !!value
  typeof
  ===

 */
