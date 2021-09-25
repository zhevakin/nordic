import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Message extends Component {
  render() {
    const { name, text, age } = this.props

    return (
      <div>
        <small>{name} ({age})</small>
        <div>
          {text}
        </div>
      </div>
    )
  }
}

Message.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string.isRequired,
  age: PropTypes.number,
}

export default Message
