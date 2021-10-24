import React, { useEffect, useState } from 'react'

function Clock() {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date())
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div>
      Сейчас {date.toLocaleTimeString()}
    </div>
  )
}

export default Clock
