import React from 'react'
import ChildComponent from './ChildComponent'
import ChildComponentData from './ChildComponentData'
import ChildComponentDescription from './ChildComponentDescription'
import MultiSelectField from './ChildComponentMembers'
import ChildComponentCheck from './ChildComponentCheck'
import ChildComponentKeywords from './ChildComponentKeywords'
import ChildComponentButton from './ChildComponentButton'


class Create extends React.Component {
  
  render() {
    return (
      <form className='organizeConference' id={this.props.id}>
        <ChildComponent className='textinput textInput form-control' type='text' placeholder='New event' text='Title' id='id_title' sign='*' required/>
        <ChildComponentData text='Start date' id='id_start_date_0' sign='*' required/>
        <ChildComponentDescription className='textarea form-control' cols='40' rows='3' text='Description' id='id_description' name='description'/>
        <MultiSelectField text='Members' id='id_member'/>
        <ChildComponentCheck className='inline-inputs datepicker' type='checkbox' text='Send invitation by email' id='id_checkbox' name='checkbox'/>
        <ChildComponentKeywords placeholder='Add keywords.' text='Keywords:' id='id_tags'/>
        <ChildComponentButton/>
      </form>
    )
  }
}

export default Create