<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/theme">Theme</router-link> |
    <router-link to="/dashboard">Dashboard</router-link> |
    <router-link to="/shoppingcar">Shopping</router-link> |
    <router-link to="/profile">Profile</router-link> |
    <router-link to="/signin">Signin</router-link> |
    <router-link to="/signup">Signup</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
