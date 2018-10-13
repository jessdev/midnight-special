﻿// we want font-awesome to load as soon as possible to show the fa-spinner
//import './styles.css';
import './assets/app.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Aurelia } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';
import 'isomorphic-fetch';

export async function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin(PLATFORM.moduleName('aurelia-dialog'));

  // Uncomment the line below to enable animation.
  // aurelia.use.plugin(PLATFORM.moduleName('aurelia-animator-css'));
  // if the css animator is enabled, add swap-order="after" to all router-view elements

  // Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  // aurelia.use.plugin(PLATFORM.moduleName('aurelia-html-import-template-loader'));

  await aurelia.start();
  await aurelia.setRoot(PLATFORM.moduleName('app'));
}
