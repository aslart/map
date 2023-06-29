import React, { useState } from 'react';
import logo from '../../logo.svg';
import { MenuOutlined } from '@ant-design/icons';
import { Buttons } from './Buttons';
import { Button } from 'antd';
import './header.css';

export const Header = ({ onHandleModal, visible, openLayers }) => {
  const [visibleMobileMenu, setVisibleMobileMenu] = useState(false);
  function toggleGamburger() {
    setVisibleMobileMenu(!visibleMobileMenu);
  }
  return (
    <div className="header">
      <img
        src={logo}
        className="App-logo"
        alt="logo"
      />

      <Buttons
        onHandleModal={onHandleModal}
        visible={visible}
        openLayers={openLayers}
        visibleMobileMenu={visibleMobileMenu}
        toggleGamburger={toggleGamburger}
      />
      <Button
        type="text"
        icon={<MenuOutlined />}
        onClick={() => toggleGamburger()}
        className="gamburger"
      />
    </div>
  );
};
