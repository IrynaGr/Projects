import React from 'react'
import SimpleWebRTC from 'simplewebrtc'

class HoldConferenceVideo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  componentWillMount() {
    this.webrtc = new SimpleWebRTC({
      localVideoEl: 'localVideo',
      remoteVideosEl: 'remotesVideos',
      autoRequestMedia: true
    })
  }

  render(){
    return(
      <div className='screen'>
        <h3>{this.props.title}</h3>
        <div className='videoContainer'>
          <video id="localVideo" className='screenVideo'/>
          <div id="remotesVideos"></div>
        </div>
        <a href=''><i className='gray zmdi zmdi-fullscreen'></i></a>
        <a href=''><i className='list-group-item gray zmdi zmdi-phone-end'></i></a>
        <a href=''><i className='list-group-item gray zmdi zmdi-volume-up'></i></a>
        <a href=''><i className='list-group-item gray zmdi zmdi-mic'></i></a>
        <a href=''><i className='list-group-item gray zmdi zmdi-videocam'></i></a>
        <a href=''><i className='list-group-item gray zmdi zmdi-account'></i></a>
        <a href=''><i className='list-group-item gray zmdi zmdi-input-svideo'></i></a>
        <a href=''><i className='list-group-item gray zmdi zmdi-remote-control'></i></a>
      </div>
    )
  }
}
export default HoldConferenceVideo
 