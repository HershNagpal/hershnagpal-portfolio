import styled, { CSSProperties } from 'styled-components';
import { IconName } from '../Icon/Icon';
import { WindowButton } from '../WindowButton/WindowButton';

export const Window = ({id, isOpen, iconName, isFocused, type, windowTitle, textContent, onClose, onMinimize}: WindowProps) => 
<WindowContainer style={
  {
    'display': isOpen ? 'auto' : 'none',
    'zIndex': isFocused ? '2' : '1'
  } as CSSProperties
}>

  <MenuBar>
    <WindowTitle>{windowTitle}</WindowTitle>
    <ButtonContainer>
      <WindowButton color={'#eeee45'} onClick={() => onMinimize(id)}/>
      <WindowButton color={'#e85454'} onClick={() => onClose(id)}/>
    </ButtonContainer>
  </MenuBar>
  {type==='text' && <TextContent defaultValue={textContent} />}
</WindowContainer>

export interface WindowProps {
  id: number
  isFocused: boolean
  isOpen: boolean
  iconName: IconName
  type: WindowType
  windowTitle: string
  textContent?: string
  onClose: (taskId: number) => void
  onMinimize: (taskId: number) => void
};

export type WindowType = 'text' | 'pdf' | 'folder';

const MenuBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 2px 5px;
  width: 100%;
  cursor: grab;
`;

const WindowTitle = styled.div`
  font-family: 'vt323';
  font-size: 20px;
  color: white;
  user-select: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

const WindowContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  padding: 3px;
  background:linear-gradient(rgba(103, 46, 209, 0.5) 50%,transparent);
  background-color: rgba(103, 46, 209, 0.5);
  backdrop-filter: blur(2px);
  border-bottom: #22375e;
  border-right: #22375e;
  border-top: white;
  border-left: white;
  border-width: 3px;
  border-style: solid;
  z-index: 2;
  /* width: 800px; */
  border-radius: 10px;
`;

const TextContent = styled.textarea`
  padding: 5px;
  width: 1000px;
  height: 100%;
  background-color: white;
  overflow: scroll;
  border-top: inset 3px black;
  border-left: inset 3px black;
  border-bottom: inset 3px white;
  border-right: inset 3px white;
  border-radius: 0px 0px 0px 10px;
  font-family: 'fixedsys';
  font-size: 20px;
  outline: none;
`;
