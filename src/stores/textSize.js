import { defineStore } from "pinia"

export const useTextSizeStore = defineStore("textSize", {
  state: () => ({
    textSize: "medium", // Default text size is medium
  }),
  actions: {
    // Switch between small, medium, and large text sizes
    switchTextSize(size) {
        this.textSize = size
        console.log(this.textSize)
    }
  }
});
