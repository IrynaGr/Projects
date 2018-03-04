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

var Members = [{ label: 'Emil', value: 'Emil' }, { label: 'Gleb', value: 'Gleb' }, { label: 'Inessa', value: 'Inessa' }, { label: 'Jordy', value: 'Jordy' }, { label: 'Felicia', value: 'Felicia' }, { label: 'Silvia', value: 'Silvia' }];

var WhoAreYou = [{ label: 'Emil', value: 'Emil', disabled: true }].concat(Members.slice(1));

var AddNewMember = (0, _createReactClass2.default)({
  displayName: 'AddNewMember',
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

    var options = crazy ? WhoAreYou : Members;
    return _react2.default.createElement(
      'div',
      { className: 'c-form__control selectable addMember' },
      _react2.default.createElement(
        'label',
        { htmlFor: this.props.id },
        this.props.text
      ),
      _react2.default.createElement(
        'div',
        { className: 'section section-addMember' },
        _react2.default.createElement(_reactSelect2.default.Creatable, { className: 'Select select-addMember',
          closeOnSelect: !stayOpen,
          disabled: disabled,
          multi: true,
          onChange: this.handleSelectChange,
          options: options,
          simpleValue: true,
          value: value
        }),
        _react2.default.createElement(
          'button',
          { className: 'app-nav__btn o-btn o-btn--1', name: 'submit' },
          _react2.default.createElement(
            'span',
            { className: 'o-btn__icon—left' },
            _react2.default.createElement('span', { className: 'md md-save' })
          ),
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement('i', { className: 'zmdi zmdi-plus' }),
            _react2.default.createElement(
              'span',
              null,
              this.props.text
            )
          ),
          'Invite people'
        )
      )
    );
  }
});
exports.default = AddNewMember;