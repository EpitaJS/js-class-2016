
export default function tryUntil(candidateFnArray, callback) {
    if (candidateFnArray.lenght <= 0) {
        callback("Fail", null);
    } else {
        console.log(candidateFnArray[0]);
        callback(null, candidateFnArray[0]);
    }
}
