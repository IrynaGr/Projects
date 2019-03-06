import { combineReducers } from 'redux';
import messagesReducer from './reducers/messages.reducer';
import timerReducer from './reducers/timer.reducer';

const rootReducer = combineReducers({
    messages: messagesReducer,
    timer: timerReducer
});

export default rootReducer;