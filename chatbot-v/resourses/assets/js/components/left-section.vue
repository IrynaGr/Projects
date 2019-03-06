<template>
    <div>
        <img :src="avatarDir" alt="" class="fadeout" style="margin-bottom: 8px;">
        <br>
        <img :src="nameImageDir" alt="" class="fadeout">

        <div id="chat-side-text">
            <span class="mark-script mark-script-white" style="font-size: 1.3em;">
                <h2>{{ mediumName }}</h2>
                <VueSprintf :text="this.trans['left-section-title']">
                    <p></p>
                </VueSprintf>
                <p>{{ trans['medium']}}</p>
            </span>
        </div>
    </div>
</template>

<script>
    import VueSprintf from "vue-sprintf-components";

    export default {
        props: [
            "trans",
            "mediumName",
            "avatarDir",
            "nameImageDir"
        ],
        components: {
            VueSprintf
        }
    }
</script>

<style scoped>

</style>