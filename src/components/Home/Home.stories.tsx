import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Home } from './Home';

export default {
    title: 'Home',
    component: Home,
    parameters: { paddings: { disable: true } },
  } as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = (args) => <Home {...args} />;

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

export const Default = Template.bind({});
Default.args = {
  taskState: [
    {
      id: 0,
      open: true,
      focused: true,
      taskTitle: 'About.txt',
      iconName: 'text',
      link: undefined,
      onClickTask: () => {},
      onCloseWindow: () => {},
      onMinimizeWindow: () => {},
      onClickIcon: () => {},
      onDoubleClickIcon: () => {},
      windowTextContent: loremIpsum,
      windowType: 'text',
    }
  ]
};
