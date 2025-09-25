<template>
    <header>
        <nav class="navbar navbar-expand-lg fixed-top">
            <div class="container-fluid">
                <!--Brand name-->
                <router-link class="navbar-brand" to="/">Flora Inspiration</router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                    aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="bi bi-list fs-3"></i>
                </button>

                <!--Navigation links-->
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            <router-link class="nav-link" aria-current="page" to="/">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/about">About Us</router-link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Flower Catalogue
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <router-link class="dropdown-item" to="/all-flowers">All Flowers</router-link>
                                </li>
                                <li>
                                    <router-link class="dropdown-item" to="/seasonal-flowers">Seasonal
                                        Flowers</router-link>
                                </li>
                                <li>
                                    <router-link class="dropdown-item" to="/native-flowers">Native Flowers</router-link>
                                </li>
                                <li>
                                    <router-link class="dropdown-item" to="/flowers-by-occasion">Flowers by
                                        Occasion</router-link>
                                </li>
                                <li>
                                    <router-link class="dropdown-item" to="/favorites">Favourites ({{ favoritesStore.count }})</router-link>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/floral-designs">Floral Designs</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/gallery">Gallery</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/request">Make a Request</router-link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Help & Info
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <router-link class="dropdown-item" to="/faq">FAQ</router-link>
                                </li>
                                <li>
                                    <router-link class="dropdown-item" to="/flower-care-tips">Flower Care
                                        Tips</router-link>
                                </li>
                            </ul>
                        </li>

                        <li class="nav-item">
                            <router-link class="nav-link" to="/contact">Contact Us</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup>
import { useFavoritesStore } from '../stores/favorites';

// Get the favorites store
const favoritesStore = useFavoritesStore();

</script>
<style scoped>

</style>