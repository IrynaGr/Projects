'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ConferenceFilters = require('./ConferenceFilters');

var _ConferenceFilters2 = _interopRequireDefault(_ConferenceFilters);

var _ConferenceViewList = require('./ConferenceViewList');

var _ConferenceViewList2 = _interopRequireDefault(_ConferenceViewList);

var _Pagination = require('./Pagination');

var _Pagination2 = _interopRequireDefault(_Pagination);

var _Detail = require('./Detail');

var _Detail2 = _interopRequireDefault(_Detail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListView = function (_React$Component) {
  _inherits(ListView, _React$Component);

  function ListView(props) {
    _classCallCheck(this, ListView);

    var _this = _possibleConstructorReturn(this, (ListView.__proto__ || Object.getPrototypeOf(ListView)).call(this, props));

    _this.state = {
      list: null,
      conferences: [{
        id: 3,
        title: 'Title',
        date: 'February, 22, 2018 2:00 PM',
        description: 'description',
        finished: false,
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
        keywords: 'IKEA, release, tech preparation'
      }, {
        id: 2,
        title: 'Title',
        date: 'January, 11, 2018 10:00 AM',
        description: 'description',
        finished: true,
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
        keywords: 'BNP work'
      }, {
        id: 1,
        title: 'Title',
        date: 'December, 22, 2017 11:00 AM',
        description: 'description',
        finished: true,
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
        }, {
          image: 'https://media.platform.co.nl/media/profiles/images/201611/alex-kleur1-180px.jpg.240x240_q85_crop.jpg',
          name: 'Alex',
          active: false,
          id: '4'
        }, {
          image: 'https://media.platform.co.nl/media/profiles/images/201707/UCMexyEt_400x400.jpeg.240x240_q85_crop.jpg',
          name: 'Roel',
          active: false,
          id: '5'
        }, {
          image: 'https://media.platform.co.nl/media/profiles/images/201506/IMG_20150123_202617.jpg.240x240_q85_crop.jpg',
          name: 'Jordy',
          active: false,
          id: '6'
        }],
        keywords: 'new ideas, development, marketing'
      }]
    };
    return _this;
  }

  _createClass(ListView, [{
    key: 'holdDetail',
    value: function holdDetail() {
      var newList = this.state.list === null ? _react2.default.createElement(_Detail2.default, null) : null;
      this.setState({ list: newList });
      var remotes = document.getElementById('remotes');
      if (newList) {
        remotes.remove();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'conferenceList' },
        this.state.list,
        this.state.list == null && _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_ConferenceFilters2.default, null),
          _react2.default.createElement(
            'a',
            { onClick: this.holdDetail.bind(this) },
            _react2.default.createElement(_ConferenceViewList2.default, { conferences: this.state.conferences })
          ),
          _react2.default.createElement(_Pagination2.default, null)
        )
      );
    }
  }]);

  return ListView;
}(_react2.default.Component);

exports.default = ListView;