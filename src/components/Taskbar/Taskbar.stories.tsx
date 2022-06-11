import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Taskbar } from './Taskbar';

export default {
    title: 'Taskbar',
    component: Taskbar,
    parameters: { paddings: { disable: true } },
  } as ComponentMeta<typeof Taskbar>;

const Template: ComponentStory<typeof Taskbar> = (args) => <Taskbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  tasks: [
    {
      id: 1,
      iconName: 'text',
      taskTitle: 'About Me.txt',
      toggleTask: () => {},
      inTaskbar: true,
      windowOpen: true,
    },
    {
      id: 2,
      iconName: 'text',
      taskTitle: 'About Me.txt',
      toggleTask: () => {},
      inTaskbar: true,
      windowOpen: true,
    },
    {
      id: 3,
      iconName: 'text',
      taskTitle: 'About Me.txt',
      toggleTask: () => {},
      inTaskbar: true,
      windowOpen: true,
    },
  ]
};
