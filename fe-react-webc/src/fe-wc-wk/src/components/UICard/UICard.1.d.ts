import { UIComponent } from '../../lib/UIComponent';
export default class UICard extends UIComponent {
    static get styles(): (import("lit").CSSResult | import("lit").CSSResultArray)[];
    size: string;
    hoverable: boolean;
    hasImage: boolean;
    firstUpdated(): void;
    render(): import("lit-html").TemplateResult<1>;
}
