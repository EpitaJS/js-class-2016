
export default function debounce(callback, waitMs) {

  return function() {
    setTimeout(callback,waitMs, "hello", 42);
  };
}


/** Hints

 Date.now();  -> time in Ms

 setTimeout(fn, waitMs)

 */
