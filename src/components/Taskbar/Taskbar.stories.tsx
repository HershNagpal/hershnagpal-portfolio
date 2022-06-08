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
      iconName: 'text',
      taskTitle: 'About Me.txt',
      onClick: () => {},
    },
    {
      iconName: 'text',
      taskTitle: 'About Me.txt',
      onClick: () => {},
    },
    {
      iconName: 'text',
      taskTitle: 'About Me.txt',
      onClick: () => {},
    },
  ]
};
