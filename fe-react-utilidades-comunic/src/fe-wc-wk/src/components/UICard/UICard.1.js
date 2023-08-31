import { __decorate } from "tslib";
import { html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { UIComponent } from '../../lib/UIComponent';
import styles from './UICard.styles';
let UICard = class UICard extends UIComponent {
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
      <article class="card">
        <div class="card-img ${this.hasImage ? 'has-img' : ''}">
          <slot name="img"></slot>
        </div>
        <header class="card-title"><slot name="title"></slot></header>
        <section class="card-body">
          <slot></slot>
        </section>
        <footer class="card-footer">
          <slot name="footer"></slot>
        </footer>
      </article>
    `;
    }
};
__decorate([
    property({ type: String, reflect: true })
], UICard.prototype, "size", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], UICard.prototype, "hoverable", void 0);
__decorate([
    state()
], UICard.prototype, "hasImage", void 0);
UICard = __decorate([
    customElement('ui-card')
], UICard);
export default UICard;
//# sourceMappingURL=UICard.1.js.map