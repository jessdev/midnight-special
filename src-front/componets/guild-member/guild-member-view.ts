import { bindable, bindingMode, autoinject } from 'aurelia-framework';
import { GuildMember } from './guild-member';
import { GuildMemberDialog } from './guild-member-dialog';
import { DialogService } from 'aurelia-dialog';

@autoinject
export class GuildMemberView {
    @bindable public member: GuildMember | undefined;

    constructor(private dialogService: DialogService){

    }

    activate() {

    }

    public readMore(){
      console.log(this.member)
        this.dialogService.open({ viewModel: GuildMemberDialog, model: this.member, lock: false }).whenClosed(response => {
            if (!response.wasCancelled) {
              console.log('good - ', response.output);
            } else {
              console.log('bad');
            }
            console.log(response.output);
          });
    }
}
