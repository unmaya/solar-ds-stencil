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
      options: ['primary', 'outlined', 'secondary'],
    },
  },
};

const Template = (args) => `<solar-button type="${args.type}" size="${args.size}">${args.label}</solar-button>`;

export const Primary = Template.bind({});
export const Outlined = Template.bind({});
export const Secondary = Template.bind({});

Primary.args = {
  type: 'primary',
  label: 'Button',
  size: 'medium',
};

Outlined.args = {
  type: 'outlined',
  label: 'Button',
  size: 'medium',
};

Secondary.args = {
  type: 'secondary',
  label: 'Button',
  size: 'medium',
};
