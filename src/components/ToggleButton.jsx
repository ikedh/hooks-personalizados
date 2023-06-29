import React from 'react'
import useToggle from '../hooks/useToggle'

const ToggleButton = () => {

    const{state,toggleState}= useToggle()

  return (

    
    <button onClick={toggleState}>
        {state? 'ON' : 'OFF'}
      </button>
  )
}

export default ToggleButton