<template>
  <div class='home'>
    <div class='container'>
      <h1 class='title'>Admin Dashboard</h1>
      <div class='columns'>
        <div class='column'>
            <h1 class="title is-5"> Menu:</h1>
            <Dishes />
        </div>
        <div class='column'>
            <h1 class="title is-5">
                Add food:
                <AddDish />
            </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Dishes from '../components/Dishes.vue';
import AddDish from '../components/AddDish.vue';

export default {
  name: 'Admin',
  components: {
    Dishes,
    AddDish,
  },
};
</script>

<style scoped>
h1 {
  margin-top: 4%;
}
.dishes {
  display: block;
}
</style>
