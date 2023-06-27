import React from 'react'
import logo from '../../logo.svg'

import { Buttons } from './Buttons'
import './header.css'

export const Header = ({onHandleModal, visible}) => {
  return (
    <div className='header'> 
    <img src={logo} className="App-logo" alt="logo" />
         
          <Buttons onHandleModal={onHandleModal} visible={visible}/>

    
    </div>
  )
}
