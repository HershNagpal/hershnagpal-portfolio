import styled from "styled-components";
import { Icon } from "../Icon/Icon";
import { Taskbar } from "../Taskbar/Taskbar";
import { TaskState } from "../../model/taskState";
import { Window } from "../Window/Window";
import { useState } from "react";
import { CRTEffect, MovingDistortion, StartupWhite, StartupBlack, InputText, FastMovingDistortion } from "../Animation/Animation";

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
    <MovingDistortion />
    <StartupWhite />
    <StartupBlack />
    <InputText>INPUT 1</InputText>
    <FastMovingDistortion />

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
        pdfSource={task.pdfSource}
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

  @keyframes gradient {
    0% {
      background-position: 0% 50%; }
    50% {
      background-position: 100% 50%; }
    100% {
      background-position: 0% 50%; } 
  }

  min-height: 100vh;
  min-width: 100vw;
  background-color: aliceblue;
  display: flex;
  flex-direction: column;
  background:linear-gradient(#FF367F,transparent);
  background-color: var(--blue);
  animation: gradient 15s ease infinite;
  background: linear-gradient(-45deg, var(--orange), var(--blue), var(--pink));
  background-size: 400% 400%;
`;
