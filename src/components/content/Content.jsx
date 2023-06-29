import React, { useState } from 'react'
import Modal from './Modal'
import Map from './Map'
import './content.css'

const Content = ({visibility, visible, content, styleModal}) => {

  return (
    <div className='content'>
        <Map/>
        {visible && <Modal  visibility={visibility}  content = {content}  styleModal={styleModal}  />}
    </div>
  )
}

export default Content