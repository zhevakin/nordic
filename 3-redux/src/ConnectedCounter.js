import { useDispatch, useSelector } from 'react-redux'
import Counter from './Counter'

import { counterSelector, incremented, decremented, changed } from './redux/counterSlice'

function ConnectedCounter() {
  const counter = useSelector(counterSelector)
  const dispatch = useDispatch()

  const handlePlus = () => {
    dispatch(incremented())
  }

  return (
    <Counter
      counter={counter}
      onPlus={handlePlus}
      onMinus={() => dispatch(decremented())}
      onChange={value => dispatch(changed(value))}
    />
  )
}

export default ConnectedCounter
