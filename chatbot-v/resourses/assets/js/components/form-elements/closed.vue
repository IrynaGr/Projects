<template>
    <div class="closed" id="closed" style="height: 40px;" >
        <div class="col-xs-10 col-sm-11 col-md-11 p-l-0 p-r-0">
           {{ mediumName }}{{trans['left-chat']}}
        </div>
        <div class="col-xs-2 col-sm-1 col-md-1 p-l-0 p-r-0 text-right"></div>
    </div>
</template>

<script>
    export default {
        props: [
            "trans",
            "mediumName"
        ]
    }
</script>

<style scoped>

</style>
