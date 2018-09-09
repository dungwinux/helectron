var sysFreeMem = Math.floor(os.freemem() / 1048576) // Convert to MiB
var sysUptime = timestr(os.uptime());
setInterval(() => {
    sysFreeMem = Math.floor(os.freemem() / 1048576);
}, 400) // update 
setInterval(() => {
    sysUptime = timestr(os.uptime());
}, 400) // update

/**
 * attributed to github.com/NOVAglow
 Convert seconds to long format, from weeks down to seconds

 @param {integer} s Given number of seconds
 @return {string} s converted to long format
 */
function timestr(s) {
    w = Math.trunc(s / 60 / 60 / 24 / 7);  // Number of weeks
    d = Math.trunc(s / 60 / 60 / 24) % 7;  // Number of days
    h = Math.trunc(s / 60 / 60) % 24;      // Number of hours
    m = Math.trunc(s / 60) % 60;           // Number of minutes
    s = s % 60;                            // Number of seconds

    result = "";
    if (w > 0) {
        result = w + " week" + (w == 1 ? "" : "s");
    }

    result = result + (result != "" ? ", " + d + " day" + (d > 1 ? "s" : "")
                                    : (d > 0 ? d + " day" + (d > 1 ? "s" : "")
                                             : ""));

    result = result + (result != "" ? ", " + h + " hour" + (h > 1 ? "s" : "")
                                    : (h > 0 ? h + " hour" + (h > 1 ? "s" : "")
                                             : ""));

    result = result + (result != "" ? ", " + m + " minute" + (m > 1 ? "s" : "")
                                    : (m > 0 ? m + " minute" + (m > 1 ? "s" : "")
                                             : ""));

    result = result + (result != "" ? ", " + s + " second" + (s > 1 ? "s" : "")
                                    : (s > 0 ? s + " second" + (s > 1 ? "s" : "")
                                             : ""));

    return result;
}