import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { PlusOutlined, CloseOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import ListLayer from "../layersComponents/ListLayer";

function LayerStock({openAllLayers, allLayersVisible}) {
   const myLayers = [
     {
        id: 1,
        title: 'Layer 1',
     },
     {
        id: 2,
        title: 'Layer 2',
     },
     {
        id: 3,
        title: 'Layer 3',
     }, 
     {
      id: 4,
      title: 'Layer 4',
     }
   ]

  return (
    <div id='LayersStock' className={allLayersVisible ? 'show' : 'hidden'}>
         <Button type='text' icon={<CloseOutlined />} className='closeBtn' onClick={() => openAllLayers()}/>
        <p className="h3">Слои</p>
        <div><Button className="addLayer" type="primary"  icon={<PlusOutlined />}>Добавить слои</Button></div>
        <div>
            {myLayers.map((item) =>    <ListLayer key={item.id} title={item.title} />)}
         </div>
        </div>
  )
}

export default LayerStock