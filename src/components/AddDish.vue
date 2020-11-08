<template>
  <div>
      <form @submit="onSubmit">
          <input type="text" placeholder="Name of the food">
          <input type="text" placeholder="Price of the food">
          <input type="submit" value="Submit">
      </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AddDish',
  data() {
    return {
      name: '',
      price: '',
    };
  },
  methods: {
    ...mapActions(['addDish']),
    onSubmit(e) {
      e.preventDefault();
      this.addDish(this.name, this.price);
    },
  },
};
</script>

<style>

</style>
