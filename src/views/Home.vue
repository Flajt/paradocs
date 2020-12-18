<template>
  <div class="home">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/impressum">Impressum</router-link>
    </div>
    <HomeDisplay />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeDisplay from "../components/HomeDisplay.vue";
export default {
  name: "Home",
  components: {
    HomeDisplay,
  },
};
</script>
<style scoped>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: black;
}
</style>