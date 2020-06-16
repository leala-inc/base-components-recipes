import { LightningElement } from 'lwc';

export default class OverlayDefaultCombobox extends LightningElement {
    get options() {
        return [
            { label: 'A', value: 'a' },
            { label: 'B', value: 'b' },
            { label: 'C', value: 'c' }
        ];
    }
}
