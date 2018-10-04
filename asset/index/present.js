async function setConstants()
{
    const cpuDataBundle = await cpuData()
    const memDataBundle = await memData()
    const gpuDataBundle = await gpuData()
    /*
        System params
    */
    document.getElementById("hostname").innerHTML = hostName

    document.getElementById("ostype").innerHTML = sysPlatform
    if (sysPlatform.includes("Linux")) document.querySelector("#linux-name").innerHTML = "Kernel"

    document.getElementById("release").innerHTML = sysRelease
    document.getElementById("cpuModel").innerHTML = cpuDataBundle.sysCpuModel
    document.getElementById("cpuCores").innerHTML = cpuDataBundle.sysCpuCores
    document.getElementById("cpuTemp").innerHTML = cpuDataBundle.sysCpuTemp
    document.getElementById("cpuArch").innerHTML = cpuDataBundle.sysCpuArch
    document.getElementById("cpuEndian").innerHTML = sysEndian

    document.getElementById("gpuModel").innerHTML = gpuDataBundle.model
    document.getElementById("gpuVram").innerHTML = gpuDataBundle.vram +'mb'


    document.getElementById("tempDirectory").innerHTML = tempDir

    /*
        User params
    */
    document.getElementById("username").innerHTML = currentUser["username"]
    document.getElementById("homedir").innerHTML = currentUser["homedir"] + '/'

    if (sysPlatform.includes("Windows")) // if OS is Windows, this is irrelevant
        document.querySelector("#posix-user").style.display = "none"
    else 
    {
        document.getElementById("username").setAttribute("class", "code")
        document.getElementById("uid").innerHTML = currentUser["uid"]
        document.getElementById("gid").innerHTML = currentUser["gid"]
        document.getElementById("login-shell").innerHTML = currentUser["shell"]
    }
}

function initializeUpdate()
{
    initializeMemUpdate()
    setInterval(() => {
        document.getElementById("uptime").innerHTML = sysUptime;
    }, 500) // update    
}
async function getMemData() {
    const memDataBundle = await memData()
    
    const free = memDataBundle.free;
    const total = memDataBundle.total
    const memUsage = document.getElementById("memUsage")
    const percent = Math.round(100 - free / total * 100)
    memUsage.setAttribute("aria-valuenow", total - free);
    memUsage.style.width = percent+'%';
    memUsage.setAttribute("aria-valuemax", total);

    memUsage.innerHTML = `${total-free}MiB/${total}MiB (${percent}%)`
    
}
let initializeMemUpdate = async () => {
    await setInterval(getMemData, 500)
}
setConstants();
initializeUpdate();
