<script setup>
import { useThemeStore } from './stores/theme';
import SwitchThemeButton from './components/SwitchThemeButton.vue';
import { watch } from 'vue';
import { useTextSizeStore } from './stores/textSize';
import SwitchTextSizeButton from './components/SwitchTextSizeButton.vue';

//// Theme (dark vs light mode)

const themeStore = useThemeStore()

// Watch the theme state and update the respective style
watch(
    () => themeStore.isDarkMode,
    (isDarkMode) => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode')
        } else {
            document.body.classList.remove('dark-mode')
        }
    }
)

//// Text sizes (small, medium, large)

const textSizeStore = useTextSizeStore()

// Watch the textSize state and update the respective text size
watch(
  () => textSizeStore.textSize,
  (size) => {
    document.documentElement.classList.remove("text-small", "text-medium", "text-large");
    document.documentElement.classList.add(`text-${size}`);
  },
  { immediate: true }
);
</script>

<template>
    <div id="app">
        <Header />
        <router-view />
        <SwitchThemeButton />
        <SwitchTextSizeButton />
        <Footer />
    </div>
</template>


