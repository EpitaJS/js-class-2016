import _ from 'lodash';

function createFancyLogger(id) {
  if (id) {
    id = id.toUpperCase();
  }
  else {
    id = "default";
  }

  /* eslint-disable no-undefined */
  return {
    log: function(arg)
    {
      const originalArgs = Array.from(arguments);

      let newArgs = originalArgs;
      newArgs[0] = getTimestamp() + " - " + id + " - ";
      if (typeof arg === 'object') {
        newArgs.push(arg);
      }
      else {
        newArgs[0] += arg;
      }

      console.log.apply(console, newArgs);
    },
    info: function(arg)
    {
      console.info(getTimestamp() + " - " + id + " - " + arg);
    },
    warn: function(arg)
    {
      console.warn(getTimestamp() + " - " + id + " - " + arg);
    },
    error: function(arg)
    {
      console.error(getTimestamp() + " - " + id + " - " + arg);
    }
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
