const fs = require('fs');

var folderPresent = true;
fs.access(`${currentUser["homedir"]}/helectron`, fs.constants.R_OK, (err) => {
    console.log ("Cannot access config directory!");
    folderPresent = false;
})

if (!folderPresent)
{
    fs.mkdir(`${currentUser["homedir"]}/helectron`, (err) => {
        console.log("Could not create config directory!");
    })
}

