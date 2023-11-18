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
export const success = Template.bind({});
export const danger = Template.bind({});
export const blue = Template.bind({});

red.args = {
  color: 'red',
  label: 'Tag',
  variant: 'filled',
};

black.args = {
  color: 'black',
  label: 'Tag',
  variant: 'filled',
};

success.args = {
  color: 'success',
  label: 'Tag',
  variant: 'filled',
};

danger.args = {
  color: 'danger',
  label: 'Tag',
  variant: 'filled',
};

blue.args = {
  color: 'blue',
  label: 'Tag',
  variant: 'filled',
};