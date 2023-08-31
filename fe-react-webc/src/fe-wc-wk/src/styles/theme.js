import { css } from 'lit';
/**
 * Global Styles - can be imported in Lit components and referenced in your style definition.
 */
export default css `
  :host {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    --theme-primary: #1082a8;
    --theme-primary-hv: #0c6583;
    --theme-secondary: #eb1e7a;
    --theme-secondary-hv: #ce1267;
    --theme-success: #05c793;
    --theme-success-hv: #05b384;
    --theme-warn: #ffc847;
    --theme-warn-hv: #ffbc1f;
    --theme-error: #f15555;
    --theme-error-hv: #f04242;
    --theme-text: #0f0f0f;
    --theme-text-white: #ffffff;
    --theme-bg: #fafafa;
    --theme-lightgray: #d0d0d0;

    --theme-rounded-sm: 0.25rem;
    --theme-rounded-md: 0.5rem;
    --theme-rounded-lg: 1rem;

    --shadow-sm: 0px 1px 4px 0px rgba(0, 0, 0, 0.175);
    --shadow-md: 0px 2px 4px 2px rgba(0, 0, 0, 0.175);
    --shadow-lg: 0px 2px 8px 4px rgba(0, 0, 0, 0.175);

    --color-neutral-100: rgba(233, 226, 209, 1);
    --color-neutral-300: rgba(207, 206, 206, 1);
    --color-neutral-500: rgba(162, 146, 140, 1);
    --color-neutral-700: rgba(86, 65, 56, 1);
    --color-neutral-900: rgba(26, 20, 17, 1);
    --color-red-100: rgba(255, 188, 0, 1);
    --color-red-300: rgba(255, 45, 85, 1);
    --color-red-500: rgba(233, 25, 15, 1);
    --color-red-700: rgba(200, 20, 11, 1);
    --color-red-900: rgba(73, 8, 5, 1);
    --color-orange-100: rgba(255, 188, 0, 1);
    --color-orange-300: rgba(255, 142, 23, 1);
    --color-orange-500: rgba(244, 125, 0, 1);
    --color-orange-700: rgba(208, 125, 0, 1);
    --color-orange-900: rgba(82, 39, 4, 1);
    --color-blue-100: rgba(135, 245, 251, 1);
    --color-blue-300: rgba(65, 234, 212, 1);
    --color-blue-500: rgba(0, 122, 255, 1);
    --color-blue-700: rgba(20, 112, 165, 1);
    --color-blue-900: rgba(4, 22, 33, 1);
    --color-green-100: rgba(162, 251, 135, 1);
    --color-green-300: rgba(158, 244, 23, 1);
    --color-green-500: rgba(129, 219, 46, 1);
    --color-green-700: rgba(97, 147, 52, 1);
    --color-green-900: rgba(30, 45, 16, 1);
    --color-white: rgba(255, 255, 255, 1);
    --color-black: rgba(0, 0, 0, 1);
    --color-neutral: var(--color-neutral-300);
    --color-disable: var(--color-neutral-100);
    --color-focus: var(--color-black);
    --color-error: var(--color-red-300);
    --font-default: 'Lato', sans-serif;
    --font-headline: 'Lato Black', sans-serif;
    --font-weight-default: 400;
    --font-weight-button: 700;
    --font-weight-headline: 900;
    --font-headline-xl: 72px;
    --font-headline-lg: 48px;
    --font-headline-md: 36px;
    --font-headline-sm: 24px;
    --font-headline-xs: 14px;
    --font-headline-line-height-xl: 86px;
    --font-headline-line-height-lg: 58px;
    --font-headline-line-height-md: 44px;
    --font-headline-line-height-sm: 30px;
    --font-headline-line-height-xs: 12px;
    --font-body-lg: 36px;
    --font-body-icon: 24px;
    --font-body-md: 16px;
    --font-body-sm: 12px;
    --font-body-line-height-lg: 44px;
    --font-body-line-height-md: 20px;
    --font-body-line-height-sm: 14px;
    --padding-xl: 36px;
    --padding-lg: 24px;
    --padding-md: 16px;
    --padding-sm: 12px;
    --padding-xs: 8px;
    --padding-xxs: 4px;
    --margin-xl: 36px;
    --margin-lg: 24px;
    --margin-md: 16px;
    --margin-sm: 12px;
    --margin-xs: 8px;
    --margin-xxs: 4px;
    --radius-lg: 24px;
    --radius-md: 16px;
    --radius-sm: 12px;
    --input-min-dimension: 44px;
    --shadow: 0px 8px 24px 10px rgba(233, 226, 209, 0.25);
    --shadow-modal: 0px 8px 24px 10px rgba(233, 226, 209, 0.25);
    --shadow-tooltip: 0px 8px 24px 10px rgba(233, 226, 209, 0.75);
    --shadow-dialog: 0px 8px 24px 10px rgba(233, 226, 209, 0.5);
    --border-width-sm: 1px;
    --border-width-md: 2px;
    --border-width-lg: 4px;
    --border-default: var(--border-width-md) solid var(--color-neutral);
    --border-disable: var(--border-width-md) solid var(--color-disable);
    --border-blue: var(--border-width-md) solid var(--color-blue-500);
    --border-focus: var(--border-width-md) solid var(--color-focus);
    --border-error: var(--border-width-md) solid var(--color-error);
    --icon-check: url("data:image/svg+xml;charset=UTF-8,%3c?xml version='1.0' encoding='UTF-8'?%3e%3csvg width='29px' height='27px' viewBox='0 0 29 27' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3ctitle%3eCheck%3c/title%3e%3cg id='Symbols' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' font-family='ZapfDingbatsITC, Zapf Dingbats' font-size='36' font-weight='normal'%3e%3cg id='Checkbox-Checked-Focus' transform='translate(-8.000000, -9.000000)' fill='%23A2928C'%3e%3ctext id='✔︎'%3e%3ctspan x='7' y='35'%3e✔︎%3c/tspan%3e%3c/text%3e%3c/g%3e%3c/g%3e%3c/svg%3e ");
    --icon-indeterminate: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3e%3cpath d='M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z' fill='%23A2928C'/%3e%3c/svg%3e");
    --icon-check-blue: url("data:image/svg+xml;charset=UTF-8,%3c?xml version='1.0' encoding='UTF-8'?%3e%3csvg width='29px' height='27px' viewBox='0 0 29 27' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3ctitle%3eCheck%3c/title%3e%3cg id='Symbols' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' font-family='ZapfDingbatsITC, Zapf Dingbats' font-size='36' font-weight='normal'%3e%3cg id='Checkbox-Checked-Focus' transform='translate(-8.000000, -9.000000)' fill='%23007AFF'%3e%3ctext id='✔︎'%3e%3ctspan x='7' y='35'%3e✔︎%3c/tspan%3e%3c/text%3e%3c/g%3e%3c/g%3e%3c/svg%3e ");
    --icon-indeterminate-blue: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3e%3cpath d='M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z' fill='%23007AFF'/%3e%3c/svg%3e");
    --icon-check-error: url("data:image/svg+xml;charset=UTF-8,%3c?xml version='1.0' encoding='UTF-8'?%3e%3csvg width='29px' height='27px' viewBox='0 0 29 27' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3ctitle%3eCheck%3c/title%3e%3cg id='Symbols' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' font-family='ZapfDingbatsITC, Zapf Dingbats' font-size='36' font-weight='normal'%3e%3cg id='Checkbox-Checked-Focus' transform='translate(-8.000000, -9.000000)' fill='%23FF2D55'%3e%3ctext id='✔︎'%3e%3ctspan x='7' y='35'%3e✔︎%3c/tspan%3e%3c/text%3e%3c/g%3e%3c/g%3e%3c/svg%3e ");
    --icon-indeterminate-error: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3e%3cpath d='M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z' fill='%23FF2D55'/%3e%3c/svg%3e");
    --icon-check-disabled: url("data:image/svg+xml;charset=UTF-8,%3c?xml version='1.0' encoding='UTF-8'?%3e%3csvg width='29px' height='27px' viewBox='0 0 29 27' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3ctitle%3eCheck%3c/title%3e%3cg id='Symbols' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' font-family='ZapfDingbatsITC, Zapf Dingbats' font-size='36' font-weight='normal'%3e%3cg id='Checkbox-Checked-Focus' transform='translate(-8.000000, -9.000000)' fill='%23A2928C'%3e%3ctext id='✔︎'%3e%3ctspan x='7' y='35'%3e✔︎%3c/tspan%3e%3c/text%3e%3c/g%3e%3c/g%3e%3c/svg%3e ");
    --icon-indeterminate-disabled: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3e%3cpath d='M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z' fill='%23A2928C'/%3e%3c/svg%3e");
  }  
    
`;
//# sourceMappingURL=theme.js.map