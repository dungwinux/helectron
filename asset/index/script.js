document.getElementById("hostname").innerHTML = hostName

document.getElementById("ostype").innerHTML = sysOs
document.getElementById("release").innerHTML = sysRelease

document.getElementById("cpuModel").innerHTML = sysCpuModel
document.getElementById("cpuCores").innerHTML = sysCpuCores
document.getElementById("cpuArch").innerHTML = sysCpuArch
document.getElementById("cpuEndian").innerHTML = sysEndian

document.getElementById("tempDirectory").innerHTML = tempDir
document.getElementById("sysMemory").innerHTML = sysMemory

setInterval(() => {
    document.getElementById("freeMemory").innerHTML = sysFreeMem;
}, 500);