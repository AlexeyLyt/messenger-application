<template>
    <div class="v-users-list">
        <v-user
            v-for="chat in chats"
            :key="chat.id"
            :user_data="chat"
        />
    </div>
</template>

<script>
import vUser from './v-user'
import { mapActions, mapState } from 'vuex'

export default {
    name: "v-users-list",
    components: {
        vUser
    },
    props: {},
    data() {
        return {
        }
    },
    computed: {
        ...mapState([
            'chats'
        ])
    },
    methods: {
        ...mapActions([
            'FETCH_CHATS',
            'SET_USER_TO_HEADER'
        ])
    },
    mounted() {
        this.FETCH_CHATS()
        this.SET_USER_TO_HEADER()
    }
}
</script>