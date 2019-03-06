<template>
    <div>
        <div class="col-sm-12 col-md-12 col-lg-12 clearfix">
            <div class="chat">
                <div class="chat-header">
                    <img v-if="type === 'closed'" :src="offlineDir" alt="" id="chatheaderoffafb">
                    <img v-else-if="countdownChatClose" :src="offlineDir" alt="" id="chatheaderoffafb">
                    <img v-else :src="headerDir" alt="" id="chatheaderafb">
                    <div id="chat-header-text"><span class="mark-script mark-script-h4 mark-script-white">{{ mediumName }}</span>
                    </div>
                </div>
                <div class="chat-body" style="background: rgb(237, 238, 243);" v-chat-scroll>
                    <ul class="messages clearfix">
                        <div v-for="(msg, index) in typedMessages" :id="['message-' + index]">
                            <li class="amanda" style="display: list-item;">
                                <div class="msg">

                                       {{parse(msg)}}

                                </div>
                            </li>
                        </div>
                        <div v-for="(msg, index) in messages" :id="['msg-' + index]">
                            <div v-if="index === nextMessage">
                                <li class="amanda" style="display: list-item;">
                                    <div class="msg">
                                        <vue-typer :text='parse(msg.message)'
                                                   :repeat='0'
                                                   :type-delay='parseInt(typeSpeed)'
                                                   erase-style='clear'
                                                   @completed='onComplete(index, msg.message, msg.type)'>
                                        </vue-typer>
                                    </div>
                                </li>
                            </div>
                        </div>
                    </ul>
                </div>
                <div class="chat-footer">
                    <!-- List with options the user has during the chat. Javascript will hide all and show them when they're needed -->
                    <div class="userinputs">
                        <div v-if="countdownChatClose">
                            <closed :trans="trans"
                                    :medium-name="mediumName">
                            </closed>
                        </div>
                        <div v-else>
                            <div v-if="isTyping">

                                <empty :trans="trans"
                                       :disabled-button-image="disabledButtonImage"
                                ></empty>

                            </div>
                            <div v-else>

                                <gender @update-gender="updatedGender"
                                        v-if="type === 'gender'"
                                        :trans="trans"
                                ></gender>

                                <name @update-name="updatedName"
                                      v-if="type === 'name'"
                                      :trans="trans"
                                      :button-image="buttonImage"
                                ></name>

                                <birthday @update-birthday="updatedBirthday"
                                          v-if="type === 'birthday'"
                                          :trans="trans"
                                          :button-image="buttonImage"
                                ></birthday>

                                <email @update-email="updatedEmail"
                                       v-if="type === 'email'"
                                       :trans="trans"
                                       :button-image="buttonImage"
                                ></email>

                                <email-confirm @update-confirm-email="updatedConfirmedEmail"
                                               v-if="type === 'email-confirm'"
                                               :trans="trans"
                                               :email="email"
                                               :button-image="buttonImage"
                                ></email-confirm>

                                <closed :trans="trans"
                                        v-if="type === 'closed'"
                                        :medium-name="mediumName"
                                        :countdown-chat-pause="countdownChatPause"
                                ></closed>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="chat-footer2">
                    <img src="/amanda-uk2018/chatbox/images/prelander/voyance_footer.png" alt="" id="chatfooterafb/">
                    <!--  width=535 height=28 -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import {VueTyper} from 'vue-typer'
    import Name from './form-elements/name'
    import Email from './form-elements/email'
    import Empty from './form-elements/empty'
    import VueChatScroll from 'vue-chat-scroll'
    import Closed from './form-elements/closed'
    import Gender from './form-elements/gender'
    import Birthday from './form-elements/birthday'
    import VueSprintf from 'vue-sprintf-components';
    import EmailConfirm from './form-elements/email-confirm'

    const axios = require('axios');

    Vue.use(VueChatScroll);

    export default {
        props: [
            "trans",
            "typeSpeed",
            "config",
            "countdownChatClose",
            "countdownChatPause",
            "apiEndpoint",
            "prelanderId",
            "campaignId",
            "disabledButtonImage",
            "buttonImage",
            "request",
            "mediumName",
            "headerDir",
            "offlineDir",
        ],
        data() {
            return {
                nextMessage: 0,
                isTyping: true,
                typedMessages: [],
                messages: [],
                name: '',
                email: '',
                closed: false,
                gender: '',
                birthday: '',
                email_confirm: '',
                ip: '192.168.0.1',
                type: 'empty',
                chatCompleted: false
            }
        },
        components: {
            Gender, Name, Birthday, Email, EmailConfirm, Empty, Closed, VueTyper, VueSprintf
        },
        created() {
            this.transformArray(this.trans.chats, this.config['input-field']);
        },

        methods: {
            onComplete(index, message, type) {
                switch (type) {
                    case "name":
                        this.type = 'name';
                        this.isTyping = false;
                        this.typedMessages.push(message);
                        break;
                    case "gender":
                        this.type = 'gender';
                        this.isTyping = false;

                        break;
                    case "birthday":
                        this.type = 'birthday';
                        this.isTyping = false;
                        this.typedMessages.push(message);
                        break;
                    case "email":
                        this.type = 'email';
                        this.isTyping = false;
                        this.typedMessages.push(message);
                        break;
                    case "email-confirm":
                        this.type = 'email-confirm';
                        this.isTyping = false;
                        this.typedMessages.push(message);
                        break;
                    case "closed":
                        this.type = 'closed';
                        this.isTyping = false;
                        this.chatCompleted = true;
                        this.typedMessages.push(message);
                        break;
                    default:
                        this.type = 'empty';
                        this.isTyping = true;
                        this.nextMessage += 1;
                        this.typedMessages.push(message);
                        break;
                }
                console.log(this.messages);
            },
            evalInContext(string) {
                try {
                    return eval('this.' + string)
                } catch (error) {
                    try {
                        return eval(string)
                    } catch (errorWithoutThis) {
                        console.warn('Error en script: ' + string, errorWithoutThis);
                        return null
                    }
                }
            },
            parse(string) {
                return string.replace(/{{.*?}}/g, match => {
                    var expression = match.slice(2, -2);
                    return this.evalInContext(expression)
                })
            },
            transformArray(translations, config) {
                for (let [key, value] of Object.entries(translations)) {
                    if (typeof config[key] === undefined) {
                        this.pushMessage(value, true, "empty");
                    }
                    this.pushMessage(value, false, config[key]);
                    }

            },
            sendForm() {
                axios.post(this.apiEndpoint, {
                    first_name: this.name,
                    email: this.email,
                    password: Math.random().toString(36).slice(-8),
                    gender: this.gender,
                    date_of_birth: this.birthday,
                    prelander_id: this.prelanderId,
                    campaign_id: this.campaignId,
                    ip: this.ip,
                    transaction_id: this.request.t,
                    offer_id: this.request.o,
                    affiliate_id: this.request.affiliate_id,
                    aff_sub1: this.request.aff_sub1,
                    aff_sub2: this.request.aff_sub2,
                    aff_sub3: this.request.aff_sub3,
                    aff_sub4: this.request.aff_sub4,
                    aff_sub5: this.request.aff_sub5,
                })
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            getUrlParam(param) {
                let uri = window.location.search.substring(1);
                let params = new URLSearchParams(uri);
                return params.get(param);
            },
            pushMessage(value, form, type) {
                this.messages.push({
                    "message": value,
                    "form": form,
                    "type": type
                });
            },
            updatedGender(value) {
                this.gender = value;
                this.isTyping = true;
                this.nextMessage += 1;
            },
            updatedName(value) {
                this.name = value;
                this.isTyping = true;
                this.nextMessage += 1;
            },
            updatedBirthday(value) {
                this.birthday = value;
                this.isTyping = true;
                this.nextMessage += 1;
            },
            updatedEmail(value) {
                this.email = value;
                this.isTyping = true;
                this.nextMessage += 1;
            },
            updatedConfirmedEmail(value) {
                this.email_confirm = value;
                this.nextMessage += 1;
                this.isTyping = true;
                this.sendForm()
            }
        },

        watch: {
            chatCompleted(status) {
                this.$emit('chat-completed', status);
            }
        }
    }
</script>

<style scoped>
    ul.messages {
        list-style-type: none;
        width: 100%;
        margin: 0px;
        padding: 0px;
        padding-bottom: 50px !important;
    }
</style>
