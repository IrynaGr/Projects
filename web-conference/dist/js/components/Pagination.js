'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactPager = require('react-pager');

var _reactPager2 = _interopRequireDefault(_reactPager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pagination = function (_React$Component) {
  _inherits(Pagination, _React$Component);

  function Pagination(props) {
    _classCallCheck(this, Pagination);

    var _this = _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call(this, props));

    _this.handlePageChanged = _this.handlePageChanged.bind(_this);

    _this.state = {
      total: 11,
      current: 0,
      visiblePage: 3
    };
    return _this;
  }

  _createClass(Pagination, [{
    key: 'handlePageChanged',
    value: function handlePageChanged(newPage) {
      this.setState({ current: newPage });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reactPager2.default, {
        total: this.state.total,
        current: this.state.current,
        visiblePages: this.state.visiblePage,
        titles: { first: _react2.default.createElement('i', { className: 'zmdi zmdi-long-arrow-left' }), last: _react2.default.createElement('i', { className: 'zmdi zmdi-long-arrow-right' }) },
        className: 'pagination-sm pull-right',
        onPageChanged: this.handlePageChanged
      });
    }
  }]);

  return Pagination;
}(_react2.default.Component);

exports.default = Pagination;