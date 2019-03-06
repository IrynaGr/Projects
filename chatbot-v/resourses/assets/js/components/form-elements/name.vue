<template>
    <div class="name" id="name">
        <div class="col-xs-10 col-sm-11 col-md-11 p-l-0 p-r-0">
            <input @keyup.enter="trigger" type="text" maxlength="50" v-model="name" id="nametextfield" autocomplete="off" :placeholder="trans['name-placeholder']" v-bind:class="{ active: isActive  }">
        </div>
        <div class="col-xs-2 col-sm-1 col-md-1 p-l-0 p-r-0 text-right">
            <img :src="buttonImage" @click.enter="onClickName" class="gobutton_name" id="gobutton_name">
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
                name: '',
                isActive: false
            }
        },
        methods: {
            onClickName () {
                if (/^[A-z ]+$/.test(this.name))
                {
                    this.$emit('update-name', this.name);
                    return
                }
                this.isActive =  true
            },
            trigger () {
                if (/^[A-z ]+$/.test(this.name))
                {
                    this.$emit('update-name', this.name);
                    return
                }
                this.isActive =  true
            }
        }
    }
</script>

<style scoped>

</style>
