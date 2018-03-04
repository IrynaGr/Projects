'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDatepicker = require('react-datepicker');

var _reactDatepicker2 = _interopRequireDefault(_reactDatepicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChildComponentData = function (_React$Component) {
  _inherits(ChildComponentData, _React$Component);

  function ChildComponentData(props) {
    _classCallCheck(this, ChildComponentData);

    var _this = _possibleConstructorReturn(this, (ChildComponentData.__proto__ || Object.getPrototypeOf(ChildComponentData)).call(this, props));

    _this.state = {};
    _this.handleChanged = _this.handleChanged.bind(_this);
    return _this;
  }

  _createClass(ChildComponentData, [{
    key: 'handleChanged',
    value: function handleChanged(d) {
      this.setState({ date: d });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'c-form__control' },
        _react2.default.createElement(
          'label',
          { htmlFor: this.props.id },
          this.props.text,
          _react2.default.createElement(
            'i',
            { className: 'required-icon' },
            this.props.sign
          )
        ),
        _react2.default.createElement(_reactDatepicker2.default, {
          placeholderText: 'Click to select a data and time',
          selected: this.state.date,
          onChange: this.handleChanged,
          showTimeSelect: true,
          timeFormat: 'HH:mm',
          timeIntervals: 15,
          dateFormat: 'LLL',
          required: true
        })
      );
    }
  }]);

  return ChildComponentData;
}(_react2.default.Component);

exports.default = ChildComponentData;