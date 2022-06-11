import { Home } from "./components/Home/Home";
import { TaskState } from "./model/taskState";
import './styles/colors.css';
import './styles/global.css';

function App() {
  return <Home taskState={defaultAppState}/>;
};

export default App;

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const defaultAppState = [
  {
    id: 0,
    windowOpen: false,
    inTaskbar: true,
    focused: true,
    taskTitle: 'About.txt',
    iconName: 'text',
    link: undefined,
    windowTextContent: loremIpsum,
    windowType: 'text',
  }
] as TaskState[];
