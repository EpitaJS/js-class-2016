/** A simple lexical analyzer
 */

/** tokenize a string = split it into words
 *
 * Note : space separated only for now
 *
 * @argument {String}
 * @return {Array}
 */
export function tokenize(str) {
  // Write code here so that it passes the tests
  var res = str.split(" ");
  var ress = res.filter(e => e !== "")
  return ress;
}

/** stem a string = turn several variants into the same
 *
 * Note : for now, uniformize to lowercase only
 * @argument {String}
 * @return {String}
 */
export function stem(str) {
  // Write code here so that it passes the tests
  return str.toLowerCase()
}

/** parse a string into a list of stemmed token
 * i.e. combine the 2 functions above
 *
 * @argument {String}
 * @return {Array}
 */
export function parse(str) {
  // Write code here so that it passes the tests
  var res = tokenize(str);
  var ress = res.map(e => stem(e));
  return ress;
}

/** index a string into a hash {'token' : <frequency of appearance>}
 *
 * @argument {String}
 * @return {Object}
 */
export function index(str) {
  // Write code here so that it passes the tests
  var res = parse(str);
  var result = {};
  for (var i = 0; i < res.length; i++)
  {
    if (result[res[i]])
      result[res[i]]++;
    else
      result[res[i]] = 1;
  }
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
