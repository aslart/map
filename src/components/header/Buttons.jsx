import {
  DownOutlined,
  MenuOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Dropdown, message, Space, Tooltip } from 'antd';
import HeaderMenu from '../menu/HeaderMenu';
import Spravka from '../content/Spravka';

const langs = [
  {
    label: 'Рус',
    key: '1',
  },
  {
    label: 'Каз',
    key: '2',
  },
];

export const Buttons = ({
  onHandleModal,
  openLayers,
  visibleMobileMenu,
  toggleGamburger,
}) => {
  return (
    <div
      className={`btns ${visibleMobileMenu ? 'active' : ''}`}
      id="menu"
    >
      <HeaderMenu
        onHandleModal={onHandleModal}
        openLayers={openLayers}
        toggleGamburger={toggleGamburger}
      />
      <div className="buttons">
        <Button type="primary">Вход</Button>
        <Dropdown menu={{ items: langs }}>
          <Button>
            <Space>
              Рус
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
        <Button
          type="text"
          icon={<QuestionCircleOutlined />}
          onClick={() => onHandleModal(<Spravka />)}
        />
      </div>
    </div>
  );
};
