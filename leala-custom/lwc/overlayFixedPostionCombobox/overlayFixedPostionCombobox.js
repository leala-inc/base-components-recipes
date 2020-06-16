import { LightningElement } from 'lwc';

export default class OverlayFixedPostionCombobox extends LightningElement {
    get options() {
        return [
            { label: 'A', value: 'a' },
            { label: 'B', value: 'b' },
            { label: 'C', value: 'c' }
        ];
    }
}
