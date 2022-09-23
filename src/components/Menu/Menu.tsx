import styled from "styled-components";

export const Menu = ({menuState}: MenuProps) => {
  
  return menuState ? <MenuContainer>
    
  </MenuContainer> 

  : <></>
};

export interface MenuProps {
  menuState: boolean
};

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
`;
