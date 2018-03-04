'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTextareaAutosize = require('react-textarea-autosize');

var _reactTextareaAutosize2 = _interopRequireDefault(_reactTextareaAutosize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WriteNotes = function (_React$Component) {
  _inherits(WriteNotes, _React$Component);

  function WriteNotes(props) {
    _classCallCheck(this, WriteNotes);

    var _this = _possibleConstructorReturn(this, (WriteNotes.__proto__ || Object.getPrototypeOf(WriteNotes)).call(this, props));

    _this.state = {
      isOpen: false
    };
    return _this;
  }

  _createClass(WriteNotes, [{
    key: 'toggleNotes',
    value: function toggleNotes() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }, {
    key: 'downloadTxtFile',
    value: function downloadTxtFile() {
      var element = document.createElement('a');
      var file = new Blob([document.getElementById('MyTextarea').value], { type: 'text/plain' });
      element.href = URL.createObjectURL(file);
      element.download = 'myFile.txt';
      element.click();
    }
  }, {
    key: 'render',
    value: function render() {
      var button = _react2.default.createElement(
        'button',
        { className: 'app-nav__btn o-btn o-btn--1 buttonForNotes', onClick: this.toggleNotes.bind(this) },
        _react2.default.createElement('i', { className: 'zmdi zmdi-edit' }),
        this.state.isOpen ? 'Hide notes' : 'Write notes'
      );
      return _react2.default.createElement(
        'div',
        null,
        button,
        _react2.default.createElement(_reactTextareaAutosize2.default, { id: 'MyTextarea', className: 'writeNotes ' + (this.state.isOpen ? 'open' : 'hide') }),
        _react2.default.createElement(
          'button',
          { className: 'downloadNotes app-nav__btn o-btn o-btn--1 ' + (this.state.isOpen ? 'open' : 'hide'), onClick: this.downloadTxtFile },
          'Download txt'
        )
      );
    }
  }]);

  return WriteNotes;
}(_react2.default.Component);

var note = [{}];

var HoldConferenceNotes = function (_React$Component2) {
  _inherits(HoldConferenceNotes, _React$Component2);

  function HoldConferenceNotes() {
    _classCallCheck(this, HoldConferenceNotes);

    return _possibleConstructorReturn(this, (HoldConferenceNotes.__proto__ || Object.getPrototypeOf(HoldConferenceNotes)).apply(this, arguments));
  }

  _createClass(HoldConferenceNotes, [{
    key: 'renderNotes',
    value: function renderNotes(item, key) {
      return _react2.default.createElement(WriteNotes, { key: key });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        note.map(this.renderNotes)
      );
    }
  }]);

  return HoldConferenceNotes;
}(_react2.default.Component);

exports.default = HoldConferenceNotes;