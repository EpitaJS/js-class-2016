/** Cast a value to its boolean representation.
 *
 * @argument value - value to properly cast to a boolean
 * @return {Boolean}
 */
export default function convertToBoolean(value) {
    var valueType = typeof value;
    if (valueType === "string")
        return (value === "true");
    if (valueType === "undefined" || valueType === "object")
        return false;
    return Boolean(value);
}


/* Hints :

  !!value
  typeof
  ===

 */
