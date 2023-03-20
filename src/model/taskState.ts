import { IconName } from "../components/Icon/Icon";
import { WindowType } from "../components/Window/Window";

export type TaskState = {
  id: number
  windowOpen: boolean
  inTaskbar: boolean
  focused: boolean
  taskTitle: string
  iconName: IconName
  link?: string
  windowTextContent?: string
  windowType?: WindowType
  xPosition?: number
  yPosition?: number
};
