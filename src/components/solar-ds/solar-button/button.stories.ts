export default {
  // this creates a ‘Components’ folder and a ‘MyComponent’ subfolder
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
  label: 'primary',
  size: 'small',
};

Outlined.args = {
  type: 'outlined',
  label: 'outlined',
  size: 'small',
};

Secondary.args = {
  type: 'secondary',
  label: 'secondary',
  size: 'small',
};
