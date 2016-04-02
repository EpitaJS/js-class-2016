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
  str = str.replace(/ {2,}/g," ");
  
  if(str[0] == ' ')
    str = str.substr(1, str.length);
    
  if(str[str.length -1]== ' ')
    str = str.substr(0, str.length-1);
    
  return str.split(" ");
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
  var tokens = parse(str);
  var array = new Array();
  var savetoken = new Array();
  var couple={};
  
  tokens.forEach(function (val) 
  {
   array.push({key:val, value:1});
  });
  
  
  array.forEach(function(val){
    if(couple[val.key]!=null)
      couple[val.key] = val.value +1;
    else
      couple[val.key] = val.value;
  });
  
  return couple;
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
