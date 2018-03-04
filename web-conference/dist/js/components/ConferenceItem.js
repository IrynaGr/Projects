"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ConferenceItem = function (_React$Component) {
  _inherits(ConferenceItem, _React$Component);

  function ConferenceItem(props) {
    _classCallCheck(this, ConferenceItem);

    return _possibleConstructorReturn(this, (ConferenceItem.__proto__ || Object.getPrototypeOf(ConferenceItem)).call(this, props));
  }

  _createClass(ConferenceItem, [{
    key: "render",
    value: function render() {
      var members = this.props.conference.members;
      var listMember = members.map(function (member) {
        if (members) {
          return _react2.default.createElement(
            "p",
            { key: member.id },
            _react2.default.createElement("img", { width: "30", height: "30", src: member.image, alt: member.name })
          );
        } else {
          return _react2.default.createElement(
            "p",
            null,
            "No members"
          );
        }
      });

      if (listMember.length > 5) {
        listMember = listMember.slice(0, 5);
      }

      var online = '';
      if (this.props.conference.finished == false) {
        online = _react2.default.createElement("i", { className: "zmdi zmdi-circle online" });
      } else {
        online = _react2.default.createElement("i", { className: "zmdi zmdi-circle offline" });
      }

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(
            "ul",
            null,
            _react2.default.createElement(
              "li",
              null,
              _react2.default.createElement(
                "div",
                { className: "c-conference-item" },
                _react2.default.createElement(
                  "div",
                  { className: "g-row12" },
                  _react2.default.createElement(
                    "div",
                    { className: "g-col1--xs u-align-center" },
                    online
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "g-col1--xs u-align-center" },
                    this.props.conference.id
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "g-col3--xs" },
                    _react2.default.createElement(
                      "div",
                      { className: "title" },
                      this.props.conference.title
                    ),
                    _react2.default.createElement(
                      "div",
                      { className: "keywords" },
                      this.props.conference.keywords
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "g-col5--xs u-align-center" },
                    _react2.default.createElement(
                      "div",
                      { className: "listMember" },
                      listMember
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "g-col2--xs u-align-center" },
                    this.props.conference.date
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return ConferenceItem;
}(_react2.default.Component);

exports.default = ConferenceItem;