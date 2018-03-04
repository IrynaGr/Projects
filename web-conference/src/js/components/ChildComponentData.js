import React from 'react'
import DatePicker from 'react-datepicker'

class ChildComponentData extends React.Component {

  constructor(props){
    super(props)

    this.state = {}
    this.handleChanged = this.handleChanged.bind(this)
  }  
  handleChanged(d){
    this.setState({date: d})
  }
  render() {
    return (
      <div className={'c-form__control'}>
        <label htmlFor={this.props.id}>{this.props.text}<i className={'required-icon'}>{this.props.sign}</i></label>
        <DatePicker
          placeholderText="Click to select a data and time"
          selected={this.state.date}
          onChange={this.handleChanged}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="LLL"
          required={true}
        />
      </div>
    )
  }
}

export default ChildComponentData
