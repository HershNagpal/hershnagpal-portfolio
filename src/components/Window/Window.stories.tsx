import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Window } from './Window';

export default {
    title: 'Design System/Atoms/Window',
    component: Window,
  } as ComponentMeta<typeof Window>;

const Template: ComponentStory<typeof Window> = (args) => <Window {...args} />;

export const Default = Template.bind({});
Default.args = {
  iconName: 'text',
  type: 'text',
  windowTitle: 'About Me.txt',
  textContent: 'This is an about me window with information.',
  onClose: ()=>{},
  onMinimize: ()=>{},
};
