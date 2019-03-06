<template>
    <div class="container">
        <footer class="text-right">
            <div v-for="item in footerLinks">
                <a v-if="item.prelander" :href="'https://'+campaignRoot+'/'+item.slug" target="_blank" style="color: white; font-size:x-small;">{{item.title}}</a><br>
            </div>
        </footer>
    </div>
</template>

<script>
    export default {
        props: [
            "footerLinks",
            "campaignRoot",
            "trans",
        ]
    }
</script>

<style scoped>
    a {
        color: #fff;
    }
</style>
