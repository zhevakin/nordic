import { useState } from 'react'
import classnames from 'classnames'
import style from './Button.module.css'

export default function Button() {
  const [blue, setBlue] = useState(false)

  const className = classnames({
    [style.Button]: true,
    [style.Blue]: blue,
  })

  return (
    <button
      className={className}
      onClick={() => setBlue(!blue)}
    >
      кнопка {blue ? 'blue' : 'red'}
    </button>
  )
}
