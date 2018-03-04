import React from 'react'
import ConferenceItem from './ConferenceItem'

class ConferenceViewList extends React.Component {
  constructor(props){
    super(props)
  }
  

  renderHeader() {
    return (
      <div id='listHeader' className="list_conference-header">
        <div className="g-row12">
          <div className="g-col1--xs u-align-center">Status</div>
          <div className="g-col1--xs u-align-center">ID</div>
          <div className="g-col3--xs">Title of conference</div>
          <div className="g-col5--xs u-align-center">Members</div>
          <div className="g-col2--xs u-align-center">Date</div>
        </div>
      </div>
    )
  }

  renderConferences() {
    if (!!this.props.conferences.length) {
      return this.props.conferences.map((conference) => {
        return (
          <div>
            <ConferenceItem key={conference.id}
            conference={conference}
            />
          </div>
        )
      })
    } 
  }

  
  render() {
    return (
      <div className="c-conference-list">
        {this.renderHeader()}
        {this.renderConferences()}
      </div>
    )
  }
}

export default ConferenceViewList