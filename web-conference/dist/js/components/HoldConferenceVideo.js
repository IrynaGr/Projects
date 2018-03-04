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

var HoldConferenceVideo = function (_React$Component) {
  _inherits(HoldConferenceVideo, _React$Component);

  function HoldConferenceVideo(props) {
    _classCallCheck(this, HoldConferenceVideo);

    var _this = _possibleConstructorReturn(this, (HoldConferenceVideo.__proto__ || Object.getPrototypeOf(HoldConferenceVideo)).call(this, props));

    _this.state = {
      text: ''
    };
    return _this;
  }

  _createClass(HoldConferenceVideo, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.webrtc = new _simplewebrtc2.default({
        localVideoEl: 'localVideo',
        remoteVideosEl: 'remotesVideos',
        autoRequestMedia: true
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'screen' },
        _react2.default.createElement(
          'h3',
          null,
          this.props.title
        ),
        _react2.default.createElement(
          'div',
          { className: 'videoContainer' },
          _react2.default.createElement('video', { id: 'localVideo', className: 'screenVideo' }),
          _react2.default.createElement('div', { id: 'remotesVideos' })
        ),
        _react2.default.createElement(
          'a',
          { href: '' },
          _react2.default.createElement('i', { className: 'gray zmdi zmdi-fullscreen' })
        ),
        _react2.default.createElement(
          'a',
          { href: '' },
          _react2.default.createElement('i', { className: 'list-group-item gray zmdi zmdi-phone-end' })
        ),
        _react2.default.createElement(
          'a',
          { href: '' },
          _react2.default.createElement('i', { className: 'list-group-item gray zmdi zmdi-volume-up' })
        ),
        _react2.default.createElement(
          'a',
          { href: '' },
          _react2.default.createElement('i', { className: 'list-group-item gray zmdi zmdi-mic' })
        ),
        _react2.default.createElement(
          'a',
          { href: '' },
          _react2.default.createElement('i', { className: 'list-group-item gray zmdi zmdi-videocam' })
        ),
        _react2.default.createElement(
          'a',
          { href: '' },
          _react2.default.createElement('i', { className: 'list-group-item gray zmdi zmdi-account' })
        ),
        _react2.default.createElement(
          'a',
          { href: '' },
          _react2.default.createElement('i', { className: 'list-group-item gray zmdi zmdi-input-svideo' })
        ),
        _react2.default.createElement(
          'a',
          { href: '' },
          _react2.default.createElement('i', { className: 'list-group-item gray zmdi zmdi-remote-control' })
        )
      );
    }
  }]);

  return HoldConferenceVideo;
}(_react2.default.Component);

exports.default = HoldConferenceVideo;