<template>
  <div id="app">

    <div class="containerMy">
      <div class="headerApp">
        <headerV />
      </div>
    </div>
    <slider/>
    <!-- <div class="containerMy">
        <headerV />
    </div> -->
    <div class="containerMy">
      <movies />
    </div>
    <div class="footer_new">
      <div class="containerMy">
        <footerV />
      </div>
    </div>

  </div>
</template>

<script>
  import movies from './components/movies.vue'
  import footerV from './components/footerV.vue'
  import headerV from './components/headerV.vue'
  import slider from './components/slider.vue'

  export default {
    name: 'App',
    components: {
      movies,
      footerV,
      headerV,
      slider
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  .headerApp{
    position: absolute;
    z-index: 999;
    width: 100%;
    margin: 0 auto;
    
  }
  .containerMy {
    width: 100%;
    max-width: 1002px;
    margin: 0 auto;
  }

  .footer_new {
    width: 100%;
    background-color: #525252;
    margin-top: 35px;
  }
</style>