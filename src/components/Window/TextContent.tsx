import styled from "styled-components";
import { Icon } from "../Icon/Icon";

export const TextContent = ({content}: TextContentProps) => (
  <StyledTextContent contentEditable suppressContentEditableWarning={true}>
    {content}
  </StyledTextContent>
)

export interface TextContentProps {
  content: String
}

const StyledTextContent = styled.div`
  padding: 5px;
  height: var(--window-height);
  width: var(--window-width);
  min-height: 100px;
  min-width: 200px;
  max-height: 100%;
  background-color: white;
  overflow: scroll;
  border-top: inset 3px black;
  border-left: inset 3px black;
  border-bottom: inset 3px white;
  border-right: inset 3px white;
  border-radius: 0px 0px 8px 8px;
  font-family: 'fixedsys';
  font-size: 20px;
  outline: none;
  white-space: pre-line;
`;