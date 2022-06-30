import styled from "styled-components";
import { MenuButton, MenuButtonProps } from "../StartButton/MenuButton";
import { Task, TaskProps } from "../Task/Task";

export const Taskbar = ({tasks, menuButton}: TaskbarProps) => {

  return <TaskbarContainer>
    <MenuButton {...menuButton} />
    {tasks.map((task, index) => (
      task.inTaskbar && <Task key={index} {...task} />
    ))}
  </TaskbarContainer>
}

export interface TaskbarProps {
  menuButton: MenuButtonProps
  tasks: TaskProps[]
}

const TaskbarContainer = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 45px;
  z-index: 3;
  display: flex;
  flex-direction: row;
  padding: 5px 10px;
  gap: 5px;
  align-items: center;
  background-color: rgba(103, 46, 209, 0.5);

  border-top: ridge 2px white;
`;