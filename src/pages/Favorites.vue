<template>
  <main class="py-5 mt-5">
    <div class="container">
      <h2 class="display-3 mb-4">My Favorites</h2>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
        <div v-for="flower in favoriteFlowers" :key="flower.name" class="col">
          <FlowerCard :flower="flower" />
        </div>
      </div>
      <p v-if="favoriteFlowers.length === 0" class="text-muted">
        No favorites yet - add some from the collection!
      </p>
    </div>
  </main>
</template>

<script setup>
import FlowerCard from '../components/FlowerCard.vue'
import { useFavoritesStore } from '../stores/favorites'
import flowersData from '../assets/data/flowers.json'
import { computed } from 'vue'

const favoritesStore = useFavoritesStore()

// computed list of full flower objects
const favoriteFlowers = computed(() =>
  flowersData.filter(flower =>
    favoritesStore.favorites.includes(flower.name)
  )
)
</script>
