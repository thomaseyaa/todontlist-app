<template>
  <div id="nav">
    <div v-if="user.token">
      <router-link to="/me">Profile 🧑‍🦱</router-link> |
      <router-link to="/tasks">Tasks 📝</router-link> |
      <a href="/login" @click.prevent="logout">Logout 👋</a>
    </div>

    <div v-if="!user.token">
      <router-link to="/login">Login</router-link> |
      <router-link to="/register">Register</router-link>
    </div>
  </div>
  <router-view/>
</template>

<script>
import { mapActions, mapGetters } from "vuex"

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters([
      'user'
    ])
  },
  methods: {
    ...mapActions([
      'logout'
    ])
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #d9534f;
}
</style>
