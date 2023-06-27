import { useState } from 'react';
import { UserOutlined, DownOutlined,  } from '@ant-design/icons';
import { Button, type MenuProps,  Dropdown, Space,  Modal } from 'antd';



const items: MenuProps['items'] = [
  {
    label: '1st menu item',
    key: '1',
    icon: <UserOutlined />,

  },
  {
    label: '2nd menu item',
    key: '2',
    icon: <UserOutlined />,
  },
  {
    label: '3rd menu item',
    key: '3',
    icon: <UserOutlined />,
  },
  {
    label: '4rd menu item',
    key: '4',
    icon: <UserOutlined />,

  },
];


const menuProps = {
  items,

};

function HeaderMenu({onHandleModal}) {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='headerMenu'>
         <Button type="text">Text Button</Button>
         <Dropdown menu={menuProps} >
            <Button  type="text">
             <Space >
                Button
                <DownOutlined />
              </Space>
              </Button>
           </Dropdown>
         <Button type="text" >Text Button</Button>
         <Button type="text" onClick={onHandleModal}>Text Button</Button>
         <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      
      </Modal>
    </div>
  )
}

export default HeaderMenu