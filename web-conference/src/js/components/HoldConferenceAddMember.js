import React from 'react'
import createClass from 'create-react-class'
import PropTypes from 'prop-types'
import Select from 'react-select'

const Members = [
{ label: 'Emil', value: 'Emil' },
{ label: 'Gleb', value: 'Gleb' },
{ label: 'Inessa', value: 'Inessa' },
{ label: 'Jordy', value: 'Jordy' },
{ label: 'Felicia', value: 'Felicia' },
{ label: 'Silvia', value: 'Silvia' },
]

const WhoAreYou = [
{ label: 'Emil', value: 'Emil', disabled: true },
].concat(Members.slice(1))

var AddNewMember = createClass({
  displayName: 'AddNewMember',
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
  render(){
    const{crazy,disabled,stayOpen,value }=this.state
    const options=crazy?WhoAreYou:Members
    return (
      <div className={'c-form__control selectable addMember'}>
        <label htmlFor={this.props.id}>{this.props.text}</label>
        <div className="section section-addMember">
          <Select.Creatable className={'Select select-addMember'}
          closeOnSelect={!stayOpen}
          disabled={disabled}
          multi={true}
          onChange={this.handleSelectChange}
          options={options}
          simpleValue={true}
          value={value}
          />
          <button className={'app-nav__btn o-btn o-btn--1'} name={'submit'}>
            <span className={'o-btn__icon—left'}><span className={'md md-save'}></span></span>
            <p><i className="zmdi zmdi-plus"></i><span>{this.props.text}</span></p>Invite people
          </button>
        </div>
      </div>
    )
  }
})
export default AddNewMember