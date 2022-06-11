import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icon } from './Icon';

export default {
    title: 'Icon',
    component: Icon,
  } as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const PDFIcon = Template.bind({});
PDFIcon.args = {
  id: 1,
  iconName: 'pdf',
  text: 'Resume.pdf',
};

export const TextIcon = Template.bind({});
TextIcon.args = {
  id: 1,
  iconName: 'text',
  text: 'About.txt',
};

export const Link = Template.bind({});
Link.args = {
  id: 1,
  iconName: 'link',
  text: 'Resume.pdf',
};

export const FolderIcon = Template.bind({});
FolderIcon.args = {
  id: 1,
  iconName: 'folder',
  text: 'Folder',
};
