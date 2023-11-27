# solar-button

The `solar-button` component is a versatile button element with customizable properties. It is designed to be used in various contexts where a button action is required.

## Features

- **Customizable Appearance**: Adjust the `type`, `variant`, and `size` to change the button's appearance.

## Props

- **label:** The text label of the button (default: "Button").
- **type:** Determines the primary styling of the button. Acceptable values include 'filled', 'outline', etc. (default: "filled").
- **variant:** Defines the button's color. Common variants include 'red', 'green', 'blue', etc. (default: "red").
- **size:** The size of the button. Can be 'small', 'medium', or 'large' (default: "medium").

## Usage

```jsx
<solar-button
  label="Click Me"
  type="filled"
  variant="red"
  size="medium"
/>


<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description                                                                                                  | Type     | Default    |
| --------- | --------- | ------------------------------------------------------------------------------------------------------------ | -------- | ---------- |
| `label`   | `label`   | The text label of the button.                                                                                | `string` | `'Button'` |
| `size`    | `size`    | The size of the button. Can be 'small', 'medium', or 'large'.                                                | `string` | `'medium'` |
| `type`    | `type`    | The type of the button, determining its primary styling. Acceptable values include 'filled', 'outline', etc. | `string` | `'filled'` |
| `variant` | `variant` | The variant of the button, usually defining its color. Common variants include 'red', 'green', 'blue', etc.  | `string` | `'red'`    |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
