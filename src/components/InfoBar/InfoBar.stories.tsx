import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InfoBar } from './InfoBar';

export default {
    title: 'InfoBar',
    component: InfoBar,
    parameters: { paddings: { disable: true } },
  } as ComponentMeta<typeof InfoBar>;

const Template: ComponentStory<typeof InfoBar> = (args) => <InfoBar />;

export const Default = Template.bind({});
Default.args = {
  
};
