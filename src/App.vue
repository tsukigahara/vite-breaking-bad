<script setup>
// import Component
import AppCardgroup from './components/AppCardgroup.vue'
import AppSearch from './components/AppSearch.vue'
import AppControls from './components/AppControls.vue'
// import state 
import { store } from './store.js'
//import axios library
import axios from 'axios'
</script>

<script>
export default {
  data() {
    return {
      store, // a cosa serve scriverlo qua???? 
      // index: 0 // test value
    };
  },
  methods: {

    // get data from api
    getCharaList() {
      // create query from AppSearch
      store.query = '?status=' + store.selectInput;

      console.log('selected: ', store.selectInput);
      console.log('query: ', store.query);
      //get API
      axios.get(store.apiURL + store.query) //get api url from store
        .then(function (response) {

          // info of API like chara number and next page url
          store.apiInfo = response.data.info;
          // data of characters
          store.charaList = response.data.results;

          console.log(response.data.info);
          console.log(response.data.results);
          // console.log(index) //come faccio a chiamarlo da data()???
        })
        .catch(function (error) {
          console.log(error);
        });
      // reset page counter
      store.pageCount = 1;
      console.log(store.apiURL + store.query);
    },


    //for page buttons
    pageChange(string) {

      if (string === 'next') {
        // set url
        var url = store.apiInfo.next;
        console.log(url);

        if (store.pageCount !== store.apiInfo.pages) {
          // increment page counter
          store.pageCount++;
        }
      }

      if (string === 'prev') {
        // set url
        var url = store.apiInfo.prev;
        console.log(url);

        if (store.pageCount != 1) {
          // decrement page counter
          store.pageCount--;
        }
      }

      // get data from API from "url"
      axios.get(url)
        .then(function (response) {
          store.apiInfo = response.data.info;
          store.charaList = response.data.results;
          console.log(response.data.info);
          console.log(response.data.results);
        })
        .catch(function (error) {
          console.log(error);
        });

      // scrool up when page changes
      window.scrollTo({
        top: 0,
        behavior: 'instant'
      });
    }
  },
  mounted() {
    //load on mount
    this.getCharaList();
  },
}
</script>

<template>
  <header class="container">
    <!-- title -->
    <h1 class="text-center mt-3">"Rick and Morty" character finder</h1>
    <!-- searchbar -->
    <AppSearch @filter="getCharaList" />
  </header>
  <main class="container p-4 mb-5">
    <!-- useful info (^_^) -->
    <h5>Found <span class="badge bg-primary">{{ store.apiInfo.count }}</span> characters</h5>
    <h6><span class="badge bg-warning">{{ store.pageCount }}</span> of <span class="badge bg-warning">{{
        store.apiInfo.pages
    }}</span> pages</h6>
    <!-- page controls -->
    <AppControls @next="pageChange('next')" @prev="pageChange('prev')" />
    <!-- card grid -->
    <AppCardgroup />
    <!-- page controls -->
    <AppControls @next="pageChange('next')" @prev="pageChange('prev')" />
  </main>
</template>

<style lang="scss" scoped>

</style>
