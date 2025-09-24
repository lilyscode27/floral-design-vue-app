import { defineStore } from "pinia";

export const useThemeStore = defineStore('theme', {
    state: () => ({
        isDarkMode: false,
    }),
    actions: {
        // Switch between light and dark modes
        switchTheme() {
            this.isDarkMode = !this.isDarkMode;
        }
    }
})