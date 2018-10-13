import {Aurelia} from 'aurelia-framework';
import {Router, RouterConfiguration} from 'aurelia-router';
import {PLATFORM} from 'aurelia-pal';
import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';

export class App {
  router: Router | undefined;
  title: string;

  constructor(){
    this.title = "Midnight Special";
  }

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = this.title;
    config.map([
      { route: ['', 'home'], name: 'home',moduleId: PLATFORM.moduleName('./routes/home'), nav: true, title: 'Home' },
      { route: ['about'], name: 'about',moduleId: PLATFORM.moduleName('./routes/about'), nav: true, title: 'About' },
      { route: ['members'], name: 'members',moduleId: PLATFORM.moduleName('./routes/members'), nav: true, title: 'Members' }
    ]);

    this.router = router;
  }
}
