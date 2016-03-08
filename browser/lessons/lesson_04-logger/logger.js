import _ from 'lodash';

function createFancyLogger(id) {
  id = (id || 'default');

  function logBetter(level) {
    const originalArgs = Array.from(arguments);

    // TODO implement !
    let newArgs = originalArgs.slice(1);
    // TODO....
    let callerParams = newArgs.slice(0);

    let prefix = getTimestamp(new Date(0)) + " - " + id + " - ";
    newArgs.unshift(prefix);

    let output = prefix;
    //if (! (callerParams[0].includes("%s") || callerParams[0].includes("%d")))
      output = prefix + callerParams[callerParams.length - 1];
    //else
      //output = prefix +
    
    console[originalArgs[0]](output);
  }

  /* eslint-disable no-undefined */
  return {
    log: logBetter.bind(undefined, 'log'),
    info: logBetter.bind(undefined, 'info'),
    warn: logBetter.bind(undefined, 'warn'),
    error: logBetter.bind(undefined, 'error'),
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
