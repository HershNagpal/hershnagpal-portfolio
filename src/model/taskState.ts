import { IconName } from "../components/Icon/Icon";
import { WindowType } from "../components/Window/Window";

export type TaskState = {
  id: number
  open: boolean
  focused: boolean
  taskTitle: string
  iconName: IconName
  link?: string
  onClickTask: () => void
  onCloseWindow: () => void
  onMinimizeWindow: () => void
  onClickIcon?: () => void
  onDoubleClickIcon?: () => void
  windowTextContent?: string
  windowType: WindowType
};
