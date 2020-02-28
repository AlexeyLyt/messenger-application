<template>
    <div class="v-main-wrapper">
        <v-header />
        <router-view></router-view>
        <v-bottom-nav />
    </div>
</template>

<script>
import vHeader from './layout/v-header'
import vBottomNav from './layout/v-bottom-nav'

export default {
    name: "v-main-wrapper",
    components: { vHeader, vBottomNav },
    props: {},
    data() {
        return {

        }
    },
    computed: {}
}
</script>

<style lang="scss">

</style>