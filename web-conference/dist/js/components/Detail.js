'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _HoldConferenceVideo = require('./HoldConferenceVideo');

var _HoldConferenceVideo2 = _interopRequireDefault(_HoldConferenceVideo);

var _HoldConferenceUploadFile = require('./HoldConferenceUploadFile');

var _HoldConferenceUploadFile2 = _interopRequireDefault(_HoldConferenceUploadFile);

var _HoldConferenceComments = require('./HoldConferenceComments');

var _HoldConferenceComments2 = _interopRequireDefault(_HoldConferenceComments);

var _HoldConferenceList = require('./HoldConferenceList');

var _HoldConferenceList2 = _interopRequireDefault(_HoldConferenceList);

var _HoldConferenceAddMember = require('./HoldConferenceAddMember');

var _HoldConferenceAddMember2 = _interopRequireDefault(_HoldConferenceAddMember);

var _HoldConferenceNotes = require('./HoldConferenceNotes');

var _HoldConferenceNotes2 = _interopRequireDefault(_HoldConferenceNotes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Detail = function (_React$Component) {
  _inherits(Detail, _React$Component);

  function Detail(props) {
    _classCallCheck(this, Detail);

    var _this = _possibleConstructorReturn(this, (Detail.__proto__ || Object.getPrototypeOf(Detail)).call(this, props));

    _this.state = {
      conferences: {
        id: 1,
        title: 'Title',
        date: 'start_date',
        description: 'description',
        members: [{
          image: 'https://media.platform.co.nl/media/profiles/images/201608/emil-kleur.jpg.240x240_q85_crop.jpg',
          name: 'Emil',
          active: true,
          id: '1'
        }, {
          image: 'https://media.platform.co.nl/media/profiles/images/201710/1916056_iQfXKb8.jpeg.240x240_q85_crop.jpg',
          name: 'Gleb',
          active: false,
          id: '2'
        }, {
          image: 'https://media.platform.co.nl/media/profiles/images/201701/Schermafbeelding_2017-01-18_om_13.09.42.png.240x240_q85_crop.png',
          name: 'Felicia',
          active: false,
          id: '3'
        }],
        keywords: 'keywords'
      }
    };
    return _this;
  }

  _createClass(Detail, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'holdConference', id: this.state.id },
        _react2.default.createElement(
          'div',
          { className: 'rightSideOfCall' },
          _react2.default.createElement(
            'div',
            { className: 'callMainFon' },
            _react2.default.createElement(
              'h3',
              null,
              this.state.conferences.title
            ),
            _react2.default.createElement(_HoldConferenceVideo2.default, { title: this.state.title }),
            _react2.default.createElement(_HoldConferenceUploadFile2.default, null),
            _react2.default.createElement(_HoldConferenceComments2.default, null)
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'leftSideOfCall' },
          _react2.default.createElement(
            'div',
            { className: 'callMainFon' },
            _react2.default.createElement(_HoldConferenceList2.default, { members: this.state.members }),
            _react2.default.createElement(_HoldConferenceAddMember2.default, null)
          ),
          _react2.default.createElement(_HoldConferenceNotes2.default, null)
        )
      );
    }
  }]);

  return Detail;
}(_react2.default.Component);

exports.default = Detail;