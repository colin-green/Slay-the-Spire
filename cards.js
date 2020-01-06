module.exports = {

    ironcladCardPool: [
        class Bash {
            constructor() {
                this.name = 'Bash';
                this.type = 'Attack';
                this.rarity = 'Basic';
                this.cost = 2;
                this.damage = 8;
                this.vulnerable = 2;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.damage = 10;
                this.vulnerable = 3;
            }
        }
    ],

    silentCardPool: [
        class Neutralize {
            constructor() {
                this.name = 'Neutralize';
                this.type = 'Attack';
                this.rarity = 'Basic';
                this.cost = 0;
                this.damage = 3;
                this.weak = 1;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.damage = 4;
                this.weak = 2;
            }
        },
        
        class Survivor {
            constructor() {
                this.name = 'Survivor';
                this.type = 'Skill';
                this.rarity = 'Basic';
                this.cost = 1;
                this.block = 8;
                this.discard = 1;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.block = 11;
            }
        }
    ],

    defectCardPool: [
        class Zap {
            constructor() {
                this.name = 'Zap';
                this.type = 'Skill';
                this.rarity = 'Basic';
                this.cost = 1;
                this.channelLightning = 1;
                this.upgraded = false;
            }

            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.cost = 0;
            }
        },

        class Dualcast {
            constructor() {
                this.name = 'Dualcast';
                this.type = 'Skill';
                this.cost = 1;
                this.evokeFirstOrb = 2;
                this.upgraded = false;
            }

            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.cost = 0;
            }
        }
    ],

    watcherCardPool: [

        class Vigilance {
            constructor() {
                this.name = 'Vigilance';
                this.type = 'Skill';
                this.rarity = 'Basic';
                this.cost = 2;
                this.block = 8;
                this.upgraded = false;
            }

            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.block = 12;
                this.upgraded = true;
            }
        },

        class Eruption {
            constructor() {
                this.name = 'Eruption';
                this.type = 'Attack';
                this.rarity = 'Basic';
                this.cost = 2;
                this.damage = 9;
                this.upgraded = false;
            }

            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.cost = 1;
                this.upgraded = true;
            }
        }
    ],
    
    colorlessCardPool: [
        class Strike {
            constructor() {
                this.name = 'Strike';
                this.type = 'Attack';
                this.rarity = 'Basic';
                this.cost = 1;
                this.damage = 6;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.damage = 9;
            }
        },    
        class Defend {
            constructor() {
                this.name = 'Defend';
                this.type = 'Skill';
                this.rarity = 'Basic';
                this.cost = 1;
                this.block = 5;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.block = 8;
            }
        }
    ],
    
    cursePool: [
        class AscendersBane {
            constructor() {
                this.name = 'Ascender\'s Bane';
                this.type = 'Curse';
                this.unplayable = true;
                this.ethereal = true;
            }
        }
    ]

}