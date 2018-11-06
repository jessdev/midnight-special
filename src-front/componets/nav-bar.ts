import { bindable, bindingMode } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import * as $ from 'jquery';

export class NavBar {
    @bindable router: Router | undefined;
    @bindable title: string | undefined;
    constructor() {
        $(window).scroll(this.navbarCollapse);
    }
    public navbarCollapse = function () {
        if ($("#mainNav").offset()!.top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
}
