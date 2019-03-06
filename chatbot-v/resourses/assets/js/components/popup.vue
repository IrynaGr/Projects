<template>
    <div class="modal-backdrop" v-show="showModel">
        <div class="facebook-client-popup modal-christina">
            <button
                    type="button"
                    class="btn-close"
                    @click="close"
                    aria-label="Close modal"
            >
                x
            </button>
            <div class="application-content mb-1 flex-1 layout horizontal justify-center">
                <div class="layout vertical align-center ml-1 mr-1">
                    <img :src="avatarDir" alt="" class="fadeout img-popup" style="margin-bottom: 8px;">
                    <div class="application-medium-popup application-christina center pt-3">
                        <div>
                            <p class="application-medium-popup-header mt-0">
                                <span class="popup-medium">{{ trans['medium']}}</span>
                                <span class="popup-name">{{ mediumName }}</span>
                            </p>
                        </div>
                        <div class="application-medium-popup-text mt-1">
                            <span>{{ trans['popup-title']}}</span>
                        </div>
                        <div class="mt-1">
                            <p class="application-medium-popup-telephone background-christina pl-3 pr-3 pt-025 pb-025 desktop">
                                {{ trans['bel']}}
                            </p>
                            <a class="pl-3 pr-3 pt-025 pb-025 application-medium-popup-telephone-mobile background-christina mobile" href="tel:09094655">
                                {{ trans['bel']}}
                            </a>
                        </div>
                        <div class="application-medium-popup-text2 mt-1">
                            <span>{{ trans['lucky_number']}}</span>
                            <br />
                            <span>{{ trans['future']}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            "mediumName",
            "avatarDir",
            "trans",
            "showModel"
        ],

        methods: {
            close() {
                this.$emit('close');
            },
        }
    }
</script>

<style scoped>
    .modal-backdrop {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.3);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .btn-close {
        border: none;
        font-size: 20px;
        cursor: pointer;
        font-weight: bold;
        color: #8a8a8a;
        background: transparent;
        padding-top: 5px;
        padding-left: 10px;
        padding-top: 0;
    }
    .btn-close:hover {
        color: #2196F3;
    }

</style>
