import React from 'react';
import PropTypes from 'prop-types';

const getMinutes = time => {
    const minutes = Math.floor(time / 60);
    const seconds = time - minutes * 60;

    return `${minutes}:${seconds < 10 ? '00' : seconds}`;
};

const Timer = ({ seconds }) => (
    <section className="timer center-block">
        <header className="timer-header text-center">
            <div className="timer-header text-center mark-script-h3" />
        </header>
        <div className="timer-body">
            <span className="timer-text">
                {getMinutes(seconds)}
            </span>
        </div>
    </section>
);

Timer.propTypes = {
    seconds: PropTypes.number
};

export default Timer;
