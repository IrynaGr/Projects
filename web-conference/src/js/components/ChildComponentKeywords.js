import React from 'react'
import createClass from 'create-react-class'
import PropTypes from 'prop-types'
import Select from 'react-select'

const KeyWords = [{}]

const WhatKeyWords = [
{ label: '', value: '', disabled: true },
].concat(KeyWords.slice(1))

var ChildComponentKeywords=createClass({
  displayName: 'ChildComponentKeywords',
  propTypes: {
    label: PropTypes.string,
  },
  getInitialState () {
    return {
      removeSelected: true,
      disabled: false,
      crazy: false,
      stayOpen: false,
      value: [],
    }
  },
  handleSelectChange (value) {
    this.setState({ value })
  },
  render() {
    const{crazy,disabled,stayOpen,value }=this.state
    const options=crazy?WhatKeyWords:KeyWords
    return (
      <div className={'event__input--tags '}>
      <label htmlFor={this.props.id}>{this.props.text}</label>
      <p className={'form__help'}>Choose one of the suggested tags, or confirm your own tag by pressing the Enter key.</p>
        <div className="section">
         <Select.Creatable className={'Select'}
          closeOnSelect={!stayOpen}
          disabled={disabled}
          multi={true}
          onChange={this.handleSelectChange}
          options={options}
          simpleValue={true}
          value={value}
          />
        </div>
      </div>
    )
  }
})

export default ChildComponentKeywords
