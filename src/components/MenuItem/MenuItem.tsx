import styled from "styled-components";

export const MenuItem = ({onClick, title}: MenuItemProps) => (
  <MenuItemContainer
    onClick={onClick}
  >
    <MenuText>{title}</MenuText>
  </MenuItemContainer>
);

export interface MenuItemProps {
  onClick: () => void
  title: string
};

const MenuItemContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 5px;
`;

const MenuText = styled.p`
  font-size: 25px;
  font-family: 'vt323';
  user-select: none; 
  color: white; 
`;
