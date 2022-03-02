# Raw ElectronJS Playground

<p align="center">
  <img src="./assets/electron-logo.png" width="150" />
</p>

## Project goal

- Project developed to understand concepts and play with electronJS technology.

## What it does?

- It allows you to switch between dark, light and system themes;
- Navigates between home and about pages.

## What Electron concepts it practices?

- The different responsabilities that `main.js`, `preload.js` and `renderer.js` has:
  - `main.js` (Main process): 
    - Is the application main process;
    - Responsible to be the application entry point;
    - Handle [application lifecycle](https://www.electronjs.org/docs/latest/tutorial/process-model#application-lifecycle);
    - Able to extend APIs that interact with user's OS;
    - [Docs link](https://www.electronjs.org/docs/latest/tutorial/process-model#the-main-process).
  - `renderer.js` (Renderer process):
    - It is a different process. Can not access the main process;
    - Has no direct access to any NPM/Native module;
    - The main responsability is to render web content;
    - Usually is used to manipulate user interface;
    - [Docs link](https://www.electronjs.org/docs/latest/tutorial/process-model#the-renderer-process).
  - `preload.js`:
    - Executed before web content begins loading;
    - Has privileges to access Node and Electron APIs;
    - Can expose APIs so `renderer.js` can interact with the main process. Exposes using `contextBridge` and `ipcRenderer` from electron.
    - [Docs link](https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts).

- Context isolation:
  - Uses `contextBridge` and `ipcRenderer` to allow web content (renderer process) switch between system, dark and light themes.
  - The main motivation for this context isolation concept is to prevent web contents accessing the Electron internal APIs. 
  - [Docs link](https://www.electronjs.org/docs/latest/tutorial/context-isolation).

- IPC - Inter-Process Communication:
  - TODO:
  - [Docs link](https://www.electronjs.org/docs/latest/tutorial/ipc)

## Run locally

```shell
yarn 
yarn start
```