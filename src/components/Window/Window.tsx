import styled, { CSSProperties } from 'styled-components';
import { IconName } from '../Icon/Icon';
import { WindowButton } from '../WindowButton/WindowButton';
import { TextContent } from './TextContent';
import Draggable, { DraggableEventHandler } from 'react-draggable';
import { getIcon } from '../Icon/Icon';

export const Window = ({id, iconName, isFocused, type, windowTitle, textContent,
  onClose, onMinimize, xPosition, yPosition, setWindowPosition, focusWindow}: WindowProps) => {

  const handleMinimize = () => {
    onMinimize(id)
  };

  const handleStop: DraggableEventHandler = (e, data) => {
    const x = data.deltaX + data.lastX
    const y = data.deltaY + data.lastY
    setWindowPosition(id, x, y)
  }

  return <Draggable 
    bounds='parent' 
    handle='.handle'
    defaultPosition={xPosition && yPosition ? {x: xPosition, y: yPosition}: undefined}
    onStop={handleStop}
    onStart={() => focusWindow(id)}
  >
    <WindowContainer
      onClick={() => focusWindow(id)}
      style={{
        ...(type === 'text' && { 
          '--window-height': '500px',
          '--window-width': '700px',
        }),
        ...(isFocused && {
          'zIndex': '3'
        }),
        ...(!isFocused && {
          'zIndex': '1'
        })
      } as CSSProperties }
    >
      <MenuBar className='handle'>
        <MenuBarTitle>
          <MenuBarIcon draggable={false} src={getIcon(iconName)} />
          <WindowTitle>{windowTitle}</WindowTitle>
        </MenuBarTitle>
        <ButtonContainer>
          <WindowButton color={'#eeee45'} onClick={() => handleMinimize()}/>
          <WindowButton color={'#e85454'} onClick={() => onClose(id)}/>
        </ButtonContainer>
      </MenuBar>
      {type==='text' && textContent && <TextContent content={textContent} />}
    </WindowContainer>
  </Draggable>
};
export interface WindowProps {
  id: number
  isFocused: boolean
  iconName: IconName
  type: WindowType
  windowTitle: string
  textContent?: string
  onClose: (taskId: number) => void
  onMinimize: (taskId: number) => void
  setWindowPosition: (taskId: number, x: number, y: number) => void
  xPosition?: number
  yPosition?: number
  focusWindow: (taskId: number) => void
};

export type WindowType = 'text' | 'folder';

const MenuBarIcon = styled.img`
  width: 20px;
`;

const MenuBarTitle = styled.div`
  display: flex;
  gap: 10px;
`;

const MenuBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 2px 5px;
  width: 100%;
  cursor: grab;
  user-select: none;
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
  z-index: 1;
  border-radius: 10px;
  filter: drop-shadow(10px 10px 10px var(--shadow));
`;
