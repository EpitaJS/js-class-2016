import _ from 'lodash';

function createFancyLogger(id) {
    id = (id || 'default');//.toUpperCase();

    function logBetter(level) {
        const originalArgs = Array.from(arguments);
        let newArgs = originalArgs;
        return function() {
            let date = getTimestamp(new Date());
            let msg = newArgs[1];

            let tabArgs = new Array();
            let str = `${date} - ${id} - `;

            if (arguments.length > 0 && _.isString(arguments[0])) {
                let text = arguments[0];
                tabArgs.push(`${str}${text}`);

                let i = 1;
                while (i < arguments.length) {
                    tabArgs.push(arguments[i]);
                    i += 1;
                }
            } else if (arguments.length > 0 && typeof arguments[0].name !== 'undefined' && typeof arguments[0].points !== 'undefined') {
                tabArgs.push(`${str}User %s has %d points`);
                tabArgs.push(arguments[0].name);
                tabArgs.push(arguments[0].points);
            } else {
                tabArgs.push(`${str}`);
            }

            switch (level) {
                case 0:
                console.log.apply(console, tabArgs);
                break;
                case 1:
                console.info.apply(console, tabArgs);
                break;
                case 2:
                console.warn.apply(console, tabArgs);
                break;
                case 3:
                console.error.apply(console, tabArgs);
                break;
                default:
                break;
            }
        }
    }

    /* eslint-disable no-undefined */
    return {
        log: logBetter(0),
        info: logBetter(1),
        warn: logBetter(2),
        error: logBetter(3),
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
