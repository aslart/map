import { Button } from 'antd'
import { InfoCircleOutlined } from '@ant-design/icons';
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';

const onChange = (e: CheckboxChangeEvent) => {
  console.log(`checked = ${e.target.checked}`);
};

function ListLayer({title}) {
  return (
    <div className='addedLayer'>
      <Checkbox onChange={onChange}>{title}</Checkbox>
     <Button type='text' icon={<InfoCircleOutlined />} /></div>
     
  )
}

export default ListLayer