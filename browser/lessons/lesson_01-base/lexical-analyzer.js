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
    return str.replace(/\s+/g,' ').trim().split(' ');
  // Write code here so that it passes the tests
}

/** stem a string = turn several variants into the same
 *
 * Note : for now, uniformize to lowercase only
 * @argument {String}
 * @return {String}
 */
export function stem(str) {
    return str.toLowerCase();
  // Write code here so that it passes the tests
}

/** parse a string into a list of stemmed token
 * i.e. combine the 2 functions above
 *
 * @argument {String}
 * @return {Array}
 */
export function parse(str) {
    return tokenize(stem(str));
  // Write code here so that it passes the tests
}

/** index a string into a hash {'token' : <frequency of appearance>}
 *
 * @argument {String}
 * @return {Object}
 */
export function index(str) {
    var obj = {};
    var words = parse(str);
    var res = words.map(val => {
        if (obj[val]){
            ++obj[val];
        } else{
            obj[val] = 1;
        }
    });
    console.log(obj);
    return obj;
  // Write code here so that it passes the tests
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
