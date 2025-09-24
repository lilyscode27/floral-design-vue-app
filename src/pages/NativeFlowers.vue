<template>
    <main>
        <!--Native Flowers-->
        <section id="native-flowers" class="py-5 mt-5">
            <div class="container">
                <div class="row justify-content-between align-items-end mb-4">
                    <!--Section heading-->
                    <div class="col-lg-8">
                        <span class="text-muted">Our Collection</span>
                        <h2 class="display-3 m-0">Native Flowers</h2>
                        <p class="lead mb-0">
                            Browse our curated selection of blooms with their symbolic
                            meanings.
                        </p>
                    </div>
                    <!--Search bar-->
                    <div class="col-lg-4 mt-3 mt-lg-0">
                        <div class="input-group">
                            <input type="search" class="form-control focus-ring" placeholder="Search flowers…"
                                aria-label="Search flowers">
                            <button class="btn btn-primary" type="button">Search</button>
                        </div>
                    </div>
                </div>

                <!--Flower list-->
                <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
                    <div class="col" v-for="flower in nativeFlowers" :key="flower.id">
                        <FlowerCard :flower="flower" />
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
<script setup>
import { ref, computed, onMounted } from 'vue'
import FlowerCard from '../components/FlowerCard.vue'
import flowersData from '../assets/data/flowers.json'

// state
const flowers = ref([])
const searchQuery = ref("")

// load data
onMounted(() => {
  flowers.value = flowersData
})

// computed: filter for native flowers + search
const nativeFlowers = computed(() => {
  return flowers.value.filter(flower => {
    const matchesNative = flower.isNative
    const matchesSearch =
      flower.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    return matchesNative && matchesSearch
  })
})
</script>