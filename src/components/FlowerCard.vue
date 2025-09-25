<template>
  <div class="card h-100 shadow-sm">
    <!--Flower image-->
    <img :src="flower.image" class="card-img-top" :alt="flower.name" />

    <!--Flower name & meaning-->
    <div class="card-body">
      <h5 class="card-title mb-1">{{ flower.name }}</h5>
      <p class="card-text text-body-secondary mb-3">{{ flower.meaning }}</p>

      <!-- Flower badges for categories -->
      <div class="d-flex flex-wrap gap-2">
        <span v-if="flower.isSeasonal" class="badge badge-seasonal">Seasonal</span>
        <span v-else class="badge badge-all-year">All-Year</span>
        <span v-if="flower.isNative" class="badge badge-native">Native</span>
      </div>
    </div>

    <!--Button to toggle favorite-->
    <button class="btn btn-outline-primary" @click="toggleFavorite(flower.name)">
      <span v-if="isFavorite(flower.name)"><i class="bi bi-heart-fill"></i> Added to Favorites</span>
      <span v-else><i class="bi bi-heart"></i> Add to Favorites</span>
    </button>
  </div>
</template>

<script setup>
import { useFavoritesStore } from '../stores/favorites'

const props = defineProps({
  flower: Object
})

const favoritesStore = useFavoritesStore()

// Toggle favorite state of the flower when the button is clicked
const toggleFavorite = (flowerName) => {
  favoritesStore.toggleFavorite(flowerName)
}

// Check if a flower is favorited
const isFavorite = (flowerName) => favoritesStore.isFavorite(flowerName)
</script>

<style scoped></style>
