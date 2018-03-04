import React from 'react'
import { classNames } from '../utilities/class'
import { stripLabels, trim } from '../utilities/text'
import Comments from './HoldConferenceMessage'


class ChatTest extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      active: false,
    }
  }

  checkInput(input) {
    return !!trim(stripLabels(input))
  }

  submitComment(input) {
    const comment = trim(input)
    if ( this.checkInput(comment) ) {
      this.props.onSubmit({text: comment})
      this.input.value = ''
      this.input.blur()
    }
  }

  handleOnFocus() {
    this.setState({active: true})
  }

  handleOnBlur() {
    this.setState({active: false})
  }

  handleOnMouseDown() {
    let input = this.input.value
    this.submitComment(input)
  }

  handleOnKeyDown(event) {
    let input = event.target.value
    if ( event.keyCode === 13 ) {
      this.submitComment(input)
    }
  }

  render() {
    return (
      <div className="o-reaction__form">
        <textarea
          className={ classNames('o-reaction__input', {
            'is-active': this.state.active,
          }) }
          placeholder="Write a comment."
          tabIndex="1"
          ref={(input) => { this.input = input }}
          onFocus={this.handleOnFocus.bind(this)}
          onBlur={this.handleOnBlur.bind(this)}
          onKeyDown={this.handleOnKeyDown.bind(this)} />
        <button type="submit"
          className={
            classNames('o-reaction__btn--submit o-btn o-btn--3 grey u-noBoxShadow', {
              'is-shown': this.state.active,
            })}
          onMouseDown={this.handleOnMouseDown.bind(this)}>
          <span className="md md-send"><i className="zmdi zmdi-mail-send"></i></span>
        </button>
        <Comments/>
      </div>
    )
  }
}

ChatTest.defaultProps = {
  onSubmit: undefined,
}

export default ChatTest