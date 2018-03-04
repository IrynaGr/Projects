import React from 'react'
import Dropzone from 'react-dropzone'

class HoldConferenceUploadFile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {preview: null}
    this.handleDrop = this.handleDrop.bind(this)
  }
  handleDrop([{ preview }]) {
    this.setState({preview})
  }
  render() {
    const {preview} = this.state
    return (
      <div className='uplodeFile'>
        <section className='uplodeZona'>
          <Dropzone className='uplodeDrop' onDrop={ this.handleDrop } accept="" multiple={false }>
            <a className='o-attachment__btn-add o-btn o-btn--2'><i className="zmdi zmdi-plus-circle-o"></i><span>Add files</span></a>
          </Dropzone>
          {preview}
        </section>
      </div>
    )
  }
}
export default HoldConferenceUploadFile