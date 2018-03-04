import React from 'react'
import ChatTest from './ChatTest'
import Comments from './HoldConferenceMessage'


class Chat extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: []
    }
  }
  
  postComment(comment) {
    comment.user = {
      name: 'Kitten',
      image: 'https://i.imgur.com/l6tqERP.jpg',
    }
    this.setState({comments: [...this.state.comments, comment]})
  }

  renderComments() {
    return (
      <Comments
        comments={this.state.comments}
        loading={this.state.commentsLoading}
      />
    )
  }

  render() {
    return (
      <div>
        <ChatTest onSubmit={this.postComment.bind(this)} />
        {this.renderComments()}
      </div>
    )
  }
}

export default Chat