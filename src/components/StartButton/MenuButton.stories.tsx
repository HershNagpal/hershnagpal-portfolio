import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MenuButton } from './MenuButton';

export default {
    title: 'Start Button',
    component: MenuButton,
  } as ComponentMeta<typeof MenuButton>;

const Template: ComponentStory<typeof MenuButton> = (args) => <MenuButton {...args} />;

export const Clicked = Template.bind({});
Clicked.args = {
  
};

export const Unclicked = Template.bind({});
Unclicked.args = {

}