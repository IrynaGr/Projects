<template>
    <div class="email2" id="email2">
        <div class="col-xs-10 col-sm-11 col-md-11 p-l-0 p-r-0">
            <input @keyup.enter="trigger" type="text" v-model="email_confirm" id="email2textfield" autocomplete="off" :placeholder="trans['email-confirm-placeholder']" v-bind:class="{ active: isActive  }">
        </div>
        <div class="col-xs-2 col-sm-1 col-md-1 p-l-0 p-r-0 text-right">
            <img :src="buttonImage" @click.enter="onClickConfirmEmail" class="gobutton_email2" id="gobutton_email2">
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            "trans",
            "email",
            "buttonImage"
        ],
        data() {
            return {
                email_confirm: '',
                isActive: false,
            }
        },
        methods: {
            onClickConfirmEmail () {
                if (this.email === this.email_confirm)
                {
                    this.$emit('update-confirm-email', this.email);
                    return
                }
                this.isActive =  true
            },
            trigger () {
                if (this.email === this.email_confirm)
                {
                    this.$emit('update-confirm-email', this.email);
                    return
                }
                this.isActive =  true
            }
        },
    }
</script>

<style scoped>

</style>
