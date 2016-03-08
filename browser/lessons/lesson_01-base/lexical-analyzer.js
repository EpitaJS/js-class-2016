/** A simple lexical analyzer
 */

/** tokenize a string = split it into words
 *
 * Note : space separated only for now
 *é
 * @argument {String}
 * @return {Array}
 */
export function tokenize(str) {
  return str.split(' ').filter(function (char) { return char !== ""; });
}

/** stem a string = turn several variants into the same
 *
 * Note : for now, uniformize to lowercase only
 * @argument {String}
 * @return {String}
 */
export function stem(str) {
  return str.toLowerCase();
}

/** parse a string into a list of stemmed token
 * i.e. combine the 2 functions above
 *
 * @argument {String}
 * @return {Array}
 */
export function parse(str) {
  return tokenize(stem(str));
}

/** index a string into a hash {'token' : <frequency of appearance>}
 *
 * @argument {String}
 * @return {Object}
 */
export function index(str) {
   let strArray = parse(str);
   let result = {};

   strArray.forEach(function (word) {

      if (!result[word]) result[word] = 1;
      else result[word] += 1;

   })

   return result;
}


/* Hints :
 *
 ******* Array *******

 Array.push(<new item>)

 array.forEach(value => {
   ...
 });

 Array.map(value => {
   return <newValue>;
 });

 Array.reduce((accumulator, value) => {
   accumulator += value;
   return accumulator;
 }, 0);

 ******* String *******

 String.split(<separator>) -> Array

 String.toLowerCase()

 *
 */
