import { useState } from 'react'

function Counter({ counter, onPlus, onMinus, onChange }) {
  const [value, setValue] = useState(0)
  return (
    <div>
      <h1>Счетчик: {counter}</h1>
      <button onClick={onMinus}>-</button>
      <button onClick={onPlus}>+</button>
      <div>
        <input type="number" value={value} onChange={event => setValue(Number(event.target.value))} />
        <button onClick={() => onChange(value)}>Изменить</button>
      </div>
    </div>
  )
}

export default Counter
