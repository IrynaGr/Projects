'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ChatTest = require('./ChatTest');

var _ChatTest2 = _interopRequireDefault(_ChatTest);

var _HoldConferenceMessage = require('./HoldConferenceMessage');

var _HoldConferenceMessage2 = _interopRequireDefault(_HoldConferenceMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Chat = function (_React$Component) {
  _inherits(Chat, _React$Component);

  function Chat(props) {
    _classCallCheck(this, Chat);

    var _this = _possibleConstructorReturn(this, (Chat.__proto__ || Object.getPrototypeOf(Chat)).call(this, props));

    _this.state = {
      comments: []
    };
    return _this;
  }

  _createClass(Chat, [{
    key: 'postComment',
    value: function postComment(comment) {
      comment.user = {
        name: 'Kitten',
        image: 'https://i.imgur.com/l6tqERP.jpg'
      };
      this.setState({ comments: [].concat(_toConsumableArray(this.state.comments), [comment]) });
    }
  }, {
    key: 'renderComments',
    value: function renderComments() {
      return _react2.default.createElement(_HoldConferenceMessage2.default, {
        comments: this.state.comments,
        loading: this.state.commentsLoading
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_ChatTest2.default, { onSubmit: this.postComment.bind(this) }),
        this.renderComments()
      );
    }
  }]);

  return Chat;
}(_react2.default.Component);

exports.default = Chat;