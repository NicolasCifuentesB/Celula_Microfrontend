import { html, css, LitElement } from 'lit-element';
export class BaseCard extends LitElement {
    render() {
        return html `
        <header>
            <slot name="header"></slot>
        </header>
        <section>
            <slot name="content"></slot>
        </section>
        <footer>
            <slot name="footer"></slot>
        </footer>
        `;
    }
}
BaseCard.styles = css `
    :host {
        display: block;
        background: var(--color-white);
        border-radius: var(--radius-md);
        box-shadow: var(--shadow);
        overflow: hidden;
        max-width: 320px;
    }

    ::slotted(*) {
        padding-left: var(--padding-lg);
        padding-right: var(--padding-lg);
     }
     
    ::slotted(a:link), ::slotted(a:visited) {
        display: block;
    }

    ::slotted(:last-child) {
        padding-bottom: var(--margin-lg);
    }

    ::slotted(img) {
        width: 100%;
        padding-left: 0px;
        padding-right: 0px;
    }   
    `;
//# sourceMappingURL=base-card.js.map