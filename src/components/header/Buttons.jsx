
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Dropdown, message, Space, Tooltip } from 'antd';
import HeaderMenu from '../menu/HeaderMenu';



const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    
    message.info('Click on left button.');
    console.log('click left button', e);
  };
  
  const handleMenuClick: MenuProps['onClick'] = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
  };

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
    }
  
  ];
  
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

export const Buttons = ({onHandleModal}) => {

  return (
    <div className='btns'> 
     <HeaderMenu  onHandleModal={onHandleModal} />
    <div className='buttons'>
    {/* <Button type="primary" onClick={onHandleModal}>   {visible ? 'Hide' : 'Show'}</Button> */}
        <Button type="primary">Вход</Button>
        <Dropdown menu={menuProps}>
      <Button>
        <Space>
          Button
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
    </div>
    </div>
   
  )
}
