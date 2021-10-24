import React, { useEffect, useState } from 'react'
import Message from './components/Message'
import TextInput from './components/TextInput'
import Clock from './components/Clock'
import './App.css'

import useToggle from './hooks/useToggle'

const initMessages = [
  {
    id: 0,
    age: 20,
    name: 'Ivan',
    text: 'Hello',
  },
  {
    id: 1,
    age: 25,
    name: 'Alex',
    text: 'Welcome!'
  },
]

function Chat() {
  const [clock, toggleClock] = useToggle(true)
  const [messages, setMessages] = useState(initMessages)

  useEffect(() => {
    if (clock === false) {
      console.log('Часы скрыты')
    }
  }, [ clock ])

  const handleMessageSubmit = ({ name, text }) => {
    const newMessage = {
      name,
      text,
    }

    setMessages([ ...messages, newMessage ])
  }

  const handleClearChat = () => {
    setMessages([])
  }

  return (
    <div className="App">

      <button onClick={toggleClock}>
        {clock ? 'Скрыть часы' : 'Показать часы'}
      </button>

      {clock && <Clock/>}

      <div>

        {messages.map(message => (
          <div>
            <Message age={message.age} text={message.text} name={message.name} />
          </div>
        ))}

        <TextInput onFormSubmit={handleMessageSubmit}/>

        <button onClick={handleClearChat}>Очистить чат</button>

      </div>
    </div>
  )
}

export default Chat
