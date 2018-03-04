'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trim = trim;
exports.stripHashtags = stripHashtags;
exports.getLabels = getLabels;
exports.stripLabels = stripLabels;
function trim(str) {
  return String(str).replace(/^\s+|\s+$/g, '');
}

function stripHashtags(str) {
  return str.replace(new RegExp('#', 'g'), '');
}

function getLabels() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  return str.match(new RegExp('#([^\\s]*)', 'g'), '') || [];
}

function stripLabels(str) {
  return str.replace(new RegExp('#([^\\s]*)', 'g'), '');
}