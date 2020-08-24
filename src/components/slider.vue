
<template>
  <!-- <div class="hello">
    <div id="app">
        <div class="slider">
            <div class="buttons">
              <button><img src="../assets/bannerarrow.png" alt=""></button>
              <button><img src="../assets/bannerarrowr.png" alt=""></button>
            </div>
            <div class="containerMy">
                <div class="bannerBox">
                  <p> <b>Welcome to MovieCollection website </b> which is run by the friends of MovieCollection.</p>
                </div>
            </div>
            
        </div>
  </div>
  </div> -->
  <div class="myCarousel">
    <b-carousel id="carousel-1" v-model="slide" :interval="4000" controls  background="#ababab"
      img-width="1024" img-height="480" style="text-shadow: 1px 1px 2px #333;" class="myCarousel">
      <div class="buttons">
        <button controls label-prev><img src="../assets/bannerarrow.png" alt=""></button>
        <button label-next><img src="../assets/bannerarrowr.png" alt=""></button>
      </div>

     
        <div class="containerMy">
                <div class="bannerBox">
                  <p> <b>Welcome to MovieCollection website </b> which is run by the friends of MovieCollection.</p>
                </div>
            </div>
      

      <b-carousel-slide>
        <template v-slot:img>
          <img class="d-block img-fluid w-100" width="1024" height="480" src="../assets/banner.png" alt="image slot">
        </template>


      </b-carousel-slide>

      <b-carousel-slide>
        <template v-slot:img>
          <img class="d-block img-fluid w-100" width="1024" height="480" src="../assets/bannersecond.png"
            alt="image slot">
        </template>
      </b-carousel-slide>

      <b-carousel-slide>
        <template v-slot:img>
          <img class="d-block img-fluid w-100" width="1024" height="480" src="../assets/banner.png" alt="image slot">
        </template>
      </b-carousel-slide>

      <b-carousel-slide>
        <template v-slot:img>
          <img class="d-block img-fluid w-100" width="1024" height="480" src="../assets/bannersecond.png"
            alt="image slot">
        </template>
      </b-carousel-slide>

    </b-carousel>

    <!-- <p class="mt-4">
      Slide #: {{ slide }}<br>
      Sliding: {{ sliding }}
    </p> -->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        // slide: 0,
        // sliding: null
      }
    },
    methods: {
      // onSlideStart(slide) {
      //   this.sliding = true
      // },
      // onSlideEnd(slide) {
      //   this.sliding = false
      // }
    }
  }
</script>
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@100&display=swap');
 

  .myCarousel{
    position: relative;
  }
  
  .bannerBox {
    position: absolute;
    z-index: 1;
    text-shadow: none !important;
    padding: 25px 0px 23px 28px;
    margin-top: 24%;
    max-width: 459px;
    height: 157px;
    width: 100%;
    background-color: rgba(52, 151, 178, 0.8);
  }

  .bannerBox p {
    font-family: 'Oswald', sans-serif;
    font-size: 34px !important;
    color: white;
    line-height: 1;
    word-wrap: break-word;
  }
  .carousel-control-next{
    display: none;
  }
  .carousel-control-next-icon {
    display: none;
  }
  .buttons {
    position: absolute;
    z-index: 1;
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding-top: 222px;
  }

  .buttons button {
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 49px;
    height: 90px;
    background-color: #565756;
    border: 0;
  }
</style>