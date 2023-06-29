import { Button } from 'antd'
import { CloseOutlined } from '@ant-design/icons';
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';

const onChange = (e: CheckboxChangeEvent) => {
  console.log(`checked = ${e.target.checked}`);
};

function AddedLayer({title}) {
  return (
    <div className='addedLayer'>
      <Checkbox onChange={onChange}>{title}</Checkbox>
     <Button type='text' icon={<CloseOutlined />} /></div>
     
  )
}

export default AddedLayer