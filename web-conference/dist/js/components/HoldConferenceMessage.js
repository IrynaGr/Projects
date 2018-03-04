'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _Loading = require('./Loading');

var _Loading2 = _interopRequireDefault(_Loading);

var _class = require('../utilities/class');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Comments = function (_React$Component) {
  _inherits(Comments, _React$Component);

  function Comments() {
    _classCallCheck(this, Comments);

    return _possibleConstructorReturn(this, (Comments.__proto__ || Object.getPrototypeOf(Comments)).apply(this, arguments));
  }

  _createClass(Comments, [{
    key: 'renderComments',
    value: function renderComments() {
      if (this.props.loading) {
        return _react2.default.createElement(_Loading2.default, null);
      } else if (this.props.comments.length > 0) {
        return this.props.comments.map(function (comment, i) {
          return _react2.default.createElement(
            'article',
            { key: i, className: 'o-comment' },
            _react2.default.createElement(
              'a',
              { className: 'o-comment__left o-userImage o-userImage--30' },
              _react2.default.createElement('img', { src: comment.user.image, alt: comment.user.name })
            ),
            _react2.default.createElement(
              'section',
              { className: 'o-comment__right' },
              _react2.default.createElement(
                'a',
                { className: 'o-comment__username' },
                comment.user.name
              ),
              _react2.default.createElement(
                'p',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'paragraph-first' },
                  comment.text
                )
              ),
              _react2.default.createElement(
                'ul',
                { className: 'o-comment__info' },
                _react2.default.createElement(
                  'li',
                  null,
                  (0, _moment2.default)(comment.created_at).fromNow()
                )
              )
            )
          );
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { className: (0, _class.classNames)('u-marg-bottom', {
            'o-comments__container': !this.props.loading
          }) },
        this.renderComments()
      );
    }
  }]);

  return Comments;
}(_react2.default.Component);

Comments.defaultProps = {
  comments: [],
  loading: false
};

exports.default = Comments;