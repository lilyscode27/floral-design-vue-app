<template>
  <main class="py-5 mt-5">
    <div class="container">
      <h2 class="display-3 mb-4">My Favorites ({{ favoritesStore.count }})</h2>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
        <div v-for="flower in favoriteFlowers" :key="flower.name" class="col">
          <FlowerCard :flower="flower" />
        </div>
      </div>
      <div v-if="favoritesStore.count === 0">
        <p class="text-muted">
          No favorites yet - add some from the collection!
        </p>
        <router-link class="btn btn-lg btn-primary" to="/all-flowers">Browse All Flowers</router-link>
      </div>


    </div>
  </main>
</template>

<script setup>
import FlowerCard from '../components/FlowerCard.vue'
import { useFavoritesStore } from '../stores/favorites'
import flowersData from '../assets/data/flowers.json'
import { computed } from 'vue'

const favoritesStore = useFavoritesStore()

// Get favorite flowers data
const favoriteFlowers = computed(() =>
  flowersData.filter(flower =>
    favoritesStore.favorites.includes(flower.name)
  )
)
</script>
