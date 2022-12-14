<script setup>
// import Component AppCardgroup.vue 
import AppCardgroup from './components/AppCardgroup.vue'
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
    }
  },
  methods: {
    // get data from api
    getCharaList() {
      axios.get(store.apiURL) //get api url from store
        .then(function (response) {
          console.log(response.data.results);
          store.charaList = response.data.results;
          // console.log(index) //come faccio a chiamarlo da data()???
        })
        .catch(function (error) {
          console.log(error);
        })

    }
  },
  mounted() {
    //load on mount
    this.getCharaList();
  },
}
</script>

<template>
  <header></header>
  <main class="container">
    <AppCardgroup />
  </main>
</template>

<style lang="scss" scoped>

</style>
