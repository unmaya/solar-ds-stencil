import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'solar-tag',
  styleUrl: 'tag.pcss',
  shadow: true,
})
export class SolarTag {
  @Prop() variant: string = 'filled';
  @Prop() label: string = 'Tag';
  @Prop() color: string = 'red';

  @State() counter: number = 0;

  handleClick = () => {
    this.counter += 1;
    // alert('Tag clicked');
  }

  render() {
    return (
      // this handling of classes is rather ugly
      <span class={this.variant + ' ' + this.color} onClick={this.handleClick}>
        <slot />
      </span>
    );
  }
}
