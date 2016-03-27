
/** Cast a value to its boolean representation.
 *
 * @argument value - value to properly cast to a boolean
 * @return {Boolean}
 */
export default function convertToBoolean(value) {
  if(_.isBoolean(value))
  return value;

  if(_.isString(value))
  {
    if(value == 'true')
      return true;
    else
      return false;
  }
   if(_.isNumber(value))
  {
    if(value == 1)
      return true;
    else
      return false;
  }
  return false;

  // TODO write the function so it passes the tests below !
}


/* Hints :

  !!value
  typeof
  ===

 */
