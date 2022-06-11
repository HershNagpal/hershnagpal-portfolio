import styled from "styled-components";
import { Icon } from "../Icon/Icon";
import { Taskbar } from "../Taskbar/Taskbar";
import { TaskState } from "../../model/taskState";
import { Window } from "../Window/Window";
import { useState } from "react";

export const Home = ({taskState}: HomeProps) => {
  
  const [localTaskState, setLocalTaskState] = useState<TaskState[]>(taskState);

  const setWindowPosition = (taskId: number, x: number, y: number) => (
    setLocalTaskState(localTaskState.map((task)=>(
      task.id === taskId 
        ? {...task, xPosition: x, yPosition: y}
        : task
    )))
  );

  const minimizeTask = (taskId: number) => (
    setLocalTaskState(localTaskState.map((task)=>(
      task.id === taskId 
        ? {...task, windowOpen: false, focused: false}
        : task
    )))
  );

  const closeTask = (taskId: number) => (
    setLocalTaskState(localTaskState.map((task)=>(
      task.id === taskId 
        ? {...task, 
            inTaskbar: false, 
            windowOpen: false, 
            focused: false,
            xPosition: 0,
            yPosition: 0,
          }
        : task
    )))
  );

  const openTask = (taskId: number) => (
    setLocalTaskState(localTaskState.map((task)=>(
      task.id === taskId 
        ? {...task, inTaskbar: true, windowOpen: true, focused: true}
        : task
    )))
  );

  const focusTask = (taskId: number) => (
    localTaskState.map((task)=>(
      task.id === taskId 
        ? {...task, windowOpen: true, focused: true}
        : {...task, focused: false}
    ))
  );

  const toggleTaskWindow = (taskId: number) => {
    setLocalTaskState(localTaskState.map((task)=>(
      task.id === taskId 
        ? {...task, windowOpen: !task.windowOpen, focused: true}
        : task
    )))
  };

  return <HomeBackground>
    <CRTEffect />
    {localTaskState.map((task, index) => (
      <Icon 
        id={task.id}
        key={index}
        iconName={task.iconName}
        text={task.taskTitle}
        // onClick={toggleTaskWindow}
        onDoubleClick={openTask}
      />
    ))}

    {localTaskState.map((task, index) => (
      task.windowOpen && <Window 
        id={task.id}
        isFocused={task.focused}
        key={index}
        windowTitle={task.taskTitle}
        type={task.windowType}
        iconName={task.iconName}
        onClose={closeTask}
        onMinimize={minimizeTask}
        setWindowPosition={setWindowPosition}
        textContent={task.windowTextContent}
        xPosition={task.xPosition}
        yPosition={task.yPosition}
      />
    ))}

    <Taskbar tasks={
      localTaskState.map((task) => (
        {
          id: task.id,
          iconName: task.iconName,
          taskTitle: task.taskTitle,
          toggleTask: toggleTaskWindow,
          inTaskbar: task.inTaskbar,
          windowOpen: task.windowOpen,
        }
      ))
    }/>
  </HomeBackground>
};

export interface HomeProps {
  taskState: TaskState[]
};

const HomeBackground = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background-color: aliceblue;
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
