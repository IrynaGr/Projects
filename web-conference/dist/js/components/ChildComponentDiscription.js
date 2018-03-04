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

var ChildComponentDiscription = function (_React$Component) {
  _inherits(ChildComponentDiscription, _React$Component);

  function ChildComponentDiscription() {
    _classCallCheck(this, ChildComponentDiscription);

    return _possibleConstructorReturn(this, (ChildComponentDiscription.__proto__ || Object.getPrototypeOf(ChildComponentDiscription)).apply(this, arguments));
  }

  _createClass(ChildComponentDiscription, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'c-form__control' },
        _react2.default.createElement(
          'label',
          { 'for': this.props.id },
          this.props.text,
          '>'
        ),
        _react2.default.createElement('textarea', { className: this.props.className, id: this.props.id, name: this.props.name, placeholder: this.props.placeholder, cols: this.props.cols, rows: this.props.rows })
      );
    }
  }]);

  return ChildComponentDiscription;
}(_react2.default.Component);

exports.default = ChildComponentDiscription;