import React from 'react'
import moment from 'moment'
import Loading from './Loading'
import { classNames } from '../utilities/class'


class Comments extends React.Component {

  renderComments() {
    if ( this.props.loading ) {
      return <Loading />
    } else if (this.props.comments.length > 0) {
      return this.props.comments.map((comment, i) => {
        return (
          <article key={i} className="o-comment">
            <a className="o-comment__left o-userImage o-userImage--30">
              <img src={comment.user.image} alt={comment.user.name} />
            </a>
            <section className="o-comment__right">
              <a className="o-comment__username">
                {comment.user.name}
              </a>
              <p>
                <span className="paragraph-first">{comment.text}</span>
              </p>
              <ul className="o-comment__info">
                <li>{moment(comment.created_at).fromNow()}</li>
              </ul>
            </section>
          </article>
        )
      })
    }
  }

  render() {
    return (
      <section className={ classNames('u-marg-bottom', {
        'o-comments__container': !this.props.loading,
      }) }>
        {this.renderComments()}
      </section>
    )
  }
}

Comments.defaultProps = {
  comments: [],
  loading: false,
}

export default Comments