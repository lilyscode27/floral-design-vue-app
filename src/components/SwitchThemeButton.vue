<template>
    <!--Button to switch theme-->
    <button class="btn btn-primary switch-theme-btn" @click="switchTheme">
        <i :class="themeStore.isDarkMode ? 'bi bi-sun fs-4' : 'bi bi-moon fs-4'"></i>
    </button>
</template>

<script setup>
import { useThemeStore } from '../stores/theme'

// Get the theme store
const themeStore = useThemeStore()

// Switch theme
const switchTheme = () => {
    themeStore.switchTheme()
}
</script>

<style scoped>
.switch-theme-btn {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000;
}
</style>
