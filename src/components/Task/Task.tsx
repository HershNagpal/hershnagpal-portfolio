import { useState } from "react";
import styled, { CSSProperties } from "styled-components";
import { IconName, getIcon } from "../Icon/Icon";

export const Task = ({iconName, taskTitle, toggleTask, windowOpen, id}: TaskProps) => {

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    toggleTask(id);
  };

  return <TaskContainer 
    onClick={handleClick}
    style={{
      ...(windowOpen && { 
        '--top-border': 'inset 2px rgb(12, 5, 77)',
        '--bottom-border': 'inset 2px white',
        '--left-border': 'inset 2px rgb(12, 5, 77)',
        '--right-border': 'inset 2px white',
      }),
      ...(!windowOpen && { 
        '--top-border': 'ridge 2px white',
        '--bottom-border': 'ridge 2px rgb(12, 5, 77)',
        '--left-border': 'ridge 2px white',
        '--right-border': 'ridge 2px rgb(12, 5, 77)',
      }),
    } as CSSProperties}
  >
    <TaskIcon alt='icon' src={getIcon(iconName)} />
    <TaskText>{taskTitle}</TaskText>
  </TaskContainer>
};

export interface TaskProps {
  id: number
  iconName: IconName
  taskTitle: string
  inTaskbar: boolean
  windowOpen: boolean
  toggleTask: (id: number) => void
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
  min-width: 200px;
  max-width: 500px;
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
