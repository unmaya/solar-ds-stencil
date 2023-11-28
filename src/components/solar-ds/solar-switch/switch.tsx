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
      <input 
        type="checkbox" 
        id="checkbox" 
        class={'switch ' + this.color + ' ' + (this.isActive ? 'active ' : '')} 
        onClick={() => this.toggleSwitch()}
        />
      );
  }
}
