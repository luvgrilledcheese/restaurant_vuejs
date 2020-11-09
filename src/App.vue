<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'app',
  components: {
    Navbar,
  },
};
</script>

<style scoped lang="scss">

</style>
