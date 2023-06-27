import React, { useState } from 'react'
import Search from './Search'
import { Resizable } from 're-resizable';
import ContextTools from '../../contexts/ContextTools';

const Modal = () => {
    
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
      setIsModalOpen(true);
    };

  return (
    // <ContextTools.Consumer>
         <div className='modal'>
              <Resizable  defaultSize={{    width: 50,    height: '100%',  }}>
                
            </Resizable>
          </div>
    // </ContextTools.Consumer>
 
  )
}

export default Modal