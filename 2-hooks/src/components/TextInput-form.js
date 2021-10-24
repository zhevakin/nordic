import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'

function TextInput({ onFormSubmit }) {
  const { register, handleSubmit, setValue, getValues, formState } = useForm({
    mode: "onChange"
  })

  const onSubmit = (data) => {
    onFormSubmit(data)
  }

  const handleInsertEmoji = () => {
    const text = getValues('text')
    setValue('text', `${text}😅`)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          type="text"
          placeholder="Ваше имя"
          {...register('name', { required: true })}
        />
      </div>
      <div>
          <textarea
            cols="30"
            rows="5"
            placeholder="Ваше сообщение"
            {...register('text', { required: true })}
          />
      </div>
      <button type="submit" disabled={!formState.isValid}>Отправить</button>
      <button type="button" onClick={handleInsertEmoji}>😅</button>
    </form>
  )
}

TextInput.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
}

export default TextInput
