import styled from 'styled-components';
import iconFolder from '../../assets/images/icons/folder.svg';
import iconLink from '../../assets/images/icons/link.svg';
import iconPdf from '../../assets/images/icons/pdf.svg';
import iconText from '../../assets/images/icons/text.svg';

export const Icon = ({iconName, onClick, onDoubleClick, text, id}: IconProps) => 
<IconContainer 
  onDoubleClick={() => {if (onDoubleClick) onDoubleClick(id)}} 
  onClick={() => {if (onClick) onClick(id)}}
>
  <IconImage alt='icon' src={getIcon(iconName)} />
  <IconText>{text}</IconText>
</IconContainer>;

export interface IconProps {
  id: number,
  iconName: IconName
  onDoubleClick?: (id: number) => void
  onClick?: (id: number) => void
  text: string
}; 

export type IconName = 'folder' | 'link' | 'pdf' | 'text';

export const getIcon = (iconName: IconName) => ({
  'folder': iconFolder,
  'link': iconLink,
  'pdf': iconPdf,
  'text': iconText,
}[iconName]);

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  cursor: default;
  user-select: none;
  padding: 10px;
  width: 150px;
`;

const IconText = styled.p`
  font-family: 'vt323';
  text-overflow: ellipsis;
  font-size: 24px;
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

const IconImage = styled.img`
  height: 75px;
`;
