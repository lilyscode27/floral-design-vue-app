<template>
    <main>
        <!--Heading-->
        <div class="container-fluid py-5 mt-5 bg-primary-subtle">
            <div class="row justify-content-center">
                <div class="col-lg-8 text-center">
                    <span class="text-muted">Curated Picks</span>
                    <h2 class="display-3 m-0">Flowers by Occasion</h2>
                    <p class="lead mb-0">
                        Find the perfect blooms tailored to each celebration.
                    </p>
                </div>
            </div>
        </div>

        <!--Flowers by Occasion-->
        <section v-for="(flowers, occasion) in flowerObjectsByOccasion" :key="occasion" class="mt-5 mb-3"
            :id="occasion">
            <div class="container">
                <div class="d-flex align-items-center justify-content-between mb-3">
                    <h3 class="display-6 m-0">{{ occasion }}</h3>
                </div>
                <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
                    <div class="col" v-for="flower in flowers" :key="flower.id">
                        <FlowerCard :flower="flower" />
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
import { computed } from 'vue'
import FlowerCard from '../components/FlowerCard.vue'
import flowersData from '../assets/data/flowers.json'

// List of flower names for each occasions
const flowerNamesByOccasion = {
    Wedding: ['Peony', 'Rose', 'Orchid', 'Calla Lily'],
    Birthday: ['Carnation', 'Gerbera', 'Sunflower', 'Zinnia'],
    Graduation: ['Dahlia', 'Sunflower', 'Gerbera', 'Tulip'],
    'Corporate Functions': ['Protea', 'Grevillea', 'Eucalyptus', 'Hydrangeas']
}

// List of flower's full details (flower objects) for each occasion
const flowerObjectsByOccasion = computed(() => {
    const result = {} 

    // Iterate over each occasion and its respective list of flower names
    for (const [occasion, flowerLists] of Object.entries(flowerNamesByOccasion)) {
        // Assign the respective flower object to its occasion
        result[occasion] = flowersData.filter(flower =>
            flowerLists.includes(flower.name)
        )
    }
    return result
})
</script>
