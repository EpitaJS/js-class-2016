/** Cast a value to its boolean representation.
 *
 * @argument value - value to properly cast to a boolean
 * @return {Boolean}
 */
export default function convertToBoolean(value) {
  if (typeof value === "boolean") {
    return value;
  }
  else if (typeof value === "string") {
    if (value === "true")
      return true;
    if (value === "false")
      return false;
    else
      return false;
  }
  else if (typeof value === "undefined") {
    return false;
  }
  else if (value === null) {
    if (!value)
      return false;
  }
  else if (typeof value === 'number') {
    if (value === 1)
      return true;
    if (value === 0)
      return false;
  }
  else
    return value.valueOf();
}


/* Hints :

  !!value
  typeof
  ===

 */
