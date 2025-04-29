"use client";
import React from 'react'
import { Col, Layout, Row, Dropdown, Space } from 'antd';
import { DownOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import Image from 'next/image';
const { Header } = Layout;
import logo from '@/assets/image/logo.png';
import ProductSearch from './ProductSearch';

const headerStyle: React.CSSProperties = {
  display: 'flex',
  textAlign: 'center',
  color: 'black',
  backgroundColor: '#FFF',
  alignItems: 'center',
  height: '4.5rem',
  padding: "0 5rem"
};

const items: MenuProps['items'] = [
  {
    key: '1',
    label: 'My Account',
    disabled: true,
  },
  {
    type: 'divider',
  },
  {
    key: '2',
    label: 'Profile',
    extra: '⌘P',
  },
  {
    key: '3',
    label: 'Billing',
    extra: '⌘B',
  },
  {
    key: '4',
    label: 'Settings',
    icon: <SettingOutlined />,
    extra: '⌘S',
  },
];


export default function HomeHeader() {
  return (
    <Header style={headerStyle}>
      <Row style={{ height: '100%', width: '100%' }}>
        <Col style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center' }} lg={5}>
          <Image src={logo} alt="logo" style={{ height: '80%', width: '7rem' }} />
          <p style={{ fontWeight: "600", fontSize: '1.6rem', padding: 0 }}>Shopping Cart</p>
        </Col>
        <Col style={{ height: '100%', width: '100%', display: 'flex', justifyContent:'center' }} lg={14}>
          <ProductSearch />
        </Col>
        <Col style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'end' }} lg={5}>
          <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <UserOutlined style={{ fontSize: '1rem' }} />
                <p style={{ fontSize: '1rem' }}>Username</p>
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </Col>
      </Row>
    </Header>
  )
}
