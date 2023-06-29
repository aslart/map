import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const items: CollapseProps['items'] = [
    {
      key: '1',
      label: 'This is panel header 1',
      children: <p>{text}</p>,
    },
    {
      key: '2',
      label: 'This is panel header 2',
      children: <p>{text}</p>,
    },
    {
      key: '3',
      label: 'This is panel header 3',
      children: <p>{text}</p>,
    },
    {
        key: '4',
        label: 'This is panel header 3',
        children: <p>{text}</p>,
      },
      {
        key: '5',
        label: 'This is panel header 3',
        children: <p>{text}</p>,
      },
      {
        key: '6',
        label: 'This is panel header 3',
        children: <p>{text}</p>,
      },
  ];

function Spravka() {
    const onChange = (key: string | string[]) => {
        console.log(key);
      };

  return (
    <div className='spravkaComponent'>
        <p className='h3'>Справочник</p>
    <Collapse items={items} defaultActiveKey={['1']} onChange={onChange} />
    </div>
  )
}

export default Spravka