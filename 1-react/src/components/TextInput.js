import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TextInput extends Component {
  static propTypes = {
    text: PropTypes.string,
    onSubmit: PropTypes.func,
  }

  constructor() {
    super()

    this.state = {
      value: '',
    }
  }

  handleInputChange = event => {
    this.setState({ value: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.props.onSubmit(this.state.value)
    this.setState({ value: '' })
  }

  handleInsertEmoji = () => {
    this.setState({
      value: this.state.value + '😅'
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <textarea
            cols="30"
            rows="5"
            value={this.state.value}
            onChange={this.handleInputChange}
          />
        </div>
        <button type="submit" disabled={this.state.value === ''}>Отправить</button>
        <button type="button" onClick={this.handleInsertEmoji}>😅</button>
      </form>
    )
  }
}

export default TextInput
