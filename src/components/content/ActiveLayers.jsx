import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { PlusOutlined, CloseOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import LayerStock from './LayerStock';
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';

const onChange = (e: CheckboxChangeEvent) => {
  console.log(`checked = ${e.target.checked}`);
};

const myLayers = [
  {
    id: '1',
    title: 'Layer 1',
  },
  {
    id: '2',
    title: 'Layer 2',
  },
  {
    id: '3',
    title: 'Layer 3',
  },
];

function ActiveLayers({ openLayers, visibleLayers }) {
  const [allLayersVisible, setAllLayersVisible] = useState(false);

  function openAllLayers() {
    setAllLayersVisible(!allLayersVisible);
  }
  const [layers, setLayers] = useState(myLayers);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(layers);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setLayers(items);
  }

  return (
    <>
      <div
        id="activeLayers"
        className={visibleLayers ? 'show' : 'hidden'}
      >
        <Button
          type="text"
          icon={<CloseOutlined />}
          className="closeBtn"
          onClick={() => openLayers()}
        />
        <p className="h3">Активные слои</p>
        <div>
          <Button
            className="addLayer"
            type="primary"
            icon={<PlusOutlined />}
            onClick={openAllLayers}
          >
            Добавить слои
          </Button>
        </div>
        <DragDropContext
          onDragEnd={() => {
            console.log('drag drop event occured');
          }}
        >
          <Droppable
            droppableId="ROOT"
            type="group"
          >
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {layers.map((item, index) => {
                  return (
                    <Draggable
                      draggableId={item.id}
                      key={item.id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          className="addedLayer"
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                          ref={provided.innerRef}
                        >
                          <Checkbox onChange={onChange}>{item.title}</Checkbox>
                          <Button
                            type="text"
                            icon={<CloseOutlined />}
                          />
                        </div>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
      <LayerStock
        openAllLayers={openAllLayers}
        allLayersVisible={allLayersVisible}
      />
    </>
  );
}
export default ActiveLayers;
