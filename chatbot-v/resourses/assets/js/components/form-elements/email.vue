<template>
    <div class="email" id="email">
        <div class="col-xs-10 col-sm-11 col-md-11 p-l-0 p-r-0">
            <input @keyup.enter="trigger" type="text" v-model="email" id="emailtextfield" autocomplete="off" :placeholder="trans['email-placeholder']" v-bind:class="{ active: isActive  }">
        </div>
        <div class="col-xs-2 col-sm-1 col-md-1 p-l-0 p-r-0 text-right">
            <img :src="buttonImage" @click.enter="onClickEmail" class="gobutton_email" id="gobutton_email">
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            "trans",
            "buttonImage"
        ],
        data () {
            return {
                email: '',
                isActive: false,
            }
        },
        methods: {
            onClickEmail () {
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email))
                {
                    this.$emit('update-email', this.email);
                    return
                }
                this.isActive =  true
            },
            trigger () {
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email))
                {
                    this.$emit('update-email', this.email);
                    return
                }
                this.isActive =  true
            }
    },
    }
</script>

<style scoped>

</style>
