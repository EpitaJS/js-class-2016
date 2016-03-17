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
  var res = str.split(' ');
  var i = 0;
  var trueRes = [];
  while (i < res.length)
  {
	  if (res[i] != '') {
		trueRes.push(res[i]);
	  }
	  i = i + 1;
  }
  return trueRes;
}

/** stem a string = turn several variants into the same
 *
 * Note : for now, uniformize to lowercase only
 * @argument {String}
 * @return {String}
 */
export function stem(str) {
  var res = str.toLowerCase();
  return res;
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
  var arr = parse(str);
  var freq = {}
  
  for (var i = 0; i < arr.length; i++)
  {
	  if (arr[i] in freq)
		  freq[arr[i]]++;
	  else
		  freq[arr[i]] = 1;
  } 
  return freq;
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
