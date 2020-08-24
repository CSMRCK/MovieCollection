<template>
  <div id="app">
    <footer class="footerMovieMain">
      <div class="row">
        <div class="col-6 col-md-4">
          <div class="footerTitle">SIGNUP TO OUR NEWSLETTER</div>
          <button class="SubscribeButton">Subscribe</button>
        </div>
        <div class="col-6 col-md-4">
          <div class="footerTitle">SERVICE TIMES</div>
            <div class="TimeInfo">
              <p>Sundays at 9:30 & 11:30 AM</p>
              <label>Lorem ipsum dolor sit amet</label>
          </div>
        </div>

        <div class="col-6 col-md-4 lastFooterCol">
          <div class="wrappFooter">
            <div class="footerTitle">CONNECT WITH US</div>
              <div class="socialMedia">
                <a href="https://web.telegram.org/#/im" target="_blank" rel="noopener"><img alt="facebook logo" src="../assets/facebook.png" class="socialIcon"/></a>
                <a href="https://web.telegram.org/#/im" target="_blank" rel="noopener"><img alt="twitter logo" src="../assets/twitter.png" class="socialIcon"/></a>
                <a href="https://web.telegram.org/#/im" target="_blank" rel="noopener"><img alt="youtube logo" src="../assets/youtube.png" class="socialIcon"/></a>
                <a href="https://web.telegram.org/#/im" target="_blank" rel="noopener"><img alt="paypal logo" src="../assets/paypal.png" class="socialIcon"/></a>
                <a href="https://web.telegram.org/#/im" target="_blank" rel="noopener"><img alt="email logo" src="../assets/email.png" class="socialIcon"/></a>
              </div>
            </div>
          </div>  
      </div>

      <hr/>

      <label class="footerAfter">© Copyright 2017 SevenOaks. All rights reserved.  Privacy Policy  |  Share This</label>

    </footer>
  </div>
</template>

<script>
  export default {

    name: 'footerV',
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
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  .row{
    margin: 0;
  }
  .col-6{
    padding: 0;
  }
  .lastFooterCol{
    display: flex;
    padding-right: 30px;
    justify-content: flex-end;
  }
  .footerMovieMain {
    font-family: 'Roboto', sans-serif;
    /* max-height: 215px; */
    height: 100%;
    width: 100%;
    padding-top: 33px;
  }
  .footerTitle{
    text-transform: uppercase;
    font-size: 20px;
    color: white;
  }
  .SubscribeButton{
    text-transform: uppercase;
    font-size: 18px;
    color: white;
    text-decoration: none;
    border: 3px solid #4999af;
    background-color: #4999af;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 275px;
    width: 100%;
    height: 37px;
    margin: 27px 0 0 2px;
  }
  .TimeInfo{
    padding-top: 35px;
  }
  .TimeInfo p{
    font-size: 20px;
    color: white;
    margin-bottom: -10px;
  }
  .footerMovieMain label{
    font-size: 12px;
    color: #9c9c9c;
  }
  .socialIcon{
    width: 32px;
    height: 32px;
  }
  .socialMedia{
    padding-top: 36px;
    display: flex;
    width: 192px;
    justify-content: space-between;
  }
  .footerMovieMain hr{
    background-color: #6b6b6a;
    height: 1px;
    margin:32px 0 18px;
  }
  .footerAfter{
    margin-bottom: 18px;
  }
  
</style>