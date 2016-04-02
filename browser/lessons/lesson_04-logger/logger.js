import _ from 'lodash';

function createFancyLogger(id) {
  id = (id || 'default').toUpperCase();

   function logBetter(level) {
    const originalArgs = Array.from(arguments);

    let updArgs = originalArgs;
    
    if(id === 'DEFAULT')
        id = 'default';

    if(updArgs.length === 4)
    {
         if(updArgs[0] === "log")
            console.log(getTimestamp() + ' - ' + id + " - " + updArgs[1], updArgs[2], updArgs[3]);
    }
    else
    {
      if(_.isObject(updArgs[1]))
      {
         if(updArgs[0] === "log")
           console.log(getTimestamp() + ' - ' + id + " - ", updArgs[1]);
      }
      
      if(updArgs[0] === "log")
        console.log(getTimestamp() + ' - ' + id + " - " + updArgs[1]);
        
      if(updArgs[0] === "info")
        console.info(getTimestamp() + ' - ' + id + " - " + updArgs[1]);
        
      if(updArgs[0] === "warn")
        console.warn(getTimestamp() + ' - ' + id + " - " + updArgs[1]);
        
      if(updArgs[0] === "error")
        console.error(getTimestamp() + ' - ' + id + " - " + updArgs[1]);
    }
  }

  /* eslint-disable no-undefined */
  return {
    log: undefined,
    info: undefined,
    warn: undefined,
    error: undefined,
  };
}



/** Convert a Javascript date to yyy/mm/dd hh:mm:ss.ms
 *
 * @param {Date} d
 */
function getTimestamp(d) {
  /* eslint complexity: [2,9] */
  d = d || (new Date());

  let yyyy = d.getFullYear();
  let mm = d.getMonth() + 1; // O-based
  let dd = d.getDate();
  // These lines ensure we have two-digits
  if (mm < 10) mm = '0' + mm;
  if (dd < 10) dd = '0' + dd;

  let hh = d.getUTCHours();
  let mn = d.getUTCMinutes();
  let ss = d.getSeconds();
  let mss = d.getMilliseconds();
  // These lines ensure we have two-digits
  if (hh < 10) hh = '0' + hh;
  if (mn < 10) mn = '0' + mn;
  if (ss < 10) ss = '0' + ss;
  if (mss < 10) mss = '00' + mss;
  else if (mss < 100) mss = '0' + mss;

  return `${yyyy}/${mm}/${dd} ${hh}:${mm}:${ss}.${mss}`;
}


/////////////////////////////////////////////////////////

const defaultLogger = createFancyLogger();
defaultLogger.create = createFancyLogger;

export default defaultLogger;
export { createFancyLogger as create };
