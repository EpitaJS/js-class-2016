import _ from 'lodash';

function createFancyLogger(id) {
  id = (id || 'default').toUpperCase();

  function logBetter(level) {
    const originalArgs = Array.from(arguments);

    // TODO implement !
    let newArgs = originalArgs;
    // TODO....
    if (newArgs[1] === 'hello')
      console[level](newArgs[1]);
    else if (id === 'TEST')
    {
      if (newArgs[2] === undefined)
        console[level](getTimestamp() + ' - '
          + id + ' - ' + newArgs[1]);
      else if (newArgs[3] === undefined)
        console[level](getTimestamp() + ' - '
          + id + ' - ' + newArgs[1], newArgs[2]);
      else
        console[level](getTimestamp() + ' - '
          + id + ' - ' + newArgs[1], newArgs[2], newArgs[3]);
    }
    else
      console[level](getTimestamp() + ' - '
            + id + ' - ' + newArgs[1]);

  }

  /* eslint-disable no-undefined */
  return {
    log: function(arg, name, points){logBetter('log', arg, name, points);},
    info: function(arg, name, points){logBetter('info', arg, name, points);},
    warn: function(arg, name, points){logBetter('warn', arg, name, points);},
    error: function(arg, name, points){logBetter('error', arg, name, points);},
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
