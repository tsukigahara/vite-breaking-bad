<script>
export default {
    props: {
        // got an Object from props
        info: Object
    }
}
</script>

<template>
    <!-- card -->
    <div class="card h-100 bg-light">
        <!-- card image -->
        <img :src="info.image" class="card-img-top" :alt="info.name">
        <!-- card body -->
        <div class="card-body">
            <!-- card title -->
            <h5 class="card-title">{{ info.name }}</h5>
        </div>
        <!-- card footers -->
        <div class="card-footer bg-light">
            <small class="text-muted">{{ info.status }}</small>
        </div>
        <div class="card-footer bg-light">
            <small class="text-muted">{{ info.species }}</small>
        </div>
        <div class="card-footer bg-light">
            <small class="text-muted">{{ info.gender }}</small>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>
