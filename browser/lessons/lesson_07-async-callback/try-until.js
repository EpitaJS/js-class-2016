export default function tryUntil(candidateFnArray, callback) {
   var result = null;
    candidateFnArray[1].findAgency(function(a){

        if(candidateFnArray[0].agencyName == null && candidateFnArray[0].credit == null)
        {
          if(a.name == 'Unknown')
            result = a;
        }
        else
        {
        if(a.name == candidateFnArray[0].agencyName ||  candidateFnArray[0].credit == a.name)
        result = a;
        }

    }, callback);
    return callback(null,result);

}
