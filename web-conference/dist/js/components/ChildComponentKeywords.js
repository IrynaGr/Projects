'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _createReactClass = require('create-react-class');

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KeyWords = [{}];

var WhatKeyWords = [{ label: '', value: '', disabled: true }].concat(KeyWords.slice(1));

var ChildComponentKeywords = (0, _createReactClass2.default)({
  displayName: 'ChildComponentKeywords',
  propTypes: {
    label: _propTypes2.default.string
  },
  getInitialState: function getInitialState() {
    return {
      removeSelected: true,
      disabled: false,
      crazy: false,
      stayOpen: false,
      value: []
    };
  },
  handleSelectChange: function handleSelectChange(value) {
    this.setState({ value: value });
  },
  render: function render() {
    var _state = this.state,
        crazy = _state.crazy,
        disabled = _state.disabled,
        stayOpen = _state.stayOpen,
        value = _state.value;

    var options = crazy ? WhatKeyWords : KeyWords;
    return _react2.default.createElement(
      'div',
      { className: 'event__input--tags ' },
      _react2.default.createElement(
        'label',
        { htmlFor: this.props.id },
        this.props.text
      ),
      _react2.default.createElement(
        'p',
        { className: 'form__help' },
        'Choose one of the suggested tags, or confirm your own tag by pressing the Enter key.'
      ),
      _react2.default.createElement(
        'div',
        { className: 'section' },
        _react2.default.createElement(_reactSelect2.default.Creatable, { className: 'Select',
          closeOnSelect: !stayOpen,
          disabled: disabled,
          multi: true,
          onChange: this.handleSelectChange,
          options: options,
          simpleValue: true,
          value: value
        })
      )
    );
  }
});

exports.default = ChildComponentKeywords;