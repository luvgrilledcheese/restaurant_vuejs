<template>
  <div class="dishes">
    <div
      class="card"
      v-for="dish in allDishes"
      :key="dish.id"
      style="margin-right: 2%"
    >
      <div class="card-image">
        <figure class="image is-4by3">
          <img
            src="https://bulma.io/images/placeholders/1280x960.png"
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <p class="title is-4">{{ dish.name }}</p>
          </div>
          <div class="media-right" style="float: right">
            <p class="title is-4">{{ dish.price }}$</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'MenuDishes',
  methods: {
    ...mapActions(['fetchDishes', 'deleteDish', 'updateDish']),
    editNameDish() {},
  },
  computed: mapGetters(['allDishes']),
  created() {
    this.fetchDishes();
  },
  mounted() {
    console.log('App this router:', this.$router);
    console.log('App currentRoute:', this.$router.currentRoute.name);
  },
};
</script>

<style scoped>
</style>
