import { css } from 'lit';
export default css `
  :host {
    display: block;
  }

  .card {
    transition: all 250ms;
    background: var(--color-white);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow);
    overflow: hidden;
  }

  :host([size='small']) .card {
    padding: 0rem;
    max-width: 325px;
  }

  :host([size='medium']) .card {
    padding: 0rem;
    max-width: 475px;
  }

  :host([size='large']) .card {
    padding: 0rem;
    max-width: 100%;
  }

  :host([hoverable='true']) .card:hover,
  :host([hoverable='']) .card:hover {
    cursor: pointer;
    box-shadow: var(--shadow-lg);
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
//# sourceMappingURL=UICard.styles.js.map