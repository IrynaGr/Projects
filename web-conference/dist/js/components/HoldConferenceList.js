'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HoldConferenceList = function (_React$Component) {
  _inherits(HoldConferenceList, _React$Component);

  function HoldConferenceList(props) {
    _classCallCheck(this, HoldConferenceList);

    var _this = _possibleConstructorReturn(this, (HoldConferenceList.__proto__ || Object.getPrototypeOf(HoldConferenceList)).call(this, props));

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

  _createClass(HoldConferenceList, [{
    key: 'render',
    value: function render() {
      var members = this.state.conferences.members;
      var listMember = members.map(function (member) {
        if (member.active) {
          return _react2.default.createElement(
            'li',
            { className: 'active', key: member.id },
            _react2.default.createElement(
              'p',
              { className: 'member_position' },
              _react2.default.createElement('img', { className: 'member_picture', src: member.image, alt: member.name, align: 'middle' }),
              member.name,
              _react2.default.createElement(
                'a',
                { href: '#' },
                _react2.default.createElement('i', { className: 'zmdi star zmdi-circle online' })
              )
            )
          );
        } else {
          return _react2.default.createElement(
            'li',
            { className: 'non-active', key: member.id },
            _react2.default.createElement(
              'p',
              { className: 'member_position' },
              _react2.default.createElement('img', { className: 'member_picture', src: member.image, alt: member.name, align: 'middle' }),
              member.name,
              _react2.default.createElement(
                'a',
                { href: '#' },
                _react2.default.createElement('i', { className: 'zmdi star zmdi-circle offline' })
              )
            )
          );
        }
      });

      return _react2.default.createElement(
        'div',
        { className: 'listOfMembers' },
        _react2.default.createElement(
          'h3',
          null,
          'Members'
        ),
        _react2.default.createElement(
          'ul',
          null,
          listMember
        )
      );
    }
  }]);

  return HoldConferenceList;
}(_react2.default.Component);

exports.default = HoldConferenceList;