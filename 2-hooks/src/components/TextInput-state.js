import React, { useState } from 'react'
import PropTypes from 'prop-types'

function TextInput({ onSubmit }) {
  const [name, setName] = useState('')
  const [text, setText] = useState('')

  const handleNameChange = event => {
    setName(event.target.value)
  }

  const handleInputChange = event => {
    setText(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    onSubmit({
      name,
      text,
    })
    setText('')
  }

  const handleInsertEmoji = () => {
    setText(`${text}😅`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Ваше имя"
        />
      </div>
      <div>
          <textarea
            cols="30"
            rows="5"
            value={text}
            onChange={handleInputChange}
            placeholder="Ваше сообщение"
          />
      </div>
      <button type="submit" disabled={text === ''}>Отправить</button>
      <button type="button" onClick={handleInsertEmoji}>😅</button>
    </form>
  )
}

TextInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default TextInput
