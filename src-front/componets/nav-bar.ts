import { bindable, bindingMode } from 'aurelia-framework';
import { Router } from 'aurelia-router';

export class NavBar {
    @bindable router: Router | undefined;
    @bindable title: string | undefined;
    constructor() {
        console.log("router was created");
    }
}
