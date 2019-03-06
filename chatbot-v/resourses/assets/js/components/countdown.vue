<template>
    <div class="col-sm-12 col-md-12 col-lg-12 clearfix">
        <div class="text-center">
            <div class="timer center-block">
                <div class="timer-header text-center">
                    <div class="timer-header text-center mark-script-h3">{{ trans['countdown-title']}}</div>
                </div>
                <div class="timer-body">
                     <span id="timer-text">
                        <span id="minutes">
                            <span id="time1">
                                <countdown :time="minutes * 60 * 1000" @progress="handleCountdownProgress"
                                           ref="countdown"
                                           @countdownpause="handleCountdownPause">
                                    <template slot-scope="props">
                                        {{ props.minutes < 10 ? `0${props.minutes}` : props.minutes }}:
                                        {{ props.seconds < 10 ? `0${props.seconds}` : props.seconds }}
                                    </template>
                                </countdown>
                            </span>
                        </span>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import VueCountdown from '@chenfengyuan/vue-countdown';

    Vue.component(VueCountdown.name, VueCountdown);
    export default {
        props: [
            "minutes",
            "trans",
            "countdownChatPause"
        ],
        methods: {
            handleCountdownProgress(progress) {
                if (progress.totalSeconds === 1) {
                    this.$emit('update-countdown-ended', true);
                }
            },

            handleCountdownPause() {
                this.$emit('update-countdown-paused', true);
            }
        },

        watch: {
            countdownChatPause(pause) {
                if (pause) {
                    this.$refs.countdown.abort();
                }
            }
        }
    }
</script>

<style scoped>

</style>
