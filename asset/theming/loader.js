const fs = require('fs');

const configDirectory = `${currentUser["homedir"]}/helectron`;
const extStyleDirectory = configDirectory + '/stylesheets/';

var folderPresent = true;
var stylesheetsFolderPresent = true;
var head = document.querySelector('head');

checkConfigDirAccessible();
prepareConfigDir();

if (folderPresent)
{
    checkStylesheetDirAccessible();
    if (!stylesheetsFolderPresent) prepareStylesheetDir();
    if (stylesheetsFolderPresent)
    {
        // now we load all CSS here into app
        fs.readdir(extStyleDirectory, (err, filesList) => {
            if (err)
            {
                console.log("Error reading custom stylesheets directory...");
                console.log(err);
                return;
            }
            for (let i = 0 ; i < filesList.length ; i++)
            {
                let out = document.createElement('link');
                out.setAttribute('rel', 'stylesheet');
                out.setAttribute('type', 'text/css');
                out.setAttribute('href', extStyleDirectory + filesList[i]);
                out.setAttribute('class', 'external-stylesheet');
                head.appendChild(out);
            }
        })
    }
}

function checkConfigDirAccessible()
{
    fs.access(configDirectory, fs.constants.R_OK, (err) => {
        if (err)
        {
            console.log ("Could not access config directory! Trying to create one...");
            folderPresent = false;
        }
    });
}

function checkStylesheetDirAccessible()
{
    fs.access(extStyleDirectory, fs.constants.R_OK, (err) => {
        if (err)
        {
            console.log ("Could not access stylesheets directory! Trying to create one...");
            stylesheetsFolderPresent = false;
        }
    });
}

function prepareConfigDir()
{
    if (!folderPresent)
    {
        folderPresent = true;
        fs.mkdir(configDirectory, (err) => {
            if (err)
            {
                console.log("Could not create config directory!");
                folderPresent = false;
            }
        });
    }
}

function prepareStylesheetDir()
{
    if (!stylesheetsFolderPresent)
    {
        stylesheetsFolderPresent = true;
        fs.mkdir(configDirectory, (err) => {
            if (err)
            {
                console.log("Could not create stylesheets directory!");
                stylesheetsFolderPresent = false;
            }
        })
    }
}