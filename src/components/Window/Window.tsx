import styled, { CSSProperties } from 'styled-components';
import { IconName } from '../Icon/Icon';
import { WindowButton } from '../WindowButton/WindowButton';
import Draggable, { DraggableEventHandler } from 'react-draggable';
import { getIcon } from '../Icon/Icon';

export const Window = ({id, iconName, isFocused, type, windowTitle, textContent, pdfSource,
  onClose, onMinimize, xPosition, yPosition, setWindowPosition}: WindowProps) => {

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
  >
    <WindowContainer
      style={{
        ...(type === 'text' && { 
          '--window-height': '500px',
          '--window-width': '700px',
        }),
        ...(type === 'pdf' && { 
          '--window-height': '600px',
          '--window-width': '600px',
        }),
      } as CSSProperties }
    >
      <MenuBar className='handle'>
        <MenuBarTitle>
          <MenuBarIcon src={getIcon(iconName)} />
          <WindowTitle>{windowTitle}</WindowTitle>
        </MenuBarTitle>
        <ButtonContainer>
          <WindowButton color={'#eeee45'} onClick={() => handleMinimize()}/>
          <WindowButton color={'#e85454'} onClick={() => onClose(id)}/>
        </ButtonContainer>
      </MenuBar>
      {type==='text' && textContent && <TextContent defaultValue={textContent} />}
      {type==='pdf' && pdfSource && <PDFEmbed src={pdfSource+'#zoom=70'} />}
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
  pdfSource?: string
};

export type WindowType = 'text' | 'pdf' | 'folder';

const PDFEmbed = styled.iframe`
  margin: 3px;
  width: 100%;
  object-fit: scale-down;
  height: var(--window-height);
  width: var(--window-width);
  border-radius: 0px 0px 8px 8px;
`;

const MenuBarIcon = styled.img`
  width: 20px;
  pointer-events: none;
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
`;

const TextContent = styled.textarea`
  padding: 5px;
  height: var(--window-height);
  width: var(--window-width);
  min-height: 100px;
  min-width: 200px;
  max-height: 100%;
  background-color: white;
  overflow: scroll;
  border-top: inset 3px black;
  border-left: inset 3px black;
  border-bottom: inset 3px white;
  border-right: inset 3px white;
  border-radius: 0px 0px 8px 8px;
  font-family: 'fixedsys';
  font-size: 20px;
  outline: none;
`;
