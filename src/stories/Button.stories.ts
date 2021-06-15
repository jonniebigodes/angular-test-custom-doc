
import { Story, Meta } from '@storybook/angular/types-6-0';
import Button from './button.component';

import CustomDocumentationComponent from './CustomDocumentationComponent';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  parameters: { 
    docs: { 
      page: CustomDocumentationComponent 
    } 
  }, 
} as Meta;

const Template: Story<Button> = (args: Button) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

// Primary.parameters = { docs: { page: null } };

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
