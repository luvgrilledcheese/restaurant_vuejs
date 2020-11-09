<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-menu is-transparent">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item link noHover">Home</router-link>
        <router-link to="/Menu" class="navbar-item noHover">Menu</router-link>
        <router-link to="/About" class="navbar-item noHover">About</router-link>
      </div>
      <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <router-link to="/Admin" class="button"><strong>Admin</strong></router-link>
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
  background-color: #EE6C4D;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.03), 0 6px 20px 0 rgba(0, 0, 0, 0.03);
}

.button {
  color: #1B1725;
  background-color: #EDE6E3;
  border: none;
}

.navbar-item:hover{
  color: #EDE6E3;
  background-color: #EE6644;
}
a {
  color: #EDE6E3;
  font-size: 1.1em;
}
</style>
