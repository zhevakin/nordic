import React, { Component } from 'react'

class Clock extends Component {
  constructor() {
    super()
    this.state = {
      date: new Date()
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        date: new Date()
      })

    }, 1000)

    this.resize = () => {
      console.log('RESIZE')
    }

    window.addEventListener('resize', this.resize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize)
  }

  render() {
    const { date } = this.state
    return (
      <div>
        Сейчас {date.toLocaleTimeString()}
      </div>
    )
  }
}

export default Clock
