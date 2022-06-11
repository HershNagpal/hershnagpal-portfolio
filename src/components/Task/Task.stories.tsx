import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Task } from './Task';

export default {
    title: 'Task',
    component: Task,
  } as ComponentMeta<typeof Task>;

const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 1,
  iconName: 'text',
  taskTitle: 'About Me.txt',
  toggleTask: () => {},
};
