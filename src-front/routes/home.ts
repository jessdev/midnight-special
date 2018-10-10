import {Aurelia} from 'aurelia-framework';
import {Router, RouterConfiguration} from 'aurelia-router';
import {PLATFORM} from 'aurelia-pal';

export class Home {
  public name: string;
  public description: string;
  constructor(){
      this.name = "We are Midnight Special";
      this.description = "We're only semi-profession in voice chat, but we're here to raid and run dungeons."
  }
}
