import React from 'react'

class ChildComponent extends React.Component {
  render() {
    return (
       <div className={'c-form__control'}>
          <label htmlFor={this.props.id}>{this.props.text}<i className={'required-icon'}>{this.props.sign}</i></label>
          <input ref='title' className={this.props.className} id={this.props.id} name='first' placeholder={this.props.placeholder} type={this.props.type} required/>
      </div>
    )
  }
}

export default ChildComponent
