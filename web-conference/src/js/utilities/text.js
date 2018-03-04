export function trim(str) {
  return String(str).replace(/^\s+|\s+$/g, '')
}

export function stripHashtags(str) {
  return str.replace(new RegExp('#', 'g'), '')
}

export function getLabels(str='') {
  return str.match(new RegExp('#([^\\s]*)', 'g'), '') || []
}

export function stripLabels(str) {
  return str.replace(new RegExp('#([^\\s]*)', 'g'), '')
}