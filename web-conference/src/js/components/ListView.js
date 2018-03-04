import React from 'react'
import ConferenceFilters from './ConferenceFilters'
import ConferenceViewList from './ConferenceViewList'
import Pagination from './Pagination'
import Detail from './Detail'

class ListView extends React.Component { 
  constructor(props){
    super(props)
    this.state = {
      list: null,
      conferences: [{
        id: 3,
        title: 'Title',
        date: 'February, 22, 2018 2:00 PM',
        description: 'description',
        finished: false,
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
        keywords: 'IKEA, release, tech preparation'
      },
      {
        id: 2,
        title: 'Title',
        date: 'January, 11, 2018 10:00 AM',
        description: 'description',
        finished: true,
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
        keywords: 'BNP work'
      },
      {
        id: 1,
        title: 'Title',
        date: 'December, 22, 2017 11:00 AM',
        description: 'description',
        finished: true,
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
        },
        {
          image: 'https://media.platform.co.nl/media/profiles/images/201611/alex-kleur1-180px.jpg.240x240_q85_crop.jpg',
          name: 'Alex',
          active: false,
          id: '4',
        },
        {
          image: 'https://media.platform.co.nl/media/profiles/images/201707/UCMexyEt_400x400.jpeg.240x240_q85_crop.jpg',
          name: 'Roel',
          active: false,
          id: '5',
        },
        {
          image: 'https://media.platform.co.nl/media/profiles/images/201506/IMG_20150123_202617.jpg.240x240_q85_crop.jpg',
          name: 'Jordy',
          active: false,
          id: '6',
        }],
        keywords: 'new ideas, development, marketing'
      }],
    }
  }

  holdDetail() {
    let newList = this.state.list === null ? <Detail/> : null
    this.setState({list: newList}) 
    let remotes = document.getElementById('remotes')
    if(newList) {
      remotes.remove()
    }
  }

   
  render() {
    return(
      <div className='conferenceList'>
        {this.state.list}
        {this.state.list == null &&
        <div>
          <ConferenceFilters/>
          <a onClick={this.holdDetail.bind(this)}><ConferenceViewList conferences={this.state.conferences}/></a>
          <Pagination/>
        </div>
        }
      </div>
    )
  }
}

export default ListView