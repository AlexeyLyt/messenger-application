<template>
    <div class="v-user" @click="toUserChat">
        <div class="v-user__avatar"></div>
        <div class="v-user__info">
            <div class="info__name">{{ this.user_data.name }}</div>
            <div class="info__last-message">{{ this.user_data.chat[this.user_data.chat.length - 1].text }}</div>
        </div>
        <div class="v-user__time">{{ this.user_data.chat[this.user_data.chat.length - 1].time }}</div>
    </div>
</template>

<script>
export default {
    name: 'v-user',
    props: {
        user_data: {
            type: Object,
            default: () => {}
        }
    },
    data() {
        return {

        }
    },
    computed: {},
    methods: {
        toUserChat() {
            this.$router.push({
                name: 'chat',
                params: {
                    'messages': this.user_data.chat,
                    'user': this.user_data
                }
            })
        }
    },
    created() {
        // console.log(this.user_data.chat[this.user_data.chat.length - 1])
    }
}
</script>