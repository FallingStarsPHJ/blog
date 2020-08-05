<template>
  <div id="app">
    <navigation-bar></navigation-bar>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import NavigationBar from "./components/NavigationBar";
export default {
  name: 'App',
  components: {
    NavigationBar
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
}
</style>
