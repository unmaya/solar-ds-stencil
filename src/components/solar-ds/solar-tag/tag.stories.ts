export default {
  title: 'Components/Tag',
  tags: ['autodocs'],

  argTypes: {
    label: { control: 'text' },
    color: {
      control: { type: 'select' },
      options: ['red', 'black', 'success', 'danger', 'blue'],
    },
    variant: {
      control: { type: 'select' },
      options: ['filled', 'outlined'],
    },
  },
};

const Template = (args) => `<solar-tag variant="${args.variant}" color="${args.color}">${args.label}</solar-tag>`;

export const red = Template.bind({});
export const black = Template.bind({});
export const blue = Template.bind({});
export const success = Template.bind({});
export const danger = Template.bind({});

red.args = {
  variant: 'filled',
  color: 'red',
  label: 'Tag',
};

black.args = {
  variant: 'filled',
  color: 'black',
  label: 'Tag',
};

success.args = {
  variant: 'filled',
  color: 'success',
  label: 'Tag',
};

danger.args = {
  variant: 'filled',
  color: 'danger',
  label: 'Tag',
};

blue.args = {
  variant: 'filled',
  color: 'blue',
  label: 'Tag',
};