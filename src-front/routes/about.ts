import { autoinject } from 'aurelia-framework';
import { GuildMember } from '../componets/guild-member/guild-member';

@autoinject
export class About {
    public memberList: GuildMember[];
    constructor() {
        this.memberList = [
            new GuildMember('Thisisur',
            'Guild Social Chair - Tank',
            'images/thisisur-thumb.png',
            "Thisisur is our resident Blood Elf Paladin. He's okay at his job", 
            '"Thisisur Paladin speaking, please keep your hands and feet inside the tank at all times"'),
            new GuildMember('Cerules',
            'Founder - Healer',
            'images/cerules-thumb.png',
            "Placeholder Text", 
            '"Placeholder Text"')
        ];
    }
}
