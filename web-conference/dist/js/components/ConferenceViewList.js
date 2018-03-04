'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ConferenceItem = require('./ConferenceItem');

var _ConferenceItem2 = _interopRequireDefault(_ConferenceItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ConferenceViewList = function (_React$Component) {
  _inherits(ConferenceViewList, _React$Component);

  function ConferenceViewList(props) {
    _classCallCheck(this, ConferenceViewList);

    return _possibleConstructorReturn(this, (ConferenceViewList.__proto__ || Object.getPrototypeOf(ConferenceViewList)).call(this, props));
  }

  _createClass(ConferenceViewList, [{
    key: 'renderHeader',
    value: function renderHeader() {
      return _react2.default.createElement(
        'div',
        { id: 'listHeader', className: 'list_conference-header' },
        _react2.default.createElement(
          'div',
          { className: 'g-row12' },
          _react2.default.createElement(
            'div',
            { className: 'g-col1--xs u-align-center' },
            'Status'
          ),
          _react2.default.createElement(
            'div',
            { className: 'g-col1--xs u-align-center' },
            'ID'
          ),
          _react2.default.createElement(
            'div',
            { className: 'g-col3--xs' },
            'Title of conference'
          ),
          _react2.default.createElement(
            'div',
            { className: 'g-col5--xs u-align-center' },
            'Members'
          ),
          _react2.default.createElement(
            'div',
            { className: 'g-col2--xs u-align-center' },
            'Date'
          )
        )
      );
    }
  }, {
    key: 'renderConferences',
    value: function renderConferences() {
      if (!!this.props.conferences.length) {
        return this.props.conferences.map(function (conference) {
          return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_ConferenceItem2.default, { key: conference.id,
              conference: conference
            })
          );
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'c-conference-list' },
        this.renderHeader(),
        this.renderConferences()
      );
    }
  }]);

  return ConferenceViewList;
}(_react2.default.Component);

exports.default = ConferenceViewList;