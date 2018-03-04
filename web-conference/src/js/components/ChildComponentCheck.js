import React from 'react'


class ChildComponentCheck extends React.Component {
  render() {
    return (
      <div className={'c-form__control'}>
      <input className={this.props.className} id={this.props.id} name={this.props.name} type={this.props.type}/>
      <label htmlFor={this.props.id}>{this.props.text}</label>
      </div>
    )
  }
}

export default ChildComponentCheck
