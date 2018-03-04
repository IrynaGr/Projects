export function classNames(classNames='', conditionalClassNames={}) {
  return `${classNames} `.concat(Object.keys(conditionalClassNames).filter((key) => {
    return conditionalClassNames[key]
  }).join(' '))
}

export function parentHasClass(element, className) {
  if ( element.className.split(' ').indexOf(className) >= 0 ) {
    return true
  }
  return element.parentNode && this.handleClickOutside(element.parentNode, className)
}