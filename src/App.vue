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
      if (store.selectInput !== '') {
        console.log('selected: ', store.selectInput);

        store.query = '?status=' + store.selectInput;

        console.log('query: ', store.query);
      }
      axios.get(store.apiURL + store.query) //get api url from store
        .then(function (response) {
          store.apiInfo = response.data.info;
          store.charaList = response.data.results;
          console.log(response.data.info);
          console.log(response.data.results);
          // console.log(index) //come faccio a chiamarlo da data()???
        })
        .catch(function (error) {
          console.log(error);
        });

      console.log(store.apiURL + store.query);
    },
    pageChange(string) {

      if (string === 'next') {
        var url = store.apiInfo.next;
        console.log(url);
      }

      if (string === 'prev') {
        var url = store.apiInfo.prev;
        console.log(url);
      }

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
  components: { AppSearch }
}
</script>

<template>
  <header class="container">
    <h1 class="text-center mt-3">"Rick and Morty" character finder</h1>
    <AppSearch @filter="getCharaList" />
  </header>
  <main class="container">
    <h5>Found <span class="badge bg-primary">{{ store.apiInfo.count }}</span> characters</h5>
    <h6><span class="badge bg-warning">{{ store.apiInfo.pages }}</span> pages</h6>
    <AppControls @next="pageChange('next')" @prev="pageChange('prev')" />
    <AppCardgroup />
    <AppControls @next="pageChange('next')" @prev="pageChange('prev')" />
  </main>
</template>

<style lang="scss" scoped>

</style>
