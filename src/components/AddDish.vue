<template>
  <div>
      <form @submit.prevent="onSubmit">
          <div class="field" style="margin-top:4%">
            <label class="label" for="name">Name</label>
            <div class="control">
              <input type="text"
              id="name"
              placeholder="Name of the food"
              v-model="name"
              class="input">
            </div>
          </div>
          <div class="field">
            <label class="label">Price</label>
            <div class="control">
              <input type="text" placeholder="Name of the food" v-model="price" class="input">
            </div>
          </div>
          <div class="control">
            <input type="submit" value="New dish" class="button">
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
  color: #363636;
  font-weight: normal;
}
.button {
  color: #f2f6fa;
  background-color: #23A0A9;
  border: none;
}

.button:hover {
  color: white;
  background-color: #2AC0CB;
}
</style>
