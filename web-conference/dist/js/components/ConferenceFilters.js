'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDatepicker = require('react-datepicker');

var _reactDatepicker2 = _interopRequireDefault(_reactDatepicker);

var _Checkbox = require('./Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _class = require('../utilities/class');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ConferenceFilters = function (_React$Component) {
  _inherits(ConferenceFilters, _React$Component);

  function ConferenceFilters(props) {
    _classCallCheck(this, ConferenceFilters);

    var _this = _possibleConstructorReturn(this, (ConferenceFilters.__proto__ || Object.getPrototypeOf(ConferenceFilters)).call(this, props));

    var min_datetime = void 0,
        max_datetime = void 0;

    _this.state = {
      conferences: [],
      active: false,
      filters: {

        min_datetime: min_datetime,
        max_datetime: max_datetime
      }
    };

    _this.handleClickOutside = _this.handleClickOutside.bind(_this);
    return _this;
  }

  _createClass(ConferenceFilters, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener('click', this.handleClickOutside);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.handleClickOutside);
    }
  }, {
    key: 'handleClickOutside',
    value: function handleClickOutside(event) {
      var element = event.target;
      var isClickInside = this.wrapper.contains(element) || element.className.indexOf('react-datepicker') >= 0 || element.className.indexOf('label') >= 0 || element.parentNode && element.parentNode.className.indexOf('label') >= 0;
      if (this.state.active && !isClickInside) {
        this.setState({ active: false });
      }
    }
  }, {
    key: 'toggle',
    value: function toggle(event) {
      this.setState({ active: !this.state.active });
      event.stopPropagation();
    }
  }, {
    key: 'applyFilters',
    value: function applyFilters() {
      this.setState({ active: false });
      var min_datetime = void 0,
          max_datetime = void 0;
      if (!!this.state.filters.min_datetime) {
        min_datetime = (0, _moment2.default)(this.state.filters.min_datetime);
      }
      if (!!this.state.filters.max_datetime) {
        max_datetime = (0, _moment2.default)(this.state.filters.max_datetime);
      }
      var filters = _extends({}, this.state.filters, {
        min_datetime: min_datetime,
        max_datetime: max_datetime
      });
      this.props.conferenceService.setFilters(filters);
      this.props.refresh();
    }
  }, {
    key: 'resetFilters',
    value: function resetFilters() {
      this.setState({ active: false });
      this.props.conferenceService.setFilters({});
      this.setState({ filters: {} });
      this.props.refresh();
    }
  }, {
    key: 'handleOnChangeMinDateTime',
    value: function handleOnChangeMinDateTime(min_datetime) {
      var filters = Object.assign(this.state.filters, { min_datetime: min_datetime });
      this.setState({ filters: filters });
    }
  }, {
    key: 'handleOnChangeMaxDateTime',
    value: function handleOnChangeMaxDateTime(max_datetime) {
      var filters = Object.assign(this.state.filters, { max_datetime: max_datetime });
      this.setState({ filters: filters });
    }
  }, {
    key: 'handleOnChange',
    value: function handleOnChange(label) {
      this.state.filters[label] = !this.state.filters[label];
      this.setState({ filters: this.state.filters });
    }
  }, {
    key: 'renderFilters',
    value: function renderFilters() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: (0, _class.classNames)('o-subnav filters', {
            'is-active': this.state.active
          }) },
        _react2.default.createElement(
          'div',
          { className: 'g-row12' },
          _react2.default.createElement(
            'div',
            { className: 'g-col12--xs g-col6--md u-marg-bottom' },
            _react2.default.createElement(_reactDatepicker2.default, {
              placeholderText: 'From',
              dateFormat: 'YYYY-MM-DD',
              selected: this.state.filters.min_datetime,
              onChange: this.handleOnChangeMinDateTime.bind(this)
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'g-col12--xs g-col6--md u-marg-bottom' },
            _react2.default.createElement(_reactDatepicker2.default, {
              placeholderText: 'To',
              dateFormat: 'YYYY-MM-DD',
              selected: this.state.filters.max_datetime,
              onChange: this.handleOnChangeMaxDateTime.bind(this)
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'g-col12--xs u-marg-bottom' },
            _react2.default.createElement(
              'div',
              { className: 'u-float-left' },
              _react2.default.createElement(_Checkbox2.default, {
                id: 'has_attachments',
                label: 'Has attachments',
                active: this.state.filters.has_attachments,
                onChange: function onChange() {
                  return _this2.handleOnChange('has_attachments');
                }
              })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'g-col12--xs u-marg-bottom' },
            _react2.default.createElement(
              'div',
              { className: 'u-float-left' },
              _react2.default.createElement(_Checkbox2.default, {
                id: 'has_comments',
                label: 'Has comments',
                active: this.state.filters.has_comments,
                onChange: function onChange() {
                  return _this2.handleOnChange('has_comments');
                }
              })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'g-col12--xs u-marg-bottom' },
            _react2.default.createElement(
              'div',
              { className: 'u-float-left' },
              _react2.default.createElement(_Checkbox2.default, {
                id: 'me',
                label: 'Has me',
                active: this.state.filters.me,
                onChange: function onChange() {
                  return _this2.handleOnChange('me');
                }
              })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'g-col12--xs u-marg-bottom' },
            _react2.default.createElement(
              'div',
              { className: 'u-float-left' },
              _react2.default.createElement(_Checkbox2.default, {
                id: 'is_active',
                label: 'Active',
                active: this.state.filters.is_active,
                onChange: function onChange() {
                  return _this2.handleOnChange('is_active');
                }
              })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'g-col12--xs g-col6--md u-marg-bottom' },
            _react2.default.createElement(
              'button',
              { className: 'o-btn o-btn--2 red u-noBoxShadow',
                onClick: this.resetFilters.bind(this) },
              _react2.default.createElement(
                'span',
                null,
                'Reset'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'g-col12--xs g-col6--md u-marg-bottom' },
            _react2.default.createElement(
              'button',
              { className: 'o-btn o-btn--2 green',
                onClick: this.applyFilters.bind(this) },
              _react2.default.createElement(
                'span',
                null,
                'Apply filters'
              )
            )
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'li',
        { id: 'filter', className: 'app-nav__item filter', ref: function ref(node) {
            _this3.wrapper = node;
          } },
        _react2.default.createElement(
          'a',
          { className: 'app-nav__btn app-nav__btn--icon-txt o-btn o-btn--1',
            onClick: this.toggle.bind(this) },
          _react2.default.createElement(
            'span',
            { className: 'o-btn__icon--left' },
            _react2.default.createElement(
              'span',
              { className: 'md md-lg md-filter-list' },
              _react2.default.createElement('i', { className: 'zmdi zmdi-filter-list' })
            )
          ),
          _react2.default.createElement(
            'span',
            null,
            'Filter'
          )
        ),
        this.renderFilters()
      );
    }
  }]);

  return ConferenceFilters;
}(_react2.default.Component);

exports.default = ConferenceFilters;