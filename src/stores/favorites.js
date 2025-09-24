import { defineStore } from 'pinia'

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    favorites: [] // store flower IDs or names
  }),

  getters: {
    isFavorite: (state) => {
      return (flowerName) => state.favorites.includes(flowerName)
    },
    favoriteFlowers: (state) => {
      return state.favorites
    }
  },

  actions: {
    toggleFavorite(flowerName) {
      if (this.favorites.includes(flowerName)) {
        this.favorites = this.favorites.filter(f => f !== flowerName)
      } else {
        this.favorites.push(flowerName)
      }
      this.saveToLocalStorage()
    },

    loadFromLocalStorage() {
      const stored = localStorage.getItem('favorites')
      if (stored) {
        this.favorites = JSON.parse(stored)
      }
    },

    saveToLocalStorage() {
      localStorage.setItem('favorites', JSON.stringify(this.favorites))
    }
  }
})
