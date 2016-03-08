
export default function debounce(callback, waitMs) {

  var id = null;

  return function() {
    var args = arguments;
    if (id) {
      clearTimeout(id)
    }
    id = setTimeout(function()
    {
      callback.apply(window, args);
    }, waitMs);
  };
}


/** Hints

 Date.now();  -> time in Ms

 setTimeout(fn, waitMs)

 */
