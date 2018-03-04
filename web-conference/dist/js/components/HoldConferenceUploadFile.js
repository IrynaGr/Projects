'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDropzone = require('react-dropzone');

var _reactDropzone2 = _interopRequireDefault(_reactDropzone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HoldConferenceUploadFile = function (_React$Component) {
  _inherits(HoldConferenceUploadFile, _React$Component);

  function HoldConferenceUploadFile(props) {
    _classCallCheck(this, HoldConferenceUploadFile);

    var _this = _possibleConstructorReturn(this, (HoldConferenceUploadFile.__proto__ || Object.getPrototypeOf(HoldConferenceUploadFile)).call(this, props));

    _this.state = { preview: null };
    _this.handleDrop = _this.handleDrop.bind(_this);
    return _this;
  }

  _createClass(HoldConferenceUploadFile, [{
    key: 'handleDrop',
    value: function handleDrop(_ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          preview = _ref2[0].preview;

      this.setState({ preview: preview });
    }
  }, {
    key: 'render',
    value: function render() {
      var preview = this.state.preview;

      return _react2.default.createElement(
        'div',
        { className: 'uplodeFile' },
        _react2.default.createElement(
          'section',
          { className: 'uplodeZona' },
          _react2.default.createElement(
            _reactDropzone2.default,
            { className: 'uplodeDrop', onDrop: this.handleDrop, accept: '', multiple: false },
            _react2.default.createElement(
              'a',
              { className: 'o-attachment__btn-add o-btn o-btn--2' },
              _react2.default.createElement('i', { className: 'zmdi zmdi-plus-circle-o' }),
              _react2.default.createElement(
                'span',
                null,
                'Add files'
              )
            )
          ),
          preview
        )
      );
    }
  }]);

  return HoldConferenceUploadFile;
}(_react2.default.Component);

exports.default = HoldConferenceUploadFile;