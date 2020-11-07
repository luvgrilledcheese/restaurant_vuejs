<template>
  <div class="home">
    <div class="container">
      <h1 class="title">
        Restaurant Menu
      </h1>
      <Dishes/>
    </div>
  </div>
</template>

<script>
import Dishes from '../components/Dishes.vue';

export default {
  name: 'Menu',
  components: {
    Dishes,
  },
};
</script>

<style scoped>
  h1 {
    margin-top: 4%;
  }
</style>
