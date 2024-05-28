const { contextBridge } = require('electron/renderer');
const { access, constants } = require('node:fs/promises');
const path = require('node:path');



contextBridge.exposeInMainWorld('host', {
    readSettings: async () => {
    },
    writeSettings: async (file) => {

    },
    checkSettings: async () => {
        try {
            await access(path.join(__dirname, 'settings.json'), constants.R_OK | constants.W_OK)
            return true;
        } catch (e) {
            return false;
        }
    }
});