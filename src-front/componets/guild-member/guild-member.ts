import { bindable, bindingMode } from 'aurelia-framework';

export class GuildMember{
    @bindable public imagepath: string | undefined;
    @bindable public description: string | undefined;
    @bindable public quote: string | undefined;

    constructor(imagepath: string, description: string, quote: string){
        this.imagepath = imagepath;
        this.description = description;
        this.quote = quote;
    }
}
