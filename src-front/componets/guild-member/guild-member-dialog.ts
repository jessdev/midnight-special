import { DialogController } from 'aurelia-dialog';
import { autoinject } from 'aurelia-framework';
import { GuildMember } from './guild-member';

@autoinject
export class GuildMemberDialog {
    public member: GuildMember | undefined;

    constructor(public controller: DialogController) {
        
    }
    activate(member: GuildMember) {
        this.member = member;
    }
}
