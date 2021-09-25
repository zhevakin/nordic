import { useState } from 'react'
import useToggle from '../hooks/useToggle'
import TextInput from './TextInput'

function Chat() {
  const [messages, setMessages] = useState([])
  const [visible, toggle] = useToggle(true)

  const handleAddMessage = message => {
    setMessages([...messages, message])
  }

  return (
    <div>
      <h3>Чат</h3>

      {/*{!visible && <button onClick={() => setVisible(true)}>Показать чат</button>}*/}
      {/*{visible && <button onClick={() => setVisible(false)}>Скрыть чат</button>}*/}

      <button onClick={toggle}>
        {visible ? 'Скрыть чат' : 'Показать чат'}
      </button>

      {visible &&
        <div>
          <div>
            {messages.map(message => (
              <div>
                {message}
              </div>
            ))}
          </div>

        <TextInput onSubmit={handleAddMessage}/>
        </div>}

    </div>
  )
}

export default Chat
