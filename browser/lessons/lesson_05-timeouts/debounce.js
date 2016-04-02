
export default function debounce(callback, waitMs) {
  var timeoutHandle;
  
  return function(arg1, arg2) 
  {
    clearTimeout(timeoutHandle);
    timeoutHandle = setTimeout(function()
    {
       if(arg2 == null)
         callback(arg1);
       else
         callback(arg1, arg2);
    },
    waitMs);
  };
}


/** Hints

 Date.now();  -> time in Ms

 setTimeout(fn, waitMs)

 */
