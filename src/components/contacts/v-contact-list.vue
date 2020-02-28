<template>
    <div class="v-contact-list">
        <v-contact-user
            v-for="contact in contacts"
            :key="contact.id"
            :contact_data="contact"
        />
    </div>
</template>

<script>
import vContactUser from "./v-contact-user"
import { mapActions, mapState } from 'vuex'

export default {
    name: "v-contact-list",
    props: {},
    components: { vContactUser },
    data() {
        return {}
    },
    methods: {
        ...mapActions([
            'FETCH_CONTACTS'
        ])
    },
    computed: {
        ...mapState([
            'contacts'
        ])
    },
    mounted() {
        this.FETCH_CONTACTS()
    }
}
</script>

<style scoped lang="scss">

</style>