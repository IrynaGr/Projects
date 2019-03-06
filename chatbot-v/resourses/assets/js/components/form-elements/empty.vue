<template>
    <div class="empty" style="height: 40px; display: block;">
        <div class="col-xs-10 col-sm-11 col-md-11 p-l-0 p-r-0">{{trans['empty_input']}}</div>
        <div class="col-xs-2 col-sm-1 col-md-1 p-l-0 p-r-0 text-right" style="height:40px;">
            <img :src="disabledButtonImage" class="gobutton">
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            "trans",
            "buttonImage",
            "disabledButtonImage"
        ]
    }
</script>

<style scoped>

</style>