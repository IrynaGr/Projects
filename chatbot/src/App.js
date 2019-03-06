import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './App.css';
import ChatBlock from './containers/ChatBlock';
import Timer from './components/Timer';
import { tickTimer, stopTimer } from "./actions/timer.actions";

import amanda from './assets/images/amanda-profile-large.png';
import amanda2 from './assets/images/amanda-signature.png';

class App extends PureComponent {
    static propTypes = {
        seconds: PropTypes.number,
        isTimeOut: PropTypes.bool,
        tickTimer: PropTypes.func,
        stopTimer: PropTypes.func
    };

    componentDidMount() {
        this.interval = setInterval(this.tick, 1000);
    }

    tick = () => {
        this.props.tickTimer();

        if (this.props.seconds <= 0) {
            clearInterval(this.interval);
            this.props.stopTimer();
        }
    };

    render() {
        return (
            <div className="App">
                <header id="top">
                    <div className="row">
                        <div className="col-md-4 left-from-header-text" />
                            <div className="col-md-4">
                                <span className="mark-script mark-script-h4 mark-script-white">
                                    Here is the Medium
                                </span>
                            </div>
                        <div className="col-md-4 right-from-header-text" />
                    </div>
                </header>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 text-center m-b-lg">
                            <img src={amanda} alt = "" className="fadeout" /><br />
                            <img src={amanda2} alt = "" className="fadeout" />
                            <div id="chat-side-text">
                                <span className="mark-script mark-script-white">
                                    Amanda is groot in helderziendheid.
                                    Zij heetft duidelijke inzichten en weet wat 2018 gaat brengen
                                </span>
                            </div>
                        </div>
                        <div className="col-md-6 p-b-lg center-block clearfix">
                            <ChatBlock
                                isTimeOut={this.props.isTimeOut}
                            />
                        </div>
                        <div className="col-md-3 text-center center-block p-b-lg clearfix">
                            <Timer
                                seconds={this.props.seconds}
                                isTimeOut={this.props.isTimeOut}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    seconds: state.timer.seconds,
    isTimeOut: !state.timer.isActive
});

export default connect(mapStateToProps, {
    tickTimer,
    stopTimer
})(App);
