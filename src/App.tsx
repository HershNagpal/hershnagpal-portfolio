import { Home } from "./components/Home/Home";
import { TaskState } from "./model/taskState";
import './styles/colors.css';
import './styles/global.css';
import resume from './assets/content/Hersh_Nagpal_Resume.pdf';
import * as strings from './strings';

function App() {
  return <Home taskState={defaultAppState}/>;
};

export default App;

const defaultAppState = [
  {
    windowOpen: true,
    inTaskbar: true,
    focused: true,
    taskTitle: 'Welcome.txt',
    iconName: 'text',
    link: undefined,
    windowTextContent: strings.welcome,
    windowType: 'text',
    xPosition: 150,
    yPosition: 100,
  },
  {
    id: 1,
    windowOpen: false,
    inTaskbar: false,
    focused: false,
    taskTitle: 'Resume.pdf',
    iconName: 'pdf',
    link: undefined,
    windowType: 'pdf',
    pdfSource: resume,
  },
  {
    id: 3,
    windowOpen: false,
    inTaskbar: true,
    focused: true,
    taskTitle: 'Projects.txt',
    iconName: 'text',
    link: undefined,
    windowTextContent: strings.projects,
    windowType: 'text',
  },
] as TaskState[];
