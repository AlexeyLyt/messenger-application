<template>
    <div class="v-contact-user" @click="toContactInfo">
       <div class="user__avatar"></div>
       <div class="user_name">
           <span>{{ contact_data.name }}</span>
       </div>
       <div
            class="user__status"
            :class="className"
        ></div>
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
    computed: {
        className() {
            return {
                'online': this.contact_data.status === 'online',
                'offline': this.contact_data.status === 'offline'
            }
        }
    },
    methods: {
        toContactInfo() {
            this.$emit('to-contact-info')
        }
    },
    data() {
        return {}
    }
}
</script>

<style scoped lang="scss">

</style>