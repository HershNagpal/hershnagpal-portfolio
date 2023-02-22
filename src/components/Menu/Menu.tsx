import styled from "styled-components";
import { MenuItem, MenuItemProps } from "../MenuItem/MenuItem";

export const Menu = ({menuState, menuItems}: MenuProps) => {
  
  return menuState ? <MenuContainer>
    {menuItems.map((item, index) => (
      <MenuItem key={index} {...item} />
    ))}
  </MenuContainer> 

  : <></>
};

export interface MenuProps {
  menuState: boolean
  menuItems: MenuItemProps[]
};

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  background-color: rgba(103, 46, 209, 0.8);
  /* height: 100px; */
  width: 200px;
`;
