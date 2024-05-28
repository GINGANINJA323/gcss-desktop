import { SettingsType, GameSettingsType } from "../types";

class SaveManager {
    settings: SettingsType;
    gameSettings: GameSettingsType;

    constructor() {
        this.settings = {};
        this.gameSettings = {};

        this.init();
    }

    async init() {
        // First, check the settings exist
        const settingsExist = await this.checkSettings();

        console.log('Settings exist?', settingsExist);

        if (!settingsExist) {
            // Handle when settings aren't present
        } else {
            // Handle when they are - read them in...
        }
    }

    async checkSettings(): Promise<boolean> {
        // @ts-ignore
        return window.host.checkSettings();
    }
}

export default SaveManager;