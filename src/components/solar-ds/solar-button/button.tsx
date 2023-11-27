import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'solar-button',
  styleUrl: 'button.pcss',
  shadow: true,
})
export class SolarButton {
  /**
   * The text label of the button.
   * @type {string}
   * @default "Button"
   */
  @Prop() label: string = 'Button';

  /**
   * The type of the button, determining its primary styling.
   * Acceptable values include 'filled', 'outline', etc.
   * @type {string}
   * @default "filled"
   */
  @Prop() type: string = 'filled';

  /**
   * The variant of the button, usually defining its color.
   * Common variants include 'red', 'green', 'blue', etc.
   * @type {string}
   * @default "red"
   */
  @Prop() variant: string = 'red';

  /**
   * The size of the button. Can be 'small', 'medium', or 'large'.
   * @type {string}
   * @default "medium"
   */
  @Prop() size: string = 'medium';

  /**
   * State to track the number of times the button has been clicked. (as a basic example)
   * @type {number}
   * @default 0
   */
  @State() counter: number = 0;

  /**
   * Event handler for the button's click event.
   * Increments the counter each time the button is clicked.
   */
  handleClick = () => {
    this.counter += 1;
    // Alert functionality can be enabled for demonstration.
    // alert('Button clicked');
  }

  /**
   * Render function for the component.
   * Returns a styled button element with dynamic classes based on the component's props.
   */
  render() {
    return (
      // this handling of classes is rather ugly
      <button class={this.type + ' ' + this.variant + ' ' + this.size} onClick={this.handleClick}>
        <slot /> ({this.counter})
      </button>
    );
  }
}
