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
	var reg = new RegExp('\ +', 'g');
	str = str.replace(reg, ' ');
	 reg = new RegExp('^\ +', 'g');
	str = str.replace(reg, '');
	 reg = new RegExp('\ +$', 'g');
	str = str.replace(reg, '');
	return str.split(' ');    
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
	var arr = parse(str);
	var res = {};
	for (var i = 0; i < arr.length; i++)
	{
		if (res[arr[i]])
			res[arr[i]]++;
		else
			res[arr[i]] = 1;
	}
	return res;
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
