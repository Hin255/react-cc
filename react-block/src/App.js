import React from 'react';
import logo from './logo.svg';
import './App.css';
import Icon from './components/icon/icon'
import Button from './components/button/button'
import Input from './components/input/input'

function App() {
    
    const focus = (e) => {
        console.log('focus', e)
    }

    const blur = (e) => {
        console.log('blur', e)
    }

    const click = (e) => {
        console.log('click', e)
        e.stopPropagation()
    }

    const input =(e) =>{
        console.log('input', e)
    }

  return (
    <div className="App">
        <Icon type="ri-admin-line ri-2x"/>
        <Button type='submit' size='large'>button</Button>
        <Input autofocus={true} onFocus={focus} onBlur={blur} onClick={click} number={true}></Input>
    </div>
  )
}

export default App
