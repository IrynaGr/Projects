<template>
    <div>
        <header id="top">
            <span class="mark-script mark-script-h4 mark-script-white">
                <VueSprintf :text="this.trans['header-title']">
                  {{ mediumName }}
                </VueSprintf>
            </span>
        </header>
    </div>
</template>

<script>
    import VueSprintf from "vue-sprintf-components";

    export default {
        props: [
            "trans",
            "mediumName"
        ],
        components: {
            VueSprintf
        }
    }
</script>

<style scoped>

</style>