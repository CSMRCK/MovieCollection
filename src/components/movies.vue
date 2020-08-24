<template>
  <div class="hello">
    <div id="app">
      <div class="search">
        <div class="searchTitle">
          <p>
            Explore Movies
          </p>
          <p>
            & Series
          </p>
        </div>
        <div class="searchWindow">
          <b-form-input id="input-live" v-model="search" :state="searchState"
            aria-describedby="input-live-help input-live-feedback" 
            placeholder="Search..." class="searchInput" trim>
            
          </b-form-input>
        
          <button class="searchInputButton"><img src="../assets/search.png" alt="search"></button>
  
        </div>
        


      </div>
    </div>
    <div v-if=" fileterBySearch.length === 0">No search results</div>
    <div class="coordx">
        
      <div class="singleMoiveCard"
       v-for="movie in fileterBySearch" :key="movie.Title">
       
        <img class="movieImage" v-bind:src="movie.Poster" />
        <div class="movieInfo">
          <p class="movieName">{{movie.Title}}</p>
          <div class="moiveBlueBar">
            <p class="movieType">{{movie.Type}}</p>
            <p class="movieYear">{{movie.Year}}</p>
          </div>
        </div>
      </div>



    </div>
    <div class="pagination">
      <div>
        <p>Items per page:</p>
        <p>{{moviesPerPage}}</p>
      </div>

      <div class="centerDiv" v-for="page in pages" :key="page">
        <!-- {{page}}- {{pages}} -->
        {{some}} of {{all}}
      </div>

      <div v-for="page in pages" :key="page">
        <div @click="prevPage(page)">
          &#60;Prev</div>
        <div @click="nextPage(page)">
          Next&#62;</div>
      </div>
    </div>
    <!-- <a href="https://web.telegram.org/#/im" target="_blank" rel="noopener">
          dont mind... it`s just an link example</a>. -->
  </div>



</template>

<script>
  import axios from 'axios'

  export default {

    name: 'HelloWorld',
    data() {
      return {
        search:'',
        movies: [],
        moviesPerPage: 9,
        pageNumber: 1,

      };
    },
    mounted() {
      axios
        .get('http://www.omdbapi.com/?apikey=8b47da7b&s=People')
        .then(response => (this.movies = response.data.Search))
        .catch(error => console.log(error));
    },
    computed: {
      pages() {
        return Math.ceil(this.movies.length / 10);
      },
      // paginatedMovies() {
      //   let from = (this.pageNumber - 1) * this.moviesPerPage;
      //   let to = from + this.moviesPerPage;
      //   return this.movies.slice(from, to);
      // },
      some() {
        let from = this.pageNumber * this.moviesPerPage;
        return from / this.moviesPerPage;
      },
      all() {
        return this.movies.length;
      },
      fileterBySearch(){
        let from = (this.pageNumber - 1) * this.moviesPerPage;
        let to = from + this.moviesPerPage;
        let paginatedMovies = this.movies.slice(from, to);
        
        return paginatedMovies.filter((movie)=>{
          return (movie.Title.match(this.search)) 
          || (movie.Type.match(this.search)) 
          || (movie.Year.match(this.search))
          || (movie.Poster.match(this.search));
        })
      }
      
      
    },
    methods: {
      nextPage() {

        this.pageNumber++;

      },
      prevPage() {
        if (this.pageNumber != 1) {
          this.pageNumber--;
        }
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

  * {
    margin: 0;
  }
  .hello{
    margin-top: 45px;
  }
  .noResult{
    font-size: 20px;
    color: red;
    display: none;
  }

  .searchWindow{
    display: flex;
  }
  .searchInput {
    width: 700px;
    border: 1px solid #4999af;
    border-radius: 0;
    margin: 15px 0;
    height: 44px;
  }
  .searchInputButton{
    
    background-color: #4999af;
    width: 40px;
    height: 44px !important;
    height: 100%;
    margin: 15px 0;
    border: 0px;

  }

  .coordx {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }

  .search {
    display: flex;
    padding-bottom: 32px;
  }

  .searchTitle {
    font-family: 'Oswald', sans-serif;
    font-size: 28px;
    color: #4999af;
    line-height: 1.2;
    padding: 0 94px 0 5px;
  }

  .singleMoiveCard {
    max-width: 320px;
    margin: 10px 0;
    width: 100%;
    height: 200px;
    position: relative;
  }

  .movieImage {
    object-fit: cover;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .movieInfo {
    width: 100%;
    position: absolute;
    bottom: 0;
    right: 0;
    color: white;
  }

  .movieName {
    line-height: 1;
    margin: 0 24px 20px;
    font-family: 'Oswald', sans-serif;
    font-size: 30px;
    text-transform: uppercase;
    text-align: right;
  }

  .moiveBlueBar {
    font-family: 'Roboto', sans-serif;
    margin-left: 20%;
    font-size: 16px;
    max-height: 47px;
    padding: 13px 18px;
    right: 0;
    display: flex;
    justify-content: space-between;
    background-color: rgba(0, 127, 224, 0.81);
  }

  .pagination {
    display: flex;
    justify-content: flex-end;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    margin-top: 20px;
  }

  .pagination div {
    display: flex;
  }

  .centerDiv {
    margin: 0 35px 0 40px;
  }
</style>