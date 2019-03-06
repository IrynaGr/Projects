import { TICK, STOP_TIMER } from '../contstants/actionTypes';

export const tickTimer = () => ({
    type: TICK
});

export const stopTimer = () => ({
    type: STOP_TIMER
});
