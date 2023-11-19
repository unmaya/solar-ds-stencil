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

  @Prop() icon: string = 'assets/icon-x.svg';

  @State() isActive: boolean = false;

  toggleChip() {
    this.isActive = !this.isActive;
  }


  render() {
    return (
      // this handling of classes is rather ugly
        <span class={this.variant + ' ' + this.color} onClick={() => this.toggleChip()}>
          <slot />
          {this.isActive && this.icon && 
          <svg class="icon"  width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M4.97997 18.9966L19.0294 5.03613" stroke="var(--icon-color)" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M19.0295 18.9966L4.98004 5.03613" stroke="var(--icon-color)" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>}
        </span>

    );
  }
}
