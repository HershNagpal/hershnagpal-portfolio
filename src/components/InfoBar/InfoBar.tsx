import styled from "styled-components";
import Clock from 'react-live-clock'

export const InfoBar = ({}: InfoBarProps) =>
<InfoBarContainer>
  <NameTitle>Hersh Nagpal</NameTitle>
  <StyledClock format={'ddd Do h:mm A'} ticking={true} />
</InfoBarContainer>;

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

const StyledClock = styled(Clock)`
  font-family: 'fixedsys';
  font-size: 20px;
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

