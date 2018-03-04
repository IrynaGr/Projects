import React from 'react'


class ChildComponentButton extends React.Component {
  render() {
    return (
      <ul className={'app-nav app-nav--right'}>
      <li className={'app-nav__item'}>
      <button className={'app-nav__btn app-nav__btn--icon-txt o-btn o-btn--1 longButton'} name={'submit'}>
      <span className={'o-btn__icon—left'}><span className={'md md-save'}></span></span>
      <p><i className="zmdi zmdi-file"></i><span>Save</span></p>
      </button>
      </li>
      </ul>
    )
  }
}

export default ChildComponentButton
