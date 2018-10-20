import { autoinject } from 'aurelia-framework';
import { GuildMember } from '../componets/guild-member/guild-member';

@autoinject
export class About {
    public memberList: GuildMember[];
    constructor() {
        this.memberList = [
            new GuildMember('Archmender',
            'Guild Master - Healer',
            'images/thumb.png',
            "Archmender is the self-loathing Highmountain Tauren Druid of Midnight Special. "+
            "Some say in his 10+ years of playing WoW, he’s never once left the Resto spec nor said “for the Horde!” He’s the much-hated raid leader / healer combo with an affinity for a damn good omelette.", 
            '"Wait, we killed the heart?!?” Indiscernible cursing and grunting “Fuuuuuu, cooldowns Kirk!"',
            "Tauren",
            "Shaman"
            ),
            new GuildMember('Khazit',
            'Guild Master - Tank',
            'images/khazit-thumb.png',
            "Khazit, Blood Death Knight and often main tank. Archmender's twin, but not by choice.",
            '"I drank, a lot. I guarantee you I didn\'t do shit while drunk though"',
            "Goblin",
            "Death Knight"
            ),
            new GuildMember('Thisisur',
            'Guild Social Chair - Tank',
            'images/thisisur-thumb.png',
            "Thisisur is our resident Blood Elf Paladin. Currently the off tank in our raid team, this is his first time on the front line of the expansion.", 
            '"Thisisur Paladin speaking, please keep your hands and feet inside the tank at all times"',
            "Blood Elf",
            "Paladin"
            ),
            new GuildMember('Cerules',
            'Founder - Healer',
            'images/cerules-thumb.png',
            "Cerules is a veteran of the front lines of Azeroth. He's done a tour of Pandaria and heals for a living as a priest.", 
            '"Oh.... I used halo again."',
            "Forsaken",
            "Priest"
            ),
            new GuildMember('Spectre Ash',
            'Member - Melee DPS',
            'images/spacetrash-thumb.png',
            "placeholder", 
            '"Oh... I was using my aoe on this one dude."',
            "Blood Elf",
            "Demon Hunter"
            )
        ];
    }
}
