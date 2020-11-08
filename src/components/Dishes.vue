<template>
  <div class="dishes">
    <div
      v-for="dish in allDishes"
      :key="dish.id"
      class="box"
      style="margin-right:2%;"
    >
      <article class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <img
              src="https://bulma.io/images/placeholders/128x128.png"
              alt="Image"
            />
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>{{ dish.name }}</strong>
              <br />
              {{ dish.price }}$
            </p>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Dishes',
  methods: {
    // ...mapActions(['fetchDishes', 'deleteDish', 'updateDish']),
    ...mapActions(['fetchDishes']),
  },
  computed: mapGetters(['allDishes']),
  created() {
    this.fetchDishes();
  },
};
</script>

<style scoped>

</style>
