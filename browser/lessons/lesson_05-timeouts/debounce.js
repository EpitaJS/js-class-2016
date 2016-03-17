
export default function debounce(callback, waitMs) {

  var num = null;

  return function() {
    var args = arguments;
    clearTimeout(num);
    num = setTimeout(function() { callback.apply(window, args);}, waitMs);
  };
}


/** Hints

 Date.now();  -> time in Ms

 setTimeout(fn, waitMs)

 */
