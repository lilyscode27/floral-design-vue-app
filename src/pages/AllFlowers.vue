<template>
    <main>
        <section id="all-flowers" class="py-5 mt-5">
            <div class="container">
                <div class="row justify-content-between align-items-end mb-4">

                    <!--Section heading-->
                    <div class="col-lg-8">
                        <span class="text-muted">Our Collection</span>
                        <h2 class="display-3 m-0">All Flowers</h2>
                        <p class="lead mb-0">
                            Browse our curated selection of blooms with their symbolic
                            meanings.
                        </p>
                    </div>

                    <!--Search bar-->
                    <div class="col-lg-4 mt-3 mt-lg-0">
                        <div class="input-group search-suggestions">
                            <input v-model="userInput" type="search" class="form-control focus-ring"
                                placeholder="Search flowers…" aria-label="Search flowers"
                                @focus="showSuggestions = true" />
                            <!--Suggestions-->
                            <ul v-if="userInput && showSuggestions"
                                class="list-group position-absolute top-100 w-100 z-3">
                                <li v-for="flower in filteredFlowers.slice(0, 5)" :key="flower.id"
                                    class="list-group-item list-group-item-action"
                                    @click="selectSuggestion(flower.name)">
                                    {{ flower.name }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!--Flower list-->
                <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
                    <div class="col" v-for="flower in filteredFlowers" :key="flower.id">
                        <FlowerCard :flower="flower" />
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from "vue"
import FlowerCard from "../components/FlowerCard.vue"

const flowers = ref([]) // List of flowers to render
const userInput = ref("") // User's input for flower name
const showSuggestions = ref(false) // Control of the display of the search suggestions

// Load all flowers asynchronously from flowers.json
onMounted(async () => {
    const response = await fetch("/flowers.json")
    flowers.value = await response.json()
    document.addEventListener("click", handleClickOutside) // Listen for click event
})

onBeforeUnmount(() => {
    document.removeEventListener("click", handleClickOutside)
})

// Filter flowers based on user's input
const filteredFlowers = computed(() => {
    if (!userInput.value) return flowers.value

    return flowers.value.filter((f) =>
        f.name.toLowerCase().includes(userInput.value.toLowerCase())
    )
})

// When the user selects a flower name from the suggestions list, display that flower card
function selectSuggestion(flowerName) {
    userInput.value = flowerName
    showSuggestions.value = false // Close the search suggestions
}

// Close the search suggestions when the user clicks outside of it
function handleClickOutside(event) {
    const suggestionsDropdown = document.querySelector(".search-suggestions")

    if (!suggestionsDropdown.contains(event.target)) {
        showSuggestions.value = false
    }
}
</script>
