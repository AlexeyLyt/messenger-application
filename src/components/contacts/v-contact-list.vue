<template>
    <div class="v-contact-list">
        <v-contact-user />
    </div>
</template>

<script>
import vContactUser from "./v-contact-user"

export default {
    name: "v-contact-list",
    props: {},
    components: { vContactUser },
    data() {
        return {}
    },
    computed: {}
}
</script>

<style scoped lang="scss">

</style>