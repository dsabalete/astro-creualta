import { html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('special-button')
export class SpecialLitButton extends LitElement {
  specialFunction() {
    alert('you clicked me!')
  }

  render() {
    return html`<button @click=${this.specialFunction}>
    <slot></slot>
    </button>`
  }
}