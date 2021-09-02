<template>
  <div class="container is-max-desktop">
    <NavBar />
    <div class="view-container">
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  components: {
    NavBar,
  },
};
</script>

<style>
@import './styles/index.css';
</style>
