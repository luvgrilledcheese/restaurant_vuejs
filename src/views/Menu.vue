<template>
  <div class="home">
    <div class="container">
      <h1 class="title" style="margin-top:4%">
        Menu
      </h1>
      <div style="">
        <MenuDishes/>
      </div>
    </div>
  </div>
</template>

<script>
import MenuDishes from '../components/MenuDishes.vue';

export default {
  name: 'Menu',
  components: {
    MenuDishes,
  },
};
</script>

<style scoped>
.dishes {
  display: flex;
}
</style>
