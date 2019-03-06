import { findIndex } from 'lodash';
import { FETCH_MESSAGES_SCHEMA, SAVE_RESPONSE } from '../contstants/actionTypes';

const findCurrentIndex = (data, lastIndex) =>
    findIndex(data, el => !el.text, lastIndex);

const templateToString = (template, data) =>
    template.replace(new RegExp('\{([^\{]+)\}', 'g'), (e, dataItem) => data[dataItem]);

const initialState = {
    messagesSchema: [],
    messageList: [],
    currentMessageIndex: 0,
    responseData: {
        first_name: 'stranger'
    },
    error: null
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case `${FETCH_MESSAGES_SCHEMA}_SUCCESS`: {
            const messagesSchema = action.data
                .filter(message => !message.submit);
            const currentMessageIndex = findCurrentIndex(messagesSchema, state.currentMessageIndex);
            const messageList = messagesSchema
                .slice(state.currentMessageIndex, currentMessageIndex)
                .map(message => ({ text: templateToString(message.text, state.responseData) }));

            return ({
                ...state,
                messagesSchema,
                currentMessageIndex,
                messageList,
                error: null
            });
        }
        case `${FETCH_MESSAGES_SCHEMA}_FAILED`:
            return ({
                ...state,
                error: action.error
            });
        case SAVE_RESPONSE: {
            const { name, value } = action.data;
            const responseData = {
                ...state.responseData,
                [name]: value
            };
            const responseMessage = { text: value, isUser: true };
            const currentMessageIndex = findCurrentIndex(state.messagesSchema, state.currentMessageIndex + 1);
            const nextMessages = state.messagesSchema
                .slice(state.currentMessageIndex + 1, currentMessageIndex > 0 ? currentMessageIndex : state.messagesSchema.length)
                .map(message => ({ text: templateToString(message.text, responseData) }));

            return ({
                ...state,
                currentMessageIndex,
                responseData,
                messageList: [
                    ...state.messageList,
                    responseMessage,
                    ...nextMessages
                ]
            });
        }
        default:
            return state;
    }
};

export default messagesReducer;
