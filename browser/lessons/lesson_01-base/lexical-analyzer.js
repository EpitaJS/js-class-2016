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
  return str.trim().split(' ').filter(e => e != '');
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
  return tokenize(str).map(stem);
}

/** index a string into a hash {'token' : <frequency of appearance>}
 *
 * @argument {String}
 * @return {Object}
 */
export function index(str) {
  var tokens = parse(str);
  var dict = {};

  for (var i = 0; i < tokens.length; ++i) {
    if (typeof dict[tokens[i]] == 'undefined')
      dict[tokens[i]] = 1;
    else
      dict[tokens[i]]++;
  }

  return dict;
}
