import styled from 'styled-components';
import { IconName, getIcon } from '../Icon/Icon';

export const Window = ({iconName, type, windowTitle, textContent, onClose, onMinimize}: WindowProps) => 
<WindowContainer>
  <MenuBar>
    <WindowTitle>{windowTitle}</WindowTitle>
    <ButtonContainer>
      <WindowButton />
      <WindowButton />
      <WindowButton />
    </ButtonContainer>
  </MenuBar>
  {type==='text' && <TextContent>
    {textContent}
  </TextContent>}

</WindowContainer>;

export interface WindowProps {
  iconName: IconName
  type: WindowType
  windowTitle: string
  textContent?: string
  onClose: () => void
  onMinimize: () => void
};

export type WindowType = 'text' | 'pdf' | 'folder';

const MenuBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 2px 5px;
  width: 100%;
`;

const WindowTitle = styled.div`
  font-family: 'vt323';
  font-size: 20px;
  color: white;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

const WindowButton = styled.button`
  border-width: 0px;
  border-radius: 5px;
  margin: 3px;
  width: 20px;
  height: 20px;
  font-size: 16px;
  font-weight: bold;
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
  max-width: 50vw;
  max-height: 70vh;
  border-radius: 10px;
`;

const TextContent = styled.div`
  padding: 5px;
  width: 100%;
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
`;
