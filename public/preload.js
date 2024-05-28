const { contextBridge } = require('electron/renderer');
const { access, constants, readFile } = require('node:fs/promises');
const path = require('node:path');



contextBridge.exposeInMainWorld('host', {
    readSettings: async () => {
        try {
            const raw = await readFile(path.join(__dirname, 'settings.json'));
            const data = raw.toString();
            return JSON.parse(data);
        } catch (e) {
            throw new Error(e);
        }
    },
    writeSettings: async (file) => {

    }
});