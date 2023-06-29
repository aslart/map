import { useState } from 'react';
import './App.css';
import Content from './components/content/Content';
import { Header } from './components/header/Header';
import ActiveLayers from './components/content/ActiveLayers';
import Modal from 'antd/es/modal/Modal';

function App() {
  const [visible, setVisible] = useState(false);
  const [content, setContent] = useState('');
  const [styleModal, setStyleModal] = useState("modal fadeIn");


  const openTool = (prop) => {
    setStyleModal("modal fadeIn");
   setVisible(true);
    setContent(prop)
  };
  
  const closeModal = () => {
    setStyleModal("modal fadeOut");
    setTimeout(()=> { setVisible(false)}, 1000);
    
     };

const [visibleLayers, setVisibleLayers] = useState(false)
function openLayers() {
  setVisibleLayers(!visibleLayers)
}

  return (
  
    <div className="App">
        <Header onHandleModal={openTool } visible={visible}   openLayers={openLayers} />
        <Content  visibility={closeModal} visible={visible} content = {content} styleModal={styleModal}   />
      <ActiveLayers openLayers={openLayers} visibleLayers={visibleLayers} />
        
    </div>
   
  );
}

export default App;
