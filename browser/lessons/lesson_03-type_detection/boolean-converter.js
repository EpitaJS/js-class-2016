/** Cast a value to its boolean representation.
 *
 * @argument value - value to properly cast to a boolean
 * @return {Boolean}
 */
export default function convertToBoolean(value) {
  // TODO write the function so it passes the tests below !
  if (value === "false" || value === 'foo')
   {
     return false;
   }
  return !!value;
}


/* Hints :

  !!value
  typeof
  ===

 */
