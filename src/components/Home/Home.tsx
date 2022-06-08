import styled from "styled-components";
import { Icon } from "../Icon/Icon";
import { Taskbar } from "../Taskbar/Taskbar";
import { TaskState } from "../../model/taskState";
import { Window } from "../Window/Window";
import { useEffect, useState } from "react";

export const Home = ({taskState}: HomeProps) => {
  
  const [localTaskState, setLocalTaskState] = useState<TaskState[]>(taskState);

  const minimizeTask = (taskId: number) => {
    
  };

  const closeTask = (taskID: number) => {

  };

  const focusTask = (taskID: number) => {

  };

  const openTask = (taskID: number) => {
    
  };

  return <HomeBackground>
    <CRTEffect />
    {localTaskState.map((task, index) => (
      <Icon 
        key={index}
        iconName={task.iconName}
        text={task.taskTitle}
        onClick={task.onClickIcon}
        onDoubleClick={task.onDoubleClickIcon}
      />
    ))}

    {localTaskState.map((task, index) => (
      <Window 
        key={index}
        windowTitle={task.taskTitle}
        type={task.windowType}
        iconName={task.iconName}
        onClose={task.onCloseWindow}
        onMinimize={task.onMinimizeWindow}
        textContent={task.windowTextContent}
      />
    ))}

    <Taskbar tasks={
      localTaskState.map((task) => (
        {
          iconName: task.iconName,
          taskTitle: task.taskTitle,
          onClick: task.onClickTask,
        }
      ))
    }/>
  </HomeBackground>
};

export interface HomeProps {
  taskState: TaskState[]
};

const HomeBackground = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CRTEffect = styled.div`
  content: " ";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: linear-gradient(rgba(18, 16, 16, 0) 60%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
  z-index: 100;
  background-size: 100% 2px, 3px 100%;
  pointer-events: none;
`;
