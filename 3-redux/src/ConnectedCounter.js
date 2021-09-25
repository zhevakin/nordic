import { useDispatch, useSelector } from 'react-redux'
import Counter from './Counter'

import { counterSelector, incremented, decremented, changed } from './redux/counterSlice'

function ConnectedCounter() {
  const counter = useSelector(counterSelector)
  const dispatch = useDispatch()

  return (
    <Counter
      counter={counter}
      onPlus={() => dispatch(incremented())}
      onMinus={() => dispatch(decremented())}
      onChange={value => dispatch(changed(value))}
    />
  )
}

export default ConnectedCounter
