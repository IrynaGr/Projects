import { TICK, STOP_TIMER } from '../contstants/actionTypes';

const initialState = {
    seconds: 900,
    isActive: true
};

const timerReducer = (state = initialState, action) => {
    switch (action.type) {
        case TICK:
            return ({
                ...state,
                seconds: state.seconds - 1
            });
        case STOP_TIMER:
            return ({
                ...state,
                isActive: false
            });
        default:
            return state;
    }
};

export default timerReducer;
