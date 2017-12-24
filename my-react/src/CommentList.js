import React, { Component } from 'react';
import Comment from './Comment'
import PropTypes from 'prop-types'

class CommentList extends Component {
  static defaultProps = {
    comments: []
  }

  static propsTypes = {
    comments: PropTypes.array,
    onDeleteComment: PropTypes.func
  }

  handleDeleteComment = (index) => {
    if(this.props.onDeleteComment) {
      this.props.onDeleteComment(index)
    }
  }

  render() {
    return (
      <div>
        {
          this.props.comments.map((comment, i) => {
            return (
              <Comment
                onDeleteComment={ this.handleDeleteComment }
                index={i}
                key={i}
                comment={ comment }>
              </Comment>
            )
          })
        }
      </div>
    )
  }
}

export default CommentList;