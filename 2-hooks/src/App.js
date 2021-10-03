import React, { Component } from 'react'
import Message from './components/Message'
import TextInput from './components/TextInput'
import Clock from './components/Clock'
import './App.css';

class Chat extends Component {
  constructor() {
    super()
    this.state = {
      messages: [],
      clock: true,
    }
  }

  componentDidMount() {
    // api

    const newMessages = [
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

    this.setState({
      messages: newMessages,
    })
  }

  handleMessageSubmit = message => {
    const newMessage = this.state.messages

    newMessage.push({
      name: 'Dmitry',
      text: message,
    })

    this.setState({
      messages: newMessage,
    })
  }

  handleClearChat = () => {
    this.setState({
      messages: []
    })
  }

  render() {
    const messages = this.state.messages
    const { clock } = this.state

    return (
      <div className="App">

        {clock && <button onClick={() => this.setState({ clock: false })}>Скрыть часы</button>}
        {!clock && <button onClick={() => this.setState({ clock: true })}>Показать часы</button>}

        {clock && <Clock/>}

        <div>

          {messages.map(message => (
            <div>
              <Message age={message.age} text={message.text} name={message.name} />
            </div>
          ))}

          <TextInput onSubmit={this.handleMessageSubmit}/>

          <button onClick={this.handleClearChat}>Очистить чат</button>

        </div>
      </div>
    );

  }
}

export default Chat;
