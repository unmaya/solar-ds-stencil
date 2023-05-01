export default {
  // this creates a ‘Components’ folder and a ‘MyComponent’ subfolder
  title: 'Components/Button',
};

const Template = (args) => `<solar-button type="${args.type}">${args.type}</solar-button>`;

export const Example = Template.bind({});

Example.args = {
  type: 'primary',
};
