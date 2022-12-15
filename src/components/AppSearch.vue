<script setup>
//import state
import { store } from '../store.js'
</script>

<script>
export default {
    emits: [
        'filter'
    ]

}
</script>

<template>
    <div class="input-group my-4">
        <!--filter select -->
        <label class="input-group-text" for="inputGroupSelect01">Filter</label>
        <select class="form-select" id="inputGroupSelect01" v-model="store.selectInput" @change="$emit('filter')">
            <option value="">Choose...</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
        </select>
        <!-- search input -->
        <input type="text" class="form-control" disabled>
        <button type="button" class="btn btn-outline-secondary" @click="$emit('filter')">Search</button>
    </div>
</template>

<style lang="scss" scoped>

</style>
