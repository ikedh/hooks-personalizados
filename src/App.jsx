import { useState,useCallback } from 'react'
import './App.css'
import Header from './components/Header'
import useSize from './hooks/useSize'
import ToggleButton from './components/ToggleButton'


function App() {

  const{height,width}=useSize()

  //toggle
  

  return (
    <>
      <div>
        <Header/>
        <h2>Width : {width}</h2>
        <h2>Height : {height}</h2>
      </div>
      <hr/>
      <ToggleButton/>
    </>
  )
}

export default App
