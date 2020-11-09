<template>
  <div>
      <form @submit.prevent="onSubmit">
          <div class="field" style="margin-top:4%">
            <label class="label">Name</label>
            <div class="control">
              <input type="text" placeholder="Name of the food" v-model="name" class="input">
            </div>
          </div>
          <div class="field">
            <label class="label">Price</label>
            <div class="control">
              <input type="text" placeholder="Name of the food" v-model="price" class="input">
            </div>
          </div>
          <div class="control">
            <input type="submit" value="New dish" class="button is-dark">
          </div>
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
    onSubmit() {
      this.addDish({
        name: this.name,
        price: this.price,
      });
    },
  },
};
</script>

<style scoped>
label {
  color: #1B1725;
  font-weight: normal;
}
</style>
