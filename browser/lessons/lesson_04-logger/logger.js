import _ from 'lodash';

function createFancyLogger(id) {
  id = (id || 'default').toUpperCase();

  function logBetter(level) {
    const originalArgs = Array.from(arguments);

    // TODO implement !
    let newArgs = originalArgs;
    switch (level)
    {
      case 1: console.log(getTimestamp() + ' - ' + id + ' - ' + 'log'); break;
      case 2: console.info(getTimestamp() + ' - ' + id + ' - ' + 'info'); break;
      case 3: console.warn(getTimestamp() + ' - ' + id + ' - ' + 'warning !'); break;
      case 4: console.error(getTimestamp() + ' - ' + id + ' - ' + 'error !'); break;
    }
    return ;
    // TODO....
  }

  /* eslint-disable no-undefined */
  return {
    log: logBetter.bind(undefined, 1),
    info: logBetter.bind(undefined, 2),
    warn: logBetter.bind(undefined, 3),
    error: logBetter.bind(undefined, 4),
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
