import React from 'react'
import HoldConferenceVideo from './HoldConferenceVideo'
import HoldConferenceUploadFile from './HoldConferenceUploadFile'
import Chat from './HoldConferenceComments'
import HoldConferenceList from './HoldConferenceList'
import AddNewMember from './HoldConferenceAddMember'
import HoldConferenceNotes from './HoldConferenceNotes'

class Detail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      conferences: {
        id: 1,
        title: 'Title',
        date: 'start_date',
        description: 'description',
        members: [{
          image: 'https://media.platform.co.nl/media/profiles/images/201608/emil-kleur.jpg.240x240_q85_crop.jpg',
          name:'Emil',
          active: true,
          id: '1',
        },
        {
          image: 'https://media.platform.co.nl/media/profiles/images/201710/1916056_iQfXKb8.jpeg.240x240_q85_crop.jpg',
          name: 'Gleb',
          active: false,
          id: '2',
        },
        {
          image: 'https://media.platform.co.nl/media/profiles/images/201701/Schermafbeelding_2017-01-18_om_13.09.42.png.240x240_q85_crop.png',
          name: 'Felicia',
          active: false,
          id: '3',
        }],
        keywords: 'keywords'
      }
    }
  }

  render() {
    return (
      <div className='holdConference' id={this.state.id} >
        <div className='rightSideOfCall'>
          <div className='callMainFon'>
            <h3>{this.state.conferences.title}</h3>
            <HoldConferenceVideo title={this.state.title}/>
            <HoldConferenceUploadFile/>
            <Chat/>
          </div>
        </div>
        <div className='leftSideOfCall'>
          <div className='callMainFon'>
            <HoldConferenceList members={this.state.members}/>
            <AddNewMember/>
          </div>
          <HoldConferenceNotes/>
        </div>
      </div>
    )
  }
}

export default Detail