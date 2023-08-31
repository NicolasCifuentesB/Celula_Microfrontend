import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import theme from '../styles/theme';
let UIComponent = class UIComponent extends LitElement {
};
UIComponent.styles = theme;
UIComponent = __decorate([
    customElement('ui-component')
], UIComponent);
export { UIComponent };
//# sourceMappingURL=UIComponent.js.map