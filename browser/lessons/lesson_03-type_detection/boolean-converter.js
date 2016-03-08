import _ from 'lodash';

/** Cast a value to its boolean representation.
 *
 * @argument value - value to properly cast to a boolean
 * @return {Boolean}
 */
export default function convertToBoolean(value) {
  // TODO write the function so it passes the tests below !
  /*if (value === true)
    return true;
  if (value === 'true')
    return true;

  if (typeof(value) === typeof(' '))
    return false;
  
  return !!value;
*/
  return _.isBoolean(value);
}


/* Hints :

  !!value
  typeof
  ===

 */
