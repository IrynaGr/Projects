import React from 'react'

class HoldConferenceList extends React.Component {
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
    const members = this.state.conferences.members
    var listMember = members.map((member) => {
      if(member.active) {
        return (<li className='active' key={member.id}><p className='member_position'><img className='member_picture' src={member.image} alt={member.name} align='middle'/>{member.name}<a href='#'><i className="zmdi star zmdi-circle online"></i></a></p></li>)
      } else {
        return (<li className='non-active' key={member.id}><p className='member_position'><img className='member_picture' src={member.image} alt={member.name} align='middle'/>{member.name}<a href='#'><i className="zmdi star zmdi-circle offline"></i></a></p></li>)
      }
    })
    
    return(
      <div className='listOfMembers'>
        <h3>Members</h3>
        <ul>
          {listMember}
        </ul>
      </div>
    )
  }
}

export default HoldConferenceList