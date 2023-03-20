import styled from "styled-components";
import { useState } from "react";

export const InfoBar = ({}: InfoBarProps) => {

  const [dateTime, setDateTime] = useState<string>("");

  return <InfoBarContainer>
    <NameTitle>Hersh Nagpal</NameTitle>
  </InfoBarContainer>
};

export interface InfoBarProps {

};

const NameTitle = styled.h1`
  font-family: 'vt323';
  font-size: 32px;
  color: white;
  white-space: nowrap;
  overflow: hidden;
  text-align: center;
  user-select: none;
  text-shadow:
    -1px -1px 0 #000,
     1px -1px 0 #000,
    -1px  1px 0 #000,
     1px  1px 0 #000;
`;

const TimeDate = styled.div`
  font-family: 'vt323';
  font-size: 32px;
  color: white;
  white-space: nowrap;
  overflow: hidden;
  text-align: center;
  user-select: none;
  text-shadow:
    -1px -1px 0 #000,
     1px -1px 0 #000,
    -1px  1px 0 #000,
     1px  1px 0 #000;
`;

const InfoBarContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 45px;
  z-index: 3;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 10px;
  gap: 5px;
  align-items: center;
  background-color: rgba(103, 46, 209, 0.5);
  border-bottom: ridge 2px white;
`;

