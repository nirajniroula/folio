<template>
  <v-app class="main-container">
    <TopNavBar />

    <!-- Sizes your content based upon application components -->
    <v-main class="">
      <!-- Provides the application the proper gutter -->
      <!-- If using vue-router -->
      <router-view v-slot="{ Component }">
        <transition name="slide-fade" mode="out-in">
          <component :is="Component" :key="$route.path" />
        </transition>
      </router-view>
    </v-main>

    <v-footer app>
      <Footer />
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
  import TopNavBar from './components/TopNavBar.vue'
  import Footer from './components/Footer.vue'
</script>

<style scoped lang="scss">
  .main-container {
    background: black;
    height: 100vh;
  }
  .container {
    background: black;
  }
  .slide-fade-enter-active {
    transition: all 0.3s ease-out;
  }

  .slide-fade-leave-active {
    transition: all 0.6s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
  }
</style>
