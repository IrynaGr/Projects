import React from 'react'

class ConferenceItem extends React.Component {

  constructor(props){
    super(props)
  }

  render() {
    const members = this.props.conference.members
    var listMember = members.map((member) => {
      if (members) {
        return (<p key={member.id}><img width="30" height="30" src={member.image} alt={member.name}/></p>)
      } else {
        return (<p>No members</p>)
      }
    })

    if (listMember.length > 5) {
      listMember = listMember.slice(0, 5)
    }
    
    var online = ''
    if(this.props.conference.finished ==false) {
      (online = <i className="zmdi zmdi-circle online"></i>)
    } else {
      (online = <i className="zmdi zmdi-circle offline"></i>)
    }

    
      
    return(
      <div>
        <div>
          <ul>
            <li>
              <div className="c-conference-item">
                <div className="g-row12">
                  <div className="g-col1--xs u-align-center">
                    {online}
                  </div>
                  <div className="g-col1--xs u-align-center">
                    {this.props.conference.id}
                  </div>
                  <div className="g-col3--xs">
                    <div className="title">
                      {this.props.conference.title}
                    </div>
                    <div className='keywords'>
                      {this.props.conference.keywords}
                    </div>
                  </div>
                  <div className="g-col5--xs u-align-center">
                    <div className='listMember'>{listMember}</div>
                  </div>
                  <div className="g-col2--xs u-align-center">
                    {this.props.conference.date}
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default ConferenceItem