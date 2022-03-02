/**
 * Docs: https://www.electronjs.org/docs/latest/tutorial/quick-start#opening-your-web-page-in-a-browser-window
 */

const { app, BrowserWindow, ipcMain, nativeTheme } = require('electron')
const path = require('path')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('src/ThemeSwitch/index.html')

  ipcMain.handle('dark-mode:toggle', () => {
    if (nativeTheme.shouldUseDarkColors) {
      nativeTheme.themeSource = 'light'
    } else {
      nativeTheme.themeSource = 'dark'
    }
    return nativeTheme.shouldUseDarkColors
  })

  ipcMain.handle('dark-mode:system', () => {
    nativeTheme.themeSource = 'system'
  })
}

/**
 * Docs: https://www.electronjs.org/docs/latest/tutorial/quick-start#open-a-window-if-none-are-open-macos
 */
 app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

/**
 * Docs: https://www.electronjs.org/docs/latest/tutorial/quick-start#quit-the-app-when-all-windows-are-closed-windows--linux
 */
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
