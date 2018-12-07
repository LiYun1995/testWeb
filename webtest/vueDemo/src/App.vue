<template>
  <div id="app">
    <keep-alive>
    <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted(){
    function checkIE(){
      return '-ms-scroll-limit' in document.documentElement.style && '-ms-ime-align' in document.documentElement.style
    }
    if (checkIE()) {
      window.addEventListener('hashchange', () => {
        var currentPath = window.location.hash.slice(1);
        if (this.$route.path !== currentPath) {
        this.$router.push(currentPath)
      }
    }, false)
    }
  }
}
</script>

<style>

*{
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
