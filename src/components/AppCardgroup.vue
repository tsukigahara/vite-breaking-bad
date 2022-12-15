<script setup>
//import state
import { store } from '../store.js'
// import component
import AppCard from './AppCard.vue'

</script>

<script>
export default {

}
</script>

<template>
    <!-- cardgroup wrapper -->
    <div class="row row-cols-2 row-cols-md-4 row-cols-lg-5 g-4">
        <!-- vfor to generate cards -->
        <!-- store.charaList is an Array -->
        <div class="col" v-for="(obj, index) in store.charaList" :key="index">
            <!-- props obj to AppCard-->
            <AppCard :info="obj" />
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>
