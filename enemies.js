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

                if (roll <= 30 && this.corrosiveSpitCounter < 2) {
                    this.corrosiveSpit();
                } else if (roll > 30 && roll <= 70 && this.tackleCounter < 1) {
                    this.tackle();
                } else if (roll > 70 && this.lickCounter < 2) {
                    this.lick();
                } else {
                    this.AI();
                }

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
        }

    ]

}

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
}

var x = new AcidSlimeL;
console.log('1)');
x.AI();
console.log('2)');
x.AI();
console.log('3)');
x.AI();
console.log('4)');
x.AI();
console.log('5)');
x.AI();
console.log('6)');
x.AI();
console.log('7)');
x.AI();
console.log('8)');
x.AI();
console.log('9)');
x.AI();
console.log('10)');
x.AI();