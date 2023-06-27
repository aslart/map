
import { useState } from 'react';
import './App.css';
import Content from './components/content/Content';
import { Header } from './components/header/Header';
import Road from './components/content/Road';
import ContextTools from './contexts/ContextTools';

function App() {
  const [visible, setVisible] = useState(true);
  const handleModal = () => {
    setVisible(!visible);
  };

  const componentRoad = () => {<Road />}  ;
  const [text, setText] = useState('Text');

  return (
    <ContextTools.Provider value={text}>
    <div className="App">
      
        <Header onHandleModal={handleModal} visible={visible}  />
        <Content visibility={handleModal} visible={visible}    />
   
      
    </div>
    </ContextTools.Provider>
  );
}

export default App;
