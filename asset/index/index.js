const os = require('os')

const hostName = os.hostname()

const sysRelease = os.release()
const sysEndian = (os.endianness() == "BE") ? "big endian" : "little endian"
const tempDir = os.tmpdir();

const sysCpuModel = os.cpus()[0].model
const sysCpuCores = os.cpus().length
const sysCpuArch = convertArch(os.arch())
const sysPlatform = convertPlatform(os.platform());
const sysMemory = Math.floor(os.totalmem() / 1048576) // Convert to MiB
var sysFreeMem = Math.floor(os.freemem() / 1048576) // Convert to MiB
var sysUptime = timestr(os.uptime());
setInterval(() => {
    sysFreeMem = Math.floor(os.freemem() / 1048576);
}, 400) // update 
setInterval(() => {
    sysUptime = timestr(os.uptime());
}, 400) // update

const currentUser = os.userInfo();

function convertArch(arg)
{
    if (arg == "x64") return "AMD64/Intel 64";
    if (arg == "ia32") return "IA-32";
    if (arg == "x32") return "AMD64/Intel 64 with 32-bit pointers & values"
    if (arg == "s390") return "IBM System/390";
    if (arg == "arm") return "ARM version 7"
    if (arg == "arm64") return "ARM 64-bit";
    if (arg == "mips") return "MIPS";
    if (arg == "mipsel") return "MIPS little-endian";
    return arg;
}

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

function convertPlatform(arg)
{
    if (arg == 'aix') return "IBM AIX (Advanced Interactive Executive)";
    if (arg == "darwin") return "Mac OS";
    if (arg == "freebsd") return "FreeBSD";
    if (arg == "linux") return "GNU/Linux";
    if (arg == "openbsd") return "OpenBSD";
    if (arg == "sunos") return "SunOS/Solaris";
    if (arg == "win32") return "Microsoft Windows";
    if (arg == "android") return "Android";
    return arg;
}