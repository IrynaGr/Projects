import React from 'react'


class ChildComponentDescription extends React.Component {
  render() {
    return (
      <div className={'c-form__control'}>
      <label htmlFor={this.props.id}>{this.props.text}</label>
      <textarea className={this.props.className} id={this.props.id} name={this.props.name} placeholder={this.props.placeholder} cols={this.props.cols} rows={this.props.rows}/>
      </div>
    )
  }
}

export default ChildComponentDescription
