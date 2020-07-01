import { LightningElement } from 'lwc';

export default class OverlayFixedPostionCombobox extends LightningElement {
    get options() {
        return [
            { label: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', value: 'a' },
            { label: 'BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB', value: 'b' },
            { label: 'CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC', value: 'c' },
            { label: 'DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD', value: 'd' },
            { label: 'EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE', value: 'e' }
        ];
    }
}
