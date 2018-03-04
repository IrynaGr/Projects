'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _class = require('../utilities/class');

var _text = require('../utilities/text');

var _HoldConferenceMessage = require('./HoldConferenceMessage');

var _HoldConferenceMessage2 = _interopRequireDefault(_HoldConferenceMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChatTest = function (_React$Component) {
  _inherits(ChatTest, _React$Component);

  function ChatTest(props) {
    _classCallCheck(this, ChatTest);

    var _this = _possibleConstructorReturn(this, (ChatTest.__proto__ || Object.getPrototypeOf(ChatTest)).call(this, props));

    _this.state = {
      active: false
    };
    return _this;
  }

  _createClass(ChatTest, [{
    key: 'checkInput',
    value: function checkInput(input) {
      return !!(0, _text.trim)((0, _text.stripLabels)(input));
    }
  }, {
    key: 'submitComment',
    value: function submitComment(input) {
      var comment = (0, _text.trim)(input);
      if (this.checkInput(comment)) {
        this.props.onSubmit({ text: comment });
        this.input.value = '';
        this.input.blur();
      }
    }
  }, {
    key: 'handleOnFocus',
    value: function handleOnFocus() {
      this.setState({ active: true });
    }
  }, {
    key: 'handleOnBlur',
    value: function handleOnBlur() {
      this.setState({ active: false });
    }
  }, {
    key: 'handleOnMouseDown',
    value: function handleOnMouseDown() {
      var input = this.input.value;
      this.submitComment(input);
    }
  }, {
    key: 'handleOnKeyDown',
    value: function handleOnKeyDown(event) {
      var input = event.target.value;
      if (event.keyCode === 13) {
        this.submitComment(input);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'o-reaction__form' },
        _react2.default.createElement('textarea', {
          className: (0, _class.classNames)('o-reaction__input', {
            'is-active': this.state.active
          }),
          placeholder: 'Write a comment.',
          tabIndex: '1',
          ref: function ref(input) {
            _this2.input = input;
          },
          onFocus: this.handleOnFocus.bind(this),
          onBlur: this.handleOnBlur.bind(this),
          onKeyDown: this.handleOnKeyDown.bind(this) }),
        _react2.default.createElement(
          'button',
          { type: 'submit',
            className: (0, _class.classNames)('o-reaction__btn--submit o-btn o-btn--3 grey u-noBoxShadow', {
              'is-shown': this.state.active
            }),
            onMouseDown: this.handleOnMouseDown.bind(this) },
          _react2.default.createElement(
            'span',
            { className: 'md md-send' },
            _react2.default.createElement('i', { className: 'zmdi zmdi-mail-send' })
          )
        ),
        _react2.default.createElement(_HoldConferenceMessage2.default, null)
      );
    }
  }]);

  return ChatTest;
}(_react2.default.Component);

ChatTest.defaultProps = {
  onSubmit: undefined
};

exports.default = ChatTest;