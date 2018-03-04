'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ChildComponent = require('./ChildComponent');

var _ChildComponent2 = _interopRequireDefault(_ChildComponent);

var _ChildComponentData = require('./ChildComponentData');

var _ChildComponentData2 = _interopRequireDefault(_ChildComponentData);

var _ChildComponentDescription = require('./ChildComponentDescription');

var _ChildComponentDescription2 = _interopRequireDefault(_ChildComponentDescription);

var _ChildComponentMembers = require('./ChildComponentMembers');

var _ChildComponentMembers2 = _interopRequireDefault(_ChildComponentMembers);

var _ChildComponentCheck = require('./ChildComponentCheck');

var _ChildComponentCheck2 = _interopRequireDefault(_ChildComponentCheck);

var _ChildComponentKeywords = require('./ChildComponentKeywords');

var _ChildComponentKeywords2 = _interopRequireDefault(_ChildComponentKeywords);

var _ChildComponentButton = require('./ChildComponentButton');

var _ChildComponentButton2 = _interopRequireDefault(_ChildComponentButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Create = function (_React$Component) {
  _inherits(Create, _React$Component);

  function Create() {
    _classCallCheck(this, Create);

    return _possibleConstructorReturn(this, (Create.__proto__ || Object.getPrototypeOf(Create)).apply(this, arguments));
  }

  _createClass(Create, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'form',
        { className: 'organizeConference', id: this.props.id },
        _react2.default.createElement(_ChildComponent2.default, { className: 'textinput textInput form-control', type: 'text', placeholder: 'New event', text: 'Title', id: 'id_title', sign: '*', required: true }),
        _react2.default.createElement(_ChildComponentData2.default, { text: 'Start date', id: 'id_start_date_0', sign: '*', required: true }),
        _react2.default.createElement(_ChildComponentDescription2.default, { className: 'textarea form-control', cols: '40', rows: '3', text: 'Description', id: 'id_description', name: 'description' }),
        _react2.default.createElement(_ChildComponentMembers2.default, { text: 'Members', id: 'id_member' }),
        _react2.default.createElement(_ChildComponentCheck2.default, { className: 'inline-inputs datepicker', type: 'checkbox', text: 'Send invitation by email', id: 'id_checkbox', name: 'checkbox' }),
        _react2.default.createElement(_ChildComponentKeywords2.default, { placeholder: 'Add keywords.', text: 'Keywords:', id: 'id_tags' }),
        _react2.default.createElement(_ChildComponentButton2.default, null)
      );
    }
  }]);

  return Create;
}(_react2.default.Component);

exports.default = Create;