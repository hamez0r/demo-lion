import { LitElement, html } from "lit";

// It won't work without the following two lines
import { LionCollapsible } from "@lion/collapsible";
customElements.define("lion-collapsible", LionCollapsible);

export class DemoLion extends LitElement {
  constructor() {
    super();
    this.title = "My app";
  }

  render() {
    return html`
      <main>
        <lion-collapsible>
          <h5 slot="invoker">Click Me</h5>
          <h5 slot="content">Pick a boo!</h5>
        </lion-collapsible>
      </main>
    `;
  }
}
