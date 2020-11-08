<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item link">Home</router-link>
        <router-link to="/Menu" class="navbar-item link">Menu</router-link>
        <router-link to="/About" class="navbar-item link">About</router-link>
      </div>
      <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <router-link to="/Admin" class="button is-primary"><strong>Admin</strong></router-link>
        </div>
      </div>
    </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
nav {
  background-color: beige;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.03), 0 6px 20px 0 rgba(0, 0, 0, 0.03);
  color: black;
}

a {
  color: black;
}
</style>
