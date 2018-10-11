 import { GuildMember } from '../componets/guild-member/guild-member';

export class Members{
    public memberList: GuildMember[];
    constructor(){
        this.memberList = [
            new GuildMember('images/thisisur-thumb.png', //'../assets/guild-members/thisisur-thumb.png', 
            "Thisisur is our resident Blood Elf Paladin. He's okay at his job", 
            'Thisisur Paladin speaking, please keep your hands and feet inside the tank at all times')
        ];
    }
}