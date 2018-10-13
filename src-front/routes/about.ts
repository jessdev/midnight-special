import { GuildMember } from '../componets/guild-member/guild-member';

export class About {
    public memberList: GuildMember[];
    constructor(){
        this.memberList = [
            new GuildMember('images/thisisur-thumb.png',
            "Thisisur is our resident Blood Elf Paladin. He's okay at his job", 
            '"Thisisur Paladin speaking, please keep your hands and feet inside the tank at all times"'),
            new GuildMember('images/cerules-thumb.png',
            "Placeholder Text", 
            '"Placeholder Text"')
        ];
    }
}
