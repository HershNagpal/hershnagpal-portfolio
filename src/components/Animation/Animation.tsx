import styled from "styled-components";

export const CRTEffect = styled.div`
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

export const MovingDistortion = styled.div`
  @keyframes movingDistortion {
    from {
      transform: translateY(-10vh); }
    to {
      transform: translateY(110vh); } 
  }

  @keyframes fadeOut {
    from {
      opacity: 1; }
    to {
      opacity: 0; } 
  }

  background-color: white;
  position: fixed;
  z-index: 4;
  height: 5%;
  width: 100%;
  top: 0px;
  left: 0px;
  opacity: 0.1;
  filter: blur(4px);
  pointer-events: none;
  animation: movingDistortion 15s infinite;
  animation-timing-function: linear;
  animation-fill-mode: both;
`;

export const StartupWhite = styled.div`
  @keyframes whiteScreenStartup {
    20% {
      transform: scaleX(110);
      opacity: 1; }
    60% {
      transform: scale(110, 210); }
    100% {
      opacity: 0;
      transform: scale(110, 210); } 
  }
  background-color: white;
  position: fixed;
  z-index: 100;
  height: 0.5%;
  width: 1%;
  top: 50%;
  left: 50%;
  pointer-events: none;
  animation: whiteScreenStartup;
  animation-duration: 0.5s;
  animation-timing-function: linear;
  animation-fill-mode: both;
  filter: blur(0.1px);
`;

export const StartupBlack = styled.div`
  @keyframes fadeOut {
    from {
      opacity: 1; }
    to {
      opacity: 0; } 
  } 
  background-color: black;
  position: fixed;
  z-index: 99;
  height: 100%;
  width: 100%;
  top: 0px;
  left: 0px;
  pointer-events: none;
  animation: fadeOut 3s;
  animation-delay: 1s;
  animation-timing-function: linear;
  animation-fill-mode: both;
`;

export const InputText = styled.div`
  @keyframes fadeOut {
    from {
      opacity: 1; }
    to {
      opacity: 0; } 
  } 

  filter: blur(0.5px);
  position: fixed;
  color: white;
  font-family: "vcr";
  z-index: 100;
  font-size: 50px;
  top: 10%;
  left: 10%;
  pointer-events: none;
  animation: fadeOut 2s;
  animation-delay: 3s;
  animation-timing-function: linear;
  animation-fill-mode: both;
`;

export const FastMovingDistortion = styled.div`
  @keyframes movingDistortion {
    from {
      transform: translateY(-10vh); }
    to {
      transform: translateY(110vh); } 
  }
  background-color: white;
  position: fixed;
  z-index: 101;
  height: 10%;
  width: 100%;
  top: 0px;
  left: 0px;
  opacity: 0.1;
  filter: blur(4px);
  pointer-events: none;
  animation: movingDistortion 0.15s 7;
  animation-delay: 0.5s;
  animation-timing-function: linear;
  animation-fill-mode: both;
`;
