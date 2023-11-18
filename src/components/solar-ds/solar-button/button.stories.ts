export default {
  // this creates a ‘Components’ group and a ‘Button’ item
  title: 'Components/Button',
  tags: ['autodocs'],

  argTypes: {
    label: { control: 'text' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    type: {
      control: { type: 'select' },
      options: ['filled', 'outlined', 'ghost'],
    },
    variant: {
      control: { type: 'select' },
      options: ['red', 'black'],
    },
  },
};

const Template = (args) => `<solar-button variant="${args.variant}" type="${args.type}" size="${args.size}">${args.label}</solar-button>`;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Outlined = Template.bind({});
export const Ghost = Template.bind({});

Primary.args = {
  type: 'filled',
  variant: 'red',
  size: 'medium',
  label: 'Button',
};

Secondary.args = {
  type: 'filled',
  variant: 'black',
  size: 'medium',
  label: 'Button',
};

Outlined.args = {
  type: 'outlined',
  variant: 'red',
  size: 'medium',
  label: 'Button',
};

Ghost.args = {
  type: 'ghost',
  variant: 'black',
  size: 'medium',
  label: 'Button',
};