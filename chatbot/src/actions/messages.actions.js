import { FETCH_MESSAGES_SCHEMA, SAVE_RESPONSE } from '../contstants/actionTypes';
import { SCHEMA_URL } from './../contstants/api';

export const fetchMessagesSchema = () => (dispatch) => {
    const url = SCHEMA_URL;

    return fetch(url, { credentials: 'same-origin' })
        .then(response => response.json())
        .then(json => dispatch(fetchMessagesSchemaSuccess(json)))
        .catch(error => dispatch(fetchMessagesSchemaFailed(error)));
};

export const fetchMessagesSchemaSuccess = schema => ({
    type: `${FETCH_MESSAGES_SCHEMA}_SUCCESS`,
    data: schema
});

export const fetchMessagesSchemaFailed = error => ({
    type: `${FETCH_MESSAGES_SCHEMA}_FAILED`,
    error
});

export const saveResponse = data => ({
    type: SAVE_RESPONSE,
    data
});
