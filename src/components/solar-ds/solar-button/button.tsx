import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'solar-button',
  styleUrl: 'button.pcss',
  shadow: true,
})
export class SolarButton {
  @Prop() label: string = 'Button';
  @Prop() type: string = 'filled';
  @Prop() variant: string = 'red';
  @Prop() size: string = 'medium';

  @State() counter: number = 0;

  handleClick = () => {
    this.counter += 1;
    // alert('Button clicked');
  }

  render() {
    return (
      // this handling of classes is rather ugly
      <button class={this.type + ' ' + this.variant + ' ' + this.size} onClick={this.handleClick}>
        <slot /> ({this.counter})
      </button>
    );
  }
}
