import React, { Component } from 'react';
import wrapWithLoadData from './wrapWithLoadData'
import PropTypes from 'prop-types'

class CommentInput extends Component {
  static propTypes = {
    data: PropTypes.any,
    saveData: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      username: props.data,
      content: '',
      createdTime: +new Date()
    }
  }

  componentDidMount() {
    this.textarea.focus()
  }

  handleUsernameChange = (event) => {
    this.setState(
      {
        username: event.target.value
      }
    )
  };

  handleContentChange = (event) => {
    this.setState(
      {
        content: event.target.value
      }
    )
  };

  handleSubmit = () => {
    const { username, content } = this.state;
    if(this.props.onSubmit) {
      this.props.onSubmit({
        username,
        content,
        createdTime: +new Date()
      })
    }
    this.setState({
      content: ''
    })
  };

  handleUsernameBlur = (event) => {
    this.props.saveData(event.target.value)
  }

  render() {
    return (
      <div className='comment-input'>
        <div className="comment-field">
          <span className="comment-field-name">用户名：</span>
          <div className="comment-field-input">
            <input
              onChange={ this.handleUsernameChange }
              onBlur={ this.handleUsernameBlur }
              value={ this.state.username }
            />
          </div>
        </div>
        <div className="comment-field">
          <span className="comment-field-name">评论内容：</span>
          <div className="comment-field-input">
            <textarea ref={(textarea) => this.textarea = textarea} onChange={ this.handleContentChange } value={ this.state.content } />
          </div>
        </div>
        <div className="comment-field-button">
          <button onClick={ this.handleSubmit }>发布</button>
        </div>
      </div>
    )
  }
}

CommentInput = wrapWithLoadData(CommentInput, 'username')

export default CommentInput;