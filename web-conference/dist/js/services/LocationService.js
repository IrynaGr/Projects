'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _text = require('../utilities/text');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LocationService = function () {
  function LocationService() {
    var onChange = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

    _classCallCheck(this, LocationService);

    window.onhashchange = onChange;
  }

  _createClass(LocationService, [{
    key: 'get',
    value: function get() {
      return (0, _text.stripHashtags)(document.location.hash);
    }
  }, {
    key: 'set',
    value: function set(hash) {
      document.location.hash = hash;
    }
  }]);

  return LocationService;
}();

exports.default = LocationService;