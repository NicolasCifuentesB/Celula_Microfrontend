import { __decorate } from "tslib";
import { html, LitElement, property } from 'lit-element';
export class BaseButton extends LitElement {
    constructor() {
        super(...arguments);
        this.text = 'Base Button';
    }
    render() {
        return html `
            <button class="base-btn">${this.text}</button>
        `;
    }
}
__decorate([
    property({ type: String })
], BaseButton.prototype, "text", void 0);
//# sourceMappingURL=base-button.js.map