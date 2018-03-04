'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChildComponentButton = function (_React$Component) {
  _inherits(ChildComponentButton, _React$Component);

  function ChildComponentButton() {
    _classCallCheck(this, ChildComponentButton);

    return _possibleConstructorReturn(this, (ChildComponentButton.__proto__ || Object.getPrototypeOf(ChildComponentButton)).apply(this, arguments));
  }

  _createClass(ChildComponentButton, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'ul',
        { className: 'app-nav app-nav--right' },
        _react2.default.createElement(
          'li',
          { className: 'app-nav__item' },
          _react2.default.createElement(
            'button',
            { className: 'app-nav__btn app-nav__btn--icon-txt o-btn o-btn--1 longButton', name: 'submit' },
            _react2.default.createElement(
              'span',
              { className: 'o-btn__icon—left' },
              _react2.default.createElement('span', { className: 'md md-save' })
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement('i', { className: 'zmdi zmdi-file' }),
              _react2.default.createElement(
                'span',
                null,
                'Save'
              )
            )
          )
        )
      );
    }
  }]);

  return ChildComponentButton;
}(_react2.default.Component);

exports.default = ChildComponentButton;