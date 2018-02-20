const os = require('os')

const userName = os.hostname()

const sysOs = os.type()
const sysRelease = os.release()

const sysCpuModel = os.cpus()[0].model
const sysCpuSpeed = os.cpus()[0].speed
const sysCpuCores = os.cpus().length
const sysCpuArch = process.arch

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
            for (let des = 0; des < Object.values(add).length; des++)
                if (Object.entries(add)[des][0] !== 'family')
                    document.write(Object.entries(add)[des][0] + ":" + "&nbsp" + Object.entries(add)[des][1] + "<br>")
        }
    }
    console.log("Done")
}