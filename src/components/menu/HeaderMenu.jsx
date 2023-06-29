import { useState } from 'react';
import { UserOutlined, DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Space } from 'antd';
import Search from '../content/Search';
import Road from '../content/Road';

function HeaderMenu({ onHandleModal, openLayers, toggleGamburger }) {
  const tools = [
    {
      label: (
        <div onClick={() => onHandleModal(<Search />)}>Измерить расстояние</div>
      ),
      key: '1',
      icon: <UserOutlined />,
      onClick: toggleGamburger,
    },
    {
      label: 'Рисунок / надпись',
      key: '2',
      icon: <UserOutlined />,
      onClick: toggleGamburger,
    },
    {
      label: 'Импорт файла',
      key: '3',
      icon: <UserOutlined />,
      onClick: toggleGamburger,
    },
    {
      label: 'Сохранить выбор',
      key: '4',
      icon: <UserOutlined />,
      onClick: toggleGamburger,
    },
    {
      label: 'Печать',
      key: '5',
      icon: <UserOutlined />,
      onClick: toggleGamburger,
    },
    {
      label: 'Архив',
      key: '6',
      icon: <UserOutlined />,
      onClick: toggleGamburger,
    },
    {
      label: <div onClick={() => onHandleModal(<Road />)}>Маршрут</div>,
      key: '7',
      icon: <UserOutlined />,
      onClick: toggleGamburger,
    },
  ];

  const regions = [
    {
      label: 'г. Шымкент',
      key: '1',
      children: [
        {
          label: 'Абайский район',
          key: '11',
          children: [
            {
              label: 'район',
              key: '111',
            },
            {
              label: 'район',
              key: '112',
            },
            {
              label: 'район',
              key: '113',
            },
          ],
        },
        {
          label: 'Каратауский район',
          key: '12',
          children: [
            {
              label: 'район',
              key: '121',
            },
            {
              label: 'район',
              key: '122',
            },
            {
              label: 'район',
              key: '123',
            },
          ],
        },
        {
          label: 'Альфарабийский район',
          key: '13',
          children: [
            {
              label: 'район',
              key: '131',
            },
            {
              label: 'район',
              key: '132',
            },
            {
              label: 'район',
              key: '133',
            },
          ],
        },
        {
          label: 'Район Туран',
          key: '14',
          children: [
            {
              label: 'район',
              key: '141',
            },
            {
              label: 'район',
              key: '142',
            },
            {
              label: 'район',
              key: '143',
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className="headerMenu">
      <Button
        type="text"
        onClick={openLayers}
      >
        Слои
      </Button>
      <Dropdown menu={{ items: tools }}>
        <Button type="text">
          <Space>
            Инструменты
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>
      <Button
        type="text"
        onClick={() => onHandleModal(<Search />)}
      >
        Поиск
      </Button>
      <Dropdown menu={{ items: regions }}>
        <Button type="text">
          <Space>
            Фильтр
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>
    </div>
  );
}

export default HeaderMenu;
