'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.classNames = classNames;
exports.parentHasClass = parentHasClass;
function classNames() {
  var classNames = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var conditionalClassNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return (classNames + ' ').concat(Object.keys(conditionalClassNames).filter(function (key) {
    return conditionalClassNames[key];
  }).join(' '));
}

function parentHasClass(element, className) {
  if (element.className.split(' ').indexOf(className) >= 0) {
    return true;
  }
  return element.parentNode && this.handleClickOutside(element.parentNode, className);
}