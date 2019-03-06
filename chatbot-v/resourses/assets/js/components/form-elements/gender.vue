<template>
    <div class="malefemale" id="malefemale">                                       
         &nbsp;&nbsp;
        <input type="radio" id="female" v-model="gender" @change="onSelectGender" value="female">
        <label for="female">{{ trans['female'] }}</label>
         &nbsp;&nbsp; &nbsp;&nbsp;
        <input type="radio" id-="male" v-model="gender" @change="onSelectGender" value="male"> 
        <label for="male">{{ trans['male'] }}</label>
    </div>
</template>

<script>
    export default {
        props: [
            "trans"
        ],
        data () {
            return {
                gender: '',
            }
        },
        methods: {
            onSelectGender () {
                this.$emit('update-gender', this.gender)
            }
        }
    }
</script>

<style scoped>

</style>