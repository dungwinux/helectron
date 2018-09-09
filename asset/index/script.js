document.getElementById("hostname").innerHTML = hostName

document.getElementById("ostype").innerHTML = sysPlatform
if (sysPlatform.includes("Linux")) document.querySelector("#linux-name").innerHTML = "Kernel"

document.getElementById("release").innerHTML = sysRelease

document.getElementById("cpuModel").innerHTML = sysCpuModel
document.getElementById("cpuCores").innerHTML = sysCpuCores
document.getElementById("cpuArch").innerHTML = sysCpuArch
document.getElementById("cpuEndian").innerHTML = sysEndian

document.getElementById("tempDirectory").innerHTML = tempDir
document.getElementById("sysMemory").innerHTML = sysMemory
setInterval(() => {
    document.getElementById("freeMemory").innerHTML = sysFreeMem;
}, 500) // update
setInterval(() => {
    document.getElementById("uptime").innerHTML = sysUptime;
}, 500) // update

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