'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ListView = require('./ListView');

var _ListView2 = _interopRequireDefault(_ListView);

var _Create = require('./Create');

var _Create2 = _interopRequireDefault(_Create);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      ListView: true,
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

  _createClass(App, [{
    key: 'handle',
    value: function handle() {
      var newListView = this.state.ListView === true ? false : true;
      this.setState({ ListView: newListView });
      var remotes = document.getElementById('remotes');
      if (_ListView2.default) {
        remotes.remove();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var text = '';
      var page = null;
      var icon = '';
      if (this.state.ListView) {
        page = _react2.default.createElement(_ListView2.default, null);
        text = 'Organize conference';
        icon = 'zmdi zmdi-calendar-check';
      } else {
        page = _react2.default.createElement(_Create2.default, null);
        text = 'Back to the list';
        icon = 'zmdi zmdi-skip-previous';
      }
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'ul',
          { className: 'c-nav js-nav' },
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { className: 'c-nav__item', href: '/timeline/' },
              'Activitystream'
            )
          ),
          _react2.default.createElement(
            'li',
            { className: 'teams-nav-item' },
            _react2.default.createElement(
              'a',
              { className: 'c-nav__item state-subnav js-nav-teams js-nav-subnav-trigger', href: '' },
              'Channels',
              _react2.default.createElement(
                'span',
                { className: 'item-nav-icon js-item-nav-icon' },
                _react2.default.createElement('i', { className: 'md md-chevron-right' })
              )
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { className: 'c-nav__item', href: '/leden/' },
              'Colleagues'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { className: 'c-nav__item', href: '/knowledge/question/all' },
              'Questions & Answers'
            )
          ),
          _react2.default.createElement(
            'li',
            { className: 'links-nav-item state-groups-active' },
            _react2.default.createElement(
              'a',
              { className: 'c-nav__item state-subnav js-nav-portal js-nav-subnav-trigger' },
              'Portal',
              _react2.default.createElement(
                'span',
                { className: 'item-nav-icon js-item-nav-icon' },
                _react2.default.createElement('i', { className: 'md md-chevron-right' })
              )
            )
          )
        ),
        _react2.default.createElement(
          'ul',
          { className: 'c-breadcrumbs' },
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '/' },
              'Stamkracht'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '/groups/' },
              'Channels'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '/stamkracht/' },
              'Stamkracht'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 's-wrapper__nav' },
          _react2.default.createElement(
            'section',
            { className: 'c-sidebar' },
            _react2.default.createElement(
              'header',
              { className: 'c-sidebar__heading' },
              _react2.default.createElement('div', { className: 'c-sidebar__heading-bg' }),
              _react2.default.createElement(
                'h1',
                null,
                'Stamkracht'
              )
            ),
            _react2.default.createElement(
              'article',
              { className: 'c-sidebar__header' },
              _react2.default.createElement(
                'div',
                { className: 'c-sidebar__header-info' },
                _react2.default.createElement(
                  'p',
                  { className: 'amount' },
                  _react2.default.createElement('span', { className: 'md md-person' }),
                  '16'
                ),
                _react2.default.createElement(
                  'p',
                  { className: 'amount' },
                  _react2.default.createElement('span', { className: 'md md-list' }),
                  '2422'
                )
              ),
              _react2.default.createElement(
                'form',
                { action: '/stamkracht/groep/membership/delete', method: 'post' },
                _react2.default.createElement('input', { type: 'hidden', name: 'csrfmiddlewaretoken', value: 'LbI2N7ftzMd554Zzu2Udy0r4nc5WLOlz1pxsHnBIW5N1UL4yLjgHxMkIhxj9PGpV' }),
                _react2.default.createElement(
                  'button',
                  { className: 'c-sidebar__button c-button' },
                  'Leave Channel'
                )
              )
            ),
            _react2.default.createElement(
              'ul',
              { className: 'c-sidebar__nav' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { className: 'c-sidebar__nav-item timeline ', href: '/stamkracht/timeline/' },
                  'Dashboard'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { className: 'c-sidebar__nav-item tickets state-active', href: '/stamkracht/16094/tickets/' },
                  'Conferences'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { className: 'c-sidebar__nav-item tickets', href: '/stamkracht/16094/tickets/' },
                  'Tickets'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { className: 'c-sidebar__nav-item tickets ', href: '/stamkracht/16138/teams/' },
                  'Teams'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { className: 'c-sidebar__nav-item tickets ', href: '/stamkracht/16180/sprints/' },
                  'Sprints'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { className: 'c-sidebar__nav-item blog ', href: '/stamkracht/336/blog/' },
                  'Weblog'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { className: 'c-sidebar__nav-item blog ', href: '/stamkracht/13927/blog2/' },
                  'Tech Articles'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { className: 'c-sidebar__nav-item wiki ', href: '/stamkracht/337/wiki/' },
                  'Info'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { className: 'c-sidebar__nav-item survey ', href: '/stamkracht/338/survey/' },
                  'Survey'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { className: 'c-sidebar__nav-item tasks ', href: '/stamkracht/339/tasks/' },
                  'Tasks'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { className: 'c-sidebar__nav-item files ', href: '/stamkracht/341/files/' },
                  'Files'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { className: 'c-sidebar__nav-item ideas ', href: '/stamkracht/342/ideas/' },
                  'Ideas'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { className: 'c-sidebar__nav-item calendar ', href: '/stamkracht/343/kalender/' },
                  'Kalender'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { className: 'c-sidebar__nav-item games ', href: '/stamkracht/10950/games/' },
                  'Games'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { className: 'c-sidebar__nav-item members ', href: '/stamkracht/groep/leden' },
                  'People'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { className: 'c-sidebar__nav-item blog ', href: '/stamkracht/16130/newsletter/' },
                  'Newsletter'
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'li',
          { id: 'remotes', className: 'app-nav__item', ref: function ref(node) {
              _this2.wrapper = node;
            } },
          _react2.default.createElement(
            'a',
            { className: 'app-nav__btn app-nav__btn--icon-txt app-nav__btn-lenght o-btn o-btn--1',
              onClick: this.handle.bind(this) },
            _react2.default.createElement(
              'span',
              { className: 'o-btn__icon--left' },
              _react2.default.createElement(
                'span',
                { className: 'md md-lg md-filter-list' },
                _react2.default.createElement('i', { className: icon })
              )
            ),
            _react2.default.createElement(
              'span',
              null,
              text
            )
          )
        ),
        page
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;