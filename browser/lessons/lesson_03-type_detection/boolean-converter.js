/** Cast a value to its boolean representation.
 *
 * @argument value - value to properly cast to a boolean
 * @return {Boolean}
 */
export default function convertToBoolean(value) {
    if (value ==  null)
        return !!value;
    if (typeof (value) === 'boolean')
        return value;
    if (typeof(value) === 'string')
        return value == "true" ? true : false;
    if (typeof(value) === 'number')
        return value == 1 ? true : false;
    return value.valueOf();
}


/* Hints :

  !!value
  typeof
  ===

 */
