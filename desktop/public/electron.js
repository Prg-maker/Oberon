const path = require('path');

const { app, BrowserWindow , globalShortcut} = require('electron');
const isDev = require('electron-is-dev');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth:800,
    minHeight:600,
    titleBarStyle: 'hidden',
    alwaysOnTop: true,
    
    backgroundColor:  "#302B27",
    webPreferences: {
      nodeIntegration: true,
    },
  });
  win.webContents.toggleDevTools()

  win.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );

}
function toggleDevTools(){
}

function createShortcuts(){
  globalShortcut.register('J' , toggleDevTools())
}

app.whenReady()
.then(createWindow)
.then(createShortcuts)

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});