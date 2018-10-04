const os = require('os')
const si = require('systeminformation') 

const hostName = os.hostname()

const sysRelease = os.release()
const sysEndian = (os.endianness() == "BE") ? "big endian" : "little endian"
const tempDir = os.tmpdir();


async function cpuData() {
    const sysCpuModel = os.cpus()[0].model
    const sysCpuCores = os.cpus().length
    const sysCpuArch = convertArch(os.arch())
    const sysCpuTempData = await si.cpuTemperature()
    let sysCpuTemp = sysCpuTempData.main
    if(sysCpuTemp === -1) sysCpuTemp = 'Unsupported'
    return {
        sysCpuModel, sysCpuCores, sysCpuArch, sysCpuTemp,
    }
}

const sysPlatform = convertPlatform(os.platform())
const sysMemory = Math.floor(os.totalmem() / 1048576) // Convert to MiB


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

function convertPlatform(arg)
{
    if (arg == 'aix') return "IBM AIX (Advanced Interactive Executive)";
    if (arg == "darwin") return "Mac OS";
    if (arg == "freebsd") return "FreeBSD";
    if (arg == "linux") return "Linux";
    if (arg == "openbsd") return "OpenBSD";
    if (arg == "sunos") return "SunOS/Solaris";
    if (arg == "win32") return "Microsoft Windows";
    if (arg == "android") return "Android";
    return arg;
}
