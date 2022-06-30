import styled, { CSSProperties } from "styled-components";
import { IconName } from "../Icon/Icon";
import { useState } from "react";
import { getIcon } from "../Icon/Icon";

export const MenuButton = ({iconName, menuOpen, toggleMenu}: MenuButtonProps) => {

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    toggleMenu();
  };

  return <TaskContainer
    onClick={handleClick}
    style={{
      ...(menuOpen && { 
        '--top-border': 'inset 2px rgb(12, 5, 77)',
        '--bottom-border': 'inset 2px white',
        '--left-border': 'inset 2px rgb(12, 5, 77)',
        '--right-border': 'inset 2px white',
      }),
      ...(!menuOpen && { 
        '--top-border': 'ridge 2px white',
        '--bottom-border': 'ridge 2px rgb(12, 5, 77)',
        '--left-border': 'ridge 2px white',
        '--right-border': 'ridge 2px rgb(12, 5, 77)',
      }),
    } as CSSProperties}
  >
    <TaskIcon alt='icon' src={getIcon(iconName)} />
    <TaskText>Menu</TaskText>
  </TaskContainer>
}

export interface MenuButtonProps {
  toggleMenu: () => void
  menuOpen: boolean
  iconName: IconName
};

const TaskContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding: 3px 5px;
  height: 35px;
  background-color: rgba(103, 46, 209, 0.5);
  border-top: var(--top-border);
  border-bottom: var(--bottom-border);
  border-left: var(--left-border);
  border-right: var(--right-border);
  width: fit-content;
  width: 100px;
`;

const TaskText = styled.p`
  font-size: 25px;
  font-family: 'vt323';
  user-select: none; 
  color: white; 
`;

const TaskIcon = styled.img`
  height: 20px;
`;