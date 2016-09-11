/** Cast a value to its boolean representation.
 *
 * @argument value - value to properly cast to a boolean
 * @return {Boolean}
 */
export default function convertToBoolean(value) {
    // TODO write the function so it passes the tests below !
    if (typeof value === 'number') {
        return value == 1;
    }
    if (typeof value === 'boolean') {
        return value;
    }
    if (value instanceof Boolean) {
        return value == true;
    }
    return value == "true";
}


/* Hints :

   !!value
   typeof
   ===

*/
