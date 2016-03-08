
export default function tryUntil(candidateFnArray, callback) {
  /* ... */
    var i = 0;
    function test()
    {
        candidateFnArray[i](function(err, res)
        {
            if (err || res) {
                callback(err, res);
            }
            else {
                if (++i < candidateFnArray.length) {
                    test();
                }
                else {
                    callback(null, null);
                }
            }
        })
    }
    test();
}
