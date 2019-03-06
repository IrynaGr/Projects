<template>
    <div id="prelanderform">
        <header-section v-if="loaded" :trans="trans" :medium-name="mediumName"></header-section>
        <div class="container">
            <div class="row">
                <div class="col-md-6 text-center m-b-lg">
                    <left-section v-if="loaded"
                                  :avatar-dir="avatarDir"
                                  :trans="trans"
                                  :medium-name="mediumName">
                    </left-section>
                    <countdown-section @update-countdown-ended="countdownEnded"
                                       @update-countdown-paused="countdownPaused"
                                       v-if="loaded"
                                       :minutes="minutes"
                                       :trans="trans"
                                       :countdownChatPause="countdownChatPause">
                    </countdown-section>
                </div>
                <div class="col-md-6 p-b-lg center-block clearfix">
                    <chat-section v-if="loaded && loadedConfig"
                                  :config="config.chats"
                                  :api-endpoint="apiEndpoint"
                                  :prelander-id="prelanderId"
                                  :campaign-id="campaignId"
                                  :avatar-dir="avatarDir"
                                  :header-dir="headerDir"
                                  :offline-dir="offlineDir"
                                  :trans="trans"
                                  :request="request"
                                  :type-speed="typeSpeed"
                                  :disabled-button-image="disabledButtonImage"
                                  :button-image="buttonImage"
                                  :countdown-chat-close="countdownChatClose"
                                  :countdown-chat-pause="countdownChatPause"
                                  :medium-name="mediumName"
                                 @chat-completed="chatCompleted">
                    </chat-section>
                </div>
                <div class="col-md-3 text-center center-block p-b-lg clearfix">
                </div>
            </div>
        </div>
        <footer-section v-if="loaded"
                        :campaign-root="campaignRoot"
                        :footer-links="footerLinks"
                        :trans="trans">
        </footer-section>
        <popup-section :medium-name="mediumName"
                       :avatar-dir="avatarDir"
                       :showModel="showModel"
                       :trans="trans"
                       @close="showModel = false">
        </popup-section>
    </div>
</template>

<script>
    import HeaderSection from '../../components/header'
    import LeftSection from '../../components/left-section'
    import ChatSection from '../../components/chat'
    import CountdownSection from '../../components/countdown'
    import FooterSection from '../../components/footer'
    import PopupSection from '../../components/popup'

    export default {
        data() {
            return {
                trans: [],
                loaded: false,
                loadedConfig: false,
                config: [],
                countdownChatClose: false,
                countdownChatPause: false,
                isModalVisible: false,
                showModel: false,
            }
        },
        components: {HeaderSection, LeftSection, ChatSection, CountdownSection, FooterSection, PopupSection},
        props: [
            "language",
            "minutes",
            "typeSpeed",
            "apiEndpoint",
            "mediumName",
            "avatarDir",
            "prelanderId",
            "campaignId",
            "disabledButtonImage",
            "buttonImage",
            "request",
            "footerLinks",
            "campaignRoot",
            "headerDir",
            "offlineDir"
        ],
        created() {
            console.log(this.campaignRoot);
            console.log(this.footerLinks);
            // load the specified language file
            import(`./lang/${this.language}.json`).then(translation => {
                this.trans = translation.default;
                this.loaded = true;
            });
            // load the configuration file
            import(`./config.json`).then(configuration => {
                this.config = configuration.default;
                this.loadedConfig = true;
            });
        },
        methods: {
            countdownEnded(value) {
                this.countdownChatClose = value;
                this.showModel = true;
            },
            countdownPaused(value) {
                this.countdownChatPause = value;
                this.showModel = true;
            },
            showModal() {
                this.isModalVisible = true;
            },
            closeModal() {
                this.isModalVisible = false;
            },
            chatCompleted() {
                this.countdownChatPause = true;
                this.showModel = true;
            }
        },
    }
</script>

<style scoped>

</style>
