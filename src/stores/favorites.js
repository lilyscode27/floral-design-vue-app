import { defineStore } from "pinia";

export const useFavoritesStore = defineStore("favorites", {
  state: () => ({
    favorites: [], // List of favorite flowers' names
  }),

  getters: {
    // Check if a flower is favorited
    isFavorite() {
      return (flowerName) => this.favorites.includes(flowerName);
    },

    count() {
      return this.favorites.length;
    }
  },

  actions: {
    toggleFavorite(flowerName) {
      // If the flower is already favorited, remove it from the list
      if (this.favorites.includes(flowerName)) {
        this.favorites = this.favorites.filter((f) => f != flowerName);
      } else {
        this.favorites.push(flowerName);
      }

      this.saveToLocalStorage(); // Save to local storage
    },

    // Load the favorite flowers list from local storage
    loadFromLocalStorage() {
      const stored = localStorage.getItem("favorites");

      if (stored) {
        this.favorites = JSON.parse(stored);
      }
    },

    // Save the favorite flowers list to local storage
    saveToLocalStorage() {
      localStorage.setItem("favorites", JSON.stringify(this.favorites));
    },
  },
});
