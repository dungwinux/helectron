
function PrintLib() {
    let ver = process.versions
    for (let i = 0; i < Object.values(ver).length; i++) {
        var verl = Object.entries(ver)[i]
        document.write(verl[0] + ":<span>" + verl[1] + "</span>" + "<br>")
    }
}