import React, { useState, useRef, useContext} from 'react';
import { Menu, Layout } from 'antd';
import { menuList } from '../context';
import {RootContext} from '../app';

const { Sider } = Layout;
const { SubMenu } = Menu;

const sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {dispatch} = useContext(RootContext);
  
  
  const menu = useRef(menuList.menu);
  const dropdownMenu = useRef(menuList.dropdownMenu);

  const onCollapse = collapsed => {
    console.log(collapsed);
    this.setCollapsed({ collapsed });
  };

  const onClickMenu = (content, main, sub) => () => {
    console.log('onClickMenu', main, sub);
    dispatch({ type:'CHANGE_CONTENT', content: content, main: main, sub: sub});
  }

  const displayMenuItem = (arr, main, sub) => {
    return arr.map((v, i) =>
      <Menu.Item key={v} onClick={onClickMenu(v, main? main : v, main? v: '')}>{v}</Menu.Item>
    )
  }

  const displayDropdownMenu = () => {
    const elements = [];
    for( const [subject, list] of Object.entries(dropdownMenu.current)) {
      elements.push(
        <SubMenu key={subject} title={subject}>
          {displayMenuItem(list, subject)}
        </SubMenu>
      )
    }

    return elements;
  }

  return (
    <>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            {
              displayMenuItem(menu.current)
            }
            {
              displayDropdownMenu()
            }
          </Menu>
        </Sider>
    </>
  )
}

export default sidebar;