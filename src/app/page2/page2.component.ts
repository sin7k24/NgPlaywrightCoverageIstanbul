import { Component } from '@angular/core';

@Component({
    selector: 'app-page2',
    templateUrl: './page2.component.html',
    styleUrls: ['./page2.component.scss'],
})
export class Page2Component {
    message = '';

    doSomethingOnPage2() {
        this.message = 'something on page2 done.';
    }
}
