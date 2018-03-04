'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _simplewebrtc = require('simplewebrtc');

var _simplewebrtc2 = _interopRequireDefault(_simplewebrtc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WebRtcDemo = function (_React$Component) {
  _inherits(WebRtcDemo, _React$Component);

  function WebRtcDemo(props) {
    _classCallCheck(this, WebRtcDemo);

    var _this = _possibleConstructorReturn(this, (WebRtcDemo.__proto__ || Object.getPrototypeOf(WebRtcDemo)).call(this, props));

    _this.state = {
      room: 'Welcome! Join a Room.',
      text: '',
      buttons: false
    };
    return _this;
  }

  _createClass(WebRtcDemo, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.webrtc = new _simplewebrtc2.default({
        localVideoEl: 'localVideo',
        remoteVideosEl: '',
        autoRequestMedia: true
      });
    }
  }, {
    key: 'handleJoin',
    value: function handleJoin() {
      this.webrtc.joinRoom(this.state.text);
      this.webrtc.startLocalVideo();
      this.setState({ text: '', room: this.state.text, buttons: true });
    }
  }, {
    key: 'onChange',
    value: function onChange(e) {
      this.setState({ text: e.target.value });
    }
  }, {
    key: 'checkEnter',
    value: function checkEnter(e) {
      if (e.charCode === 13) {
        this.handleJoin();
      }
    }
  }, {
    key: 'handlePause',
    value: function handlePause() {
      this.webrtc.pause();
    }
  }, {
    key: 'handleResume',
    value: function handleResume() {
      this.webrtc.resume();
    }
  }, {
    key: 'handleLeave',
    value: function handleLeave() {
      this.webrtc.leaveRoom();
      this.webrtc.stopLocalVideo();
      this.setState({ room: 'Welcome! Join a Room.', buttons: false });
    }
  }, {
    key: 'handleShareScreen',
    value: function handleShareScreen() {
      this.webrtc.shareScreen();
    }
  }, {
    key: 'render',
    value: function render() {
      var btnState = this.state.buttons ? 'vidButton' : 'hidden';
      var joined = this.state.buttons ? 'hidden' : 'vidButton';
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h2',
          null,
          this.state.room
        ),
        _react2.default.createElement(
          'div',
          { className: 'roomButtons' },
          _react2.default.createElement('input', { className: joined, onChange: this.onChange.bind(this), value: this.state.text, onKeyPress: this.checkEnter }),
          _react2.default.createElement(
            'button',
            { className: joined, onClick: this.handleJoin.bind(this) },
            'Join Room'
          ),
          _react2.default.createElement(
            'button',
            { className: btnState, onClick: this.handleLeave.bind(this) },
            'Leave Room'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'vidContainer' },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement('video', { id: 'localVideo2' })
          ),
          _react2.default.createElement('div', { id: 'remotes' }),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'button',
              { className: btnState, onClick: this.handleResume.bind(this) },
              'Resume'
            ),
            _react2.default.createElement(
              'button',
              { className: btnState, onClick: this.handlePause.bind(this) },
              'Pause'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'vidContainer' },
          _react2.default.createElement('div', { id: 'remoteVideos' })
        ),
        _react2.default.createElement(
          'button',
          { onClick: this.handleShareScreen.bind(this), id: 'screenShareButton' },
          'Share screen'
        ),
        _react2.default.createElement('p', { id: 'subTitle' })
      );
    }
  }]);

  return WebRtcDemo;
}(_react2.default.Component);

exports.default = WebRtcDemo;