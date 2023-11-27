import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'solar-switch',
  styleUrl: 'switch.pcss',
  shadow: true,
})
export class SolarSwitch {
  /**
   * The color / style of the switch component
   * @type {string}
   * @default "red"
   */
  @Prop() color: string = 'red';

  @State() isActive: boolean = false;

  toggleSwitch() {
    this.isActive = !this.isActive;
  }

  render() {
    return (
      <span>
      <input 
        type="checkbox" 
        id="checkbox" 
        class={(this.isActive ? 'active ' : '') + 'switch'} 
        onClick={() => this.toggleSwitch()}
        />

        {/* <strong class="label">{this.isActive ? ' On' : ' Off'}</strong> */}
      </span>
      );
  }
}
