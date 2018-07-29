import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-display-dialog',
    templateUrl: './display-dialog.component.html'

})

export class DisplayDialogComponent {

    display = false;
    @Input('header') header = '';
    @Input('contentStyle') contentStyle;

    constructor() { }

    ngOnInit() {

    }

    show() {
        this.display = true;
    }

    hide() {
        this.display = false;
    }
}