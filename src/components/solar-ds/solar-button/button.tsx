import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'solar-button',
  styleUrl: 'button.pcss',
  shadow: true,
})
export class SolarButton {
  // @Prop() label: string = 'Button';
  @Prop() type = 'primary';

  @State() counter: number = 0;

  handleClick = () => {
    this.counter += 1;
    // alert('Button clicked');
  }

  render() {
    return (
      <button class={this.type} onClick={this.handleClick}>
        <slot /> ({this.counter})
      </button>
    );
  }
}
