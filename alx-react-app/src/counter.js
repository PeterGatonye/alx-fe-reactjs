import React from 'react'
import useCounterStore from './store'

export default function Counter() {
  const { count, increase, decrease } = useCounterStore()

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Count: {count}</h1>
      <button onClick={increase} style={{ marginRight: '10px' }}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  )
}
