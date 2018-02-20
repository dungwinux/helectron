const electron = require('electron')
const { app, BrowserWindow, Menu } = electron
const path = require('path')
const url = require('url')

let win

function createWindow() {
    win = new BrowserWindow({
        width: 600,
        height: 450,
        show: false
    })
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'asset/index/index.html'),
        protocol: 'file:',
        slashes: true
    }))
    // win.webContents.openDevTools()
    // Menu.setApplicationMenu(null)
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate)
    Menu.setApplicationMenu(mainMenu)

    win.once('ready-to-show', () => {
        win.show()
    })

    // Emitted when the window is closed.
    win.on('closed', () => {
        win = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
        createWindow()
    }
})

const mainMenuTemplate = [
    {
        label: 'Main',
        submenu: [
            {
                role: 'toggledevtools'
            },
            {
                type: 'separator'
            },
            {
                label: 'About',
                click() {
                    let about = new BrowserWindow({
                        width: 320,
                        height: 535,
                        title: 'About',
                        resizable: false,
                        alwaysOnTop: true,
                        frame: false,
                        modal: true,
                        parent: win
                    })
                    about.loadURL(url.format({
                        pathname: path.join(__dirname, 'asset/about/about.html'),
                        protocol: 'file:',
                        slashes: true
                    }))
                }
            },
            {
                type: 'separator'
            },
            {
                role: 'close'
            }
        ]
    }
]