import { stripHashtags } from '../utilities/text'


class LocationService {

  constructor(onChange=undefined) {
    window.onhashchange = onChange
  }

  get() {
    return stripHashtags(document.location.hash)
  }

  set(hash) {
    document.location.hash = hash
  }
}

export default LocationService