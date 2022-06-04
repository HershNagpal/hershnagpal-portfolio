import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icon } from './Icon';

export default {
    title: 'Icon',
    component: Icon,
  } as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const PDFIcon = Template.bind({});
PDFIcon.args = {
  iconName: 'pdf',
  text: 'Resume.pdf',
};

export const TextIcon = Template.bind({});
TextIcon.args = {
  iconName: 'text',
  text: 'About.txt',
};

export const Link = Template.bind({});
Link.args = {
  iconName: 'link',
  text: 'Resume.pdf',
};

export const FolderIcon = Template.bind({});
FolderIcon.args = {
  iconName: 'folder',
  text: 'Folder',
};
