/** Cast a value to its boolean representation.
 *
 * @argument value - value to properly cast to a boolean
 * @return {Boolean}
 */
export default function convertToBoolean(value) {
  // TODO write the function so it passes the tests below !
  if (value === true)
    return true;
  else if (value === false)
    return false;
  else if (value === 'true')
    return true;
  else if (value === 'false')
    return false;
  else if (value === undefined || value == null)
    return false;
  else if (value === 0)
    return false;
  else if (value === 1)
    return true;
  return false;
}


/* Hints :

  !!value
  typeof
  ===

 */
