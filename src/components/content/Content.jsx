import React, { useState } from 'react'
import Modal from './Modal'
import Map from './Map'
import './content.css'

const Content = ({visibility, visible}) => {



  return (
    <div className='content'>
        <Map/>
        {visible && <Modal  visibility={visibility}/>}
    </div>
  )
}

export default Content