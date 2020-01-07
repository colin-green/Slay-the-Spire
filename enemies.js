module.exports = {

    act1Enemies: [

        class AcidSlimeL {
            constructor() {
                this.name = 'Acid Slime (L)'
                this.minHP = 65;
                this.maxHP = 69;
                this.actualHP = Math.floor(Math.random() * 5) + 65;
                this.currentHP = this.actualHP;
                this.corrosiveSpitChance = 30;
                this.tackleChance = 40;
                this.lickChance = 30;
                this.corrosiveSpitCounter = 0;
                this.tackleCounter = 0;
                this.lickCounter = 0;
            }

            AI() {
                let roll = Math.floor(Math.random() * 100) + 1;
                console.log(`Roll: ${roll}`);
        
                if (roll <= 30 && this.corrosiveSpitCounter < 2) {
                    this.corrosiveSpit();
                    this.showIntent();
                } else if (roll > 30 && roll <= 70 && this.tackleCounter < 1) {
                    this.tackle();
                    this.showIntent();
                } else if (roll > 70 && this.lickCounter < 2) {
                    this.lick();
                    this.showIntent();
                } else {
                    this.AI();
                }
            }
        
            showIntent() {
                let string = `${this.name} plans to ${this.intent}`;
                if (this.intent === 'Attack' || this.intent === 'Attack/Debuff') {
                    string += ` for ${this.damage} damage.`
                }
        
                console.log(string);
            }

            corrosiveSpit() {
                this.intent = 'Attack/Debuff'
                this.damage = 11;
                this.slimes = 2;
                this.corrosiveSpitCounter++;
                this.lickCounter = 0;
                this.tackleCounter = 0;
            }

            split() {
                this.intent = '???'
                if (this.currentHP <= Math.floor(this.actualHP / 2)) {
                    // Code here
                }
            }

            lick() {
                this.intent = 'Debuff'
                this.weak = 2;
                this.lickCounter++;
                this.corrosiveSpitCounter = 0;
                this.tackleCounter = 0;
            }

            tackle() {
                this.intent = 'Attack';
                this.damage = 16;
                this.tackleCounter++;
                this.lickCounter = 0;
                this.corrosiveSpitCounter = 0;
            }
        },

        class Cultist {
            constructor() {
                this.name = 'Cultist'
                this.minHP = 48;
                this.maxHP = 54;
                this.actualHP = Math.floor(Math.random() * 7) + 48;
                this.currentHP = this.actualHP;
                this.strength = 0;
            }

            incantation() {
                this.intent = 'Buff'
                this.ritual = 3;
            }

            darkStrike() {
                this.intent = 'Attack'
                this.damage = 6;
            }

            AI() {
                if (turn === 1) {
                    this.incantation();
                    this.showIntent();
                } else {
                    this.darkStrike();
                    this.showIntent();
                }
            }

            showIntent() {
                let string = `${this.name} plans to ${this.intent}`;
                if (this.intent === 'Attack') {
                    string += ` for ${this.damage} damage.`
                } else string += '.'
                console.log(string)
            }

        },

        class JawWorm {
            constructor() {
                this.name = 'Jaw Worm'
                this.minHP = 40;
                this.maxHP = 44;
                this.actualHP = Math.floor(Math.random() * 5) + 40;
                this.currentHP = this.actualHP;
                this.bellowChance = 45;
                this.thrashChance = 30;
                this.chompChance = 25;
                this.bellowCount = 0;
                this.thrashCount = 0;
                this.chompCount = 0;
                this.strength = 3;
                this.block = 0;
            }

            bellow() {
                this.intent = 'Buff'
                this.strength += 3;
                this.block += 6;
            }

            thrash() {
                this.intent = 'Attack'
                this.damage = 7;
                this.block += 5;
            }

            chomp() {
                this.intent = 'Attack';
                this.damage = 11;
            }

            AI() {
                let roll = Math.floor(Math.random() * 100) + 1;
        
                if (roll <= this.bellowChance && this.bellowCounter < 1) {
                    this.bellow();
                    this.showIntent();
                } else if (roll > this.bellowChance && roll <= (this.bellowChance + this.thrashChance) && this.thrashCounter < 2) {
                    this.thrash();
                    this.showIntent();
                } else if (roll > (this.bellowChance + this.thrashChance) && this.chompCounter < 1) {
                    this.chomp();
                    this.showIntent();
                } else {
                    this.AI();
                }
            }
        
            showIntent() {
                let string = `${this.name} plans to ${this.intent}`;
                if (this.intent === 'Attack' || this.intent === 'Attack/Debuff') {
                    string += ` for ${this.damage} damage.`
                }
        
                console.log(string);
            }
        }
    ]

}