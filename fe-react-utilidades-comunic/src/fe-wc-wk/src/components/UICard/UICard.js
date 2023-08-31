import { __decorate } from "tslib";
import { html } from 'lit';
import { property, state } from 'lit/decorators.js';
import { UIComponent } from '../../lib/UIComponent';
import styles from './UICard.styles';
export class UICard extends UIComponent {
    constructor() {
        super(...arguments);
        this.size = 'medium';
        this.hoverable = true;
        this.hasImage = false;
    }
    static get styles() {
        return [super.styles, styles];
    }
    firstUpdated() {
        var _a;
        const imgSlot = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('img');
        if (imgSlot !== null)
            this.hasImage = true;
    }
    render() {
        return html `
    <article class='card'>
      <header>
        <slot name="header"></slot>
      </header>
      <section>
          <slot name="content"></slot>
      </section>
      <footer>
          <slot name="footer"></slot>
      </footer>
    </article>
    `;
    }
}
__decorate([
    property({ type: String, reflect: true })
], UICard.prototype, "size", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], UICard.prototype, "hoverable", void 0);
__decorate([
    state()
], UICard.prototype, "hasImage", void 0);
//# sourceMappingURL=UICard.js.map