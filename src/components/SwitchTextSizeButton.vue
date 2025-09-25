<template>
    <!--Button to switch text size-->
    <button class="btn btn-primary switch-text-size-btn" @click="switchTextSize">
        <i class="bi bi-zoom-in fs-4"></i>
    </button>
</template>

<script setup>
import { useTextSizeStore } from '../stores/textSize';

// Get the textSize store
const textSizeStore = useTextSizeStore()

// Switch text size from small -> medium -> large
const switchTextSize = () => {
    const sizes = ['small', 'medium', 'large']

    const currentSize = sizes.indexOf(textSizeStore.textSize) // Get the current size
    const nextSize = (currentSize + 1) % sizes.length // Get the next size

    textSizeStore.switchTextSize(sizes[nextSize])
}

</script>

<style scoped>
.switch-text-size-btn {
    position: fixed;
    bottom: 20px;
    right: 80px;
    z-index: 1000;
}
</style>