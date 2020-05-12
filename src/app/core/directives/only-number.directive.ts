import { Directive, HostListener } from '@angular/core';

@Directive({
    selector: '[onlyNumber]'
})
export class OnlyNumberDirective {

    @HostListener('keypress', ['$event']) onKeyPress(event) {
        let e = <KeyboardEvent>event;
        if (e.key.toLowerCase() === 'tab') {
            return;
        }
        let isValid = new RegExp(/^[0-9]*$/).test(e.key);
        if (!isValid)
            e.preventDefault();
    }
}
