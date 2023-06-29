import React, { useState } from 'react'
import { Resizable } from 're-resizable';
import { CloseOutlined } from '@ant-design/icons';
import { Button, Tooltip, Space } from 'antd';
import './modal.css'
import ContextTools from '../../contexts/ContextTools';

const Modal = ({content, visibility, styleModal}) => {
    

  return (
    // <ContextTools.Consumer>
         <div className={styleModal} id='modal' >
           <Button type='text' icon={<CloseOutlined />} className='closeBtn' onClick={() => visibility()}/>
              <Resizable  defaultSize={{   height: '100%',  }}>
              {content}
            </Resizable>
          </div>
    // </ContextTools.Consumer>
 
  )
}

export default Modal