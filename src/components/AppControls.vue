<script setup>
//import state
import { store } from '../store.js'
</script>

<script>
export default {

}
</script>

<template>
    <div class="text-end my-2">
        <button type="button" class="btn btn-primary mx-2" @click="$emit('prev')">Prev page</button>
        <button type="button" class="btn btn-primary" @click="$emit('next')">Next page</button>
    </div>
</template>

<style lang="scss" scoped>

</style>
