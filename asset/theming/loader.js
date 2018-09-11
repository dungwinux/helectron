const fs = require('fs');

const configDirectory = `${currentUser["homedir"]}/helectron`;
const extStyleDirectory = configDirectory + '/stylesheets';

var folderPresent = true;
var stylesheetsFolderPresent = true;

checkConfigDirAccessible();
prepareConfigDir();

if (folderPresent)
{
    checkStylesheetDirAccessible();
    if (!stylesheetsFolderPresent) prepareStylesheetDir();
    if (stylesheetsFolderPresent)
    {
        // now we load all CSS here into app
        
    }
}

function checkConfigDirAccessible()
{
    fs.access(configDirectory, fs.constants.R_OK, (err) => {
        console.log ("Could not access config directory!");
        folderPresent = false;
    });
}

function checkStylesheetDirAccessible()
{
    fs.access(extStyleDirectory, fs.constants.R_OK, (err) => {
        console.log ("Could not access stylesheets directory!");
        stylesheetsFolderPresent = false;
    });
}

function prepareConfigDir()
{
    if (!folderPresent)
    {
        folderPresent = true;
        fs.mkdir(configDirectory, (err) => {
            console.log("Could not create config directory!");
            folderPresent = false;
        })
    }
}

function prepareStylesheetDir()
{
    if (!stylesheetsFolderPresent)
    {
        stylesheetsFolderPresent = true;
        fs.mkdir(configDirectory, (err) => {
            console.log("Could not create stylesheets directory!");
            stylesheetsFolderPresent = false;
        })
    }
}