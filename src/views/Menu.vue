<template>
  <div class="home">
    <div class="container">
      <h1 class="title" style="margin-top:4%">
        Menu
      </h1>
      <div style="display: flex;">
        <Dishes v-bind:style="'color: ' + 'blue' + ' !important'"/>
      </div>
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
.dishes {
  display: flex;
}
</style>
