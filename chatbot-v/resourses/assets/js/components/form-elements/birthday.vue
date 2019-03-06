<template>
    <div id="dateofbirth" @keyup.enter="trigger" tabindex="0">
        <div class="col-xs-10 col-sm-11 col-md-11 p-l-0 p-r-0">
            <select name="dobday" id="dobday" v-model="day">
                <option v-for="n in 31" :value="n">{{n}}</option>
            </select>

            <select name="dobmonth" id="dobmonth" v-model="month">
                <option v-for="(month, index) in months" :value="index+1"> {{month}}</option>
            </select>

            <select name="dobyear" id="dobyear" v-model="year">
                <option v-for="year in years" :value="year">{{year}}</option>
            </select>
        </div>
        <div class="col-xs-2 col-sm-1 col-md-1 p-l-0 p-r-0 text-right">
            <img :src="buttonImage"  @click.enter="onClickBirthday" class="dobbutton" id="dobbutton">
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            "trans",
            "buttonImage"
        ],
        data() {
            return {
                months: [],
                years: [],
                day: 1,
                month: 1,
                year: 1986
            }
        },
        methods: {
            between (lowEnd, highEnd) {

                for (var i = lowEnd; i <= highEnd; i++) {
                    this.years.push(i);
                }
            },
            onClickBirthday () {
                this.$emit('update-birthday', this.year + '-' + this.month + '-' + this.day)
            },
            trigger () {
                this.$emit('update-birthday', this.year + '-' + this.month + '-' + this.day)
            }
        },
        created () {
            this.months = this.trans['months'];
            this.between(1910, (new Date()).getFullYear() - 18)
        }
    }
</script>

<style scoped>

</style>
