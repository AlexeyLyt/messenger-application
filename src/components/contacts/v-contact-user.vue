<template>
    <div class="v-contact-user">
       div.user
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
    name: "v-contact-user",
    props: {
        contact_data: {
            type: Object,
            default: () => {}
        }
    },
    components: { },
    data() {
        return {}
    }
}
</script>

<style scoped lang="scss">

</style>