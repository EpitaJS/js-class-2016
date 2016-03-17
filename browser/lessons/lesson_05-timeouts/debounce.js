
export default function debounce(callback, waitMs) {

    var procId = -1;

    return function(_) {
        var tab = arguments;
        if (procId !== -1) {
             clearTimeout(procId);
             procId = -1;
        }
        procId = setTimeout(function() {
            callback.apply(window, tab);
        }, waitMs);
    };
}

/** Hints

Date.now();  -> time in Ms

setTimeout(fn, waitMs)

*/
