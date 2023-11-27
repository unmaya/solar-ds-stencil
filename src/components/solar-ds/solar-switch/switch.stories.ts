export default {
  title: 'Components/Switch',
  tags: ['autodocs'],

  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['red', 'black'],
    },
  },
};

const Template = (args) => `<solar-switch color="${args.color}"/>`;

export const red = Template.bind({});
export const black = Template.bind({});

red.args = {
  color: 'red',
};

black.args = {
  color: 'black',
};