<template>
  <div id="app">
    <header class="mainHeader">
        <div class="headerBody">
            <img class="HeaderLogo" src="../assets/logo.png"/>
            <div class="headerNav">
                <a href="#">about</a>
                <a href="#">media</a>
                <a href="#">events</a>
                <a href="#">shop</a>
                <a href="#">give</a>
            </div>
        </div>
    </header>
  </div>
</template>

<script>
export default {
    name: 'headerV',
    components: {},
    props: [],
    data() {
      return {

      }
    },
    computed: {

    },
    mounted() {

    }, 
    methods: {

    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap');
    .mainHeader{
        background-color: white;
        width: 1002px;
    }
    .headerBody{
        display: flex;
        justify-content: space-between;
        padding: 27px 30px 33px 18px;
    }
    .headerNav{
        display: flex;
        max-width: 443px;
        width: 100%;
        justify-content: space-between;
        align-items:center;
    }
    .headerNav a{
        font-size: 15px;
        font-family: 'Oswald', sans-serif;
        text-transform: uppercase;
        text-decoration: none;
        color: #668333;
    }
    .headerNav a:hover{
        transition: color .2s;
        color: #4999af;
    }
    .headerNav a:active{
        color: #4999af;
    }
</style>