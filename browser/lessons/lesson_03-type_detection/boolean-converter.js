/** Cast a value to its boolean representation.
 *
 * @argument value - value to properly cast to a boolean
 * @return {Boolean}
 */

import _ from 'lodash';

export default function convertToBoolean(value) {
  // TODO write the function so it passes the tests below !
  if (typeof(value) == 'boolean')
      return value;
  if (typeof(value) == 'string')
  {
      if (value == 'true')
          return true;
      if (value == 'false')
          return false;
  }
  if (value == null || value == undefined)
    return !!value;
  return _.isBoolean(value);
}


/* Hints :

  !!value
  typeof
  ===

 */
