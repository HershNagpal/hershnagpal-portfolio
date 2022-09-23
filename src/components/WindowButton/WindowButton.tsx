import styled, { CSSProperties } from "styled-components";

export const WindowButton = ({onClick, color}:WindowButtonProps) => 
<WindowButtonComponent 
  onClick={onClick} 
  style={{
    '--background-color': color
  } as CSSProperties}
/>

export interface WindowButtonProps {
  onClick: () => void
  color: string
};

const WindowButtonComponent = styled.button`
  border-width: 0px;
  border-radius: 3px;
  margin: 3px;
  width: 20px;
  height: 20px;
  font-size: 16px;
  font-weight: bold;
  opacity: 0.5;
  cursor: pointer;
  background-color: var(--background-color);
  transition: 0.5s;

  &:hover {

    opacity: 1.0;
    transition: 0.3s;
  }
`;