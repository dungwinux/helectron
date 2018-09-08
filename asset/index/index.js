const os = require('os')

const hostName = os.hostname()

const sysOs = os.type()
const sysRelease = os.release()
const sysEndian = (os.endianness() == "BE") ? "big endian" : "little endian"
const tempDir = os.tmpdir();

const sysCpuModel = os.cpus()[0].model
const sysCpuCores = os.cpus().length
const sysCpuArch = convertArch(process.arch)
const sysMemory = Math.floor(os.totalmem() / 1048576) // Convert to MiB

var sysFreeMem = Math.floor(os.freemem() / 1048576) // Convert to MiB
setInterval(() => {
    sysFreeMem = Math.floor(os.freemem() / 1048576);
}, 400)

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

function PrintNetworkInterface() {
    var netintf, infname, infconf, add
    let netconf = os.networkInterfaces()
    for (let i = 0; i < Object.values(netconf).length; i++) {
        netintf = Object.entries(netconf)[i]
        infname = netintf[0]
        infconf = netintf[1]
        document.write("<h3>" + infname + "</h3>")
        for (let a = 0; a < infconf.length; a++) {
            add = infconf[a]
            document.write("<h4>" + add.family + "</h4>")
            document.write("<ul>")
            for (let des = 0; des < Object.values(add).length; des++)
                if (Object.entries(add)[des][0] !== 'family')
                    document.write("<li>" + "<b>" + Object.entries(add)[des][0] + "</b>" + ":&nbsp;<span>" + Object.entries(add)[des][1] + "</span>" + "</li>")
            document.write("</ul>")
        }
    }
    console.log("Done")
}