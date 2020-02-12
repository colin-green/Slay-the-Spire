module.exports = {
	act1Enemies: [
		class AcidSlimeL {
			constructor() {
				this.name = 'Acid Slime (L)';
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
				} else if (roll > 30 && roll <= 70 && this.tackleCounter < 1) {
					this.tackle();
				} else if (roll > 70 && this.lickCounter < 2) {
					this.lick();
				} else {
					this.AI();
				}
			}

			showIntent() {
				let string = `${this.name} plans to ${this.intent}`;
				if (this.intent === 'Attack' || this.intent === 'Attack/Debuff') {
					string += ` for ${this.damage} damage.`;
				}

				console.log(string);
			}

			corrosiveSpit() {
				this.intent = 'Attack/Debuff';
				this.damage = 11;
				this.slimes = 2;
				this.corrosiveSpitCounter++;
				this.lickCounter = 0;
				this.tackleCounter = 0;
			}

			split() {
				this.intent = '???';
				if (this.currentHP <= Math.floor(this.actualHP / 2)) {
					// Code here
				}
			}

			lick() {
				this.intent = 'Debuff';
				this.applyWeak = 2;
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

		class AcidSlimeM {
			constructor() {
				this.name = 'Acid Slime (M)';
				this.minHP = 28;
				this.maxHP = 32;
				this.actualHP = Math.floor(Math.random() * 5) + 28;
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
				} else if (roll > 30 && roll <= 70 && this.tackleCounter < 1) {
					this.tackle();
				} else if (roll > 70 && this.lickCounter < 2) {
					this.lick();
				} else {
					this.AI();
				}
			}

			showIntent() {
				let string = `${this.name} plans to ${this.intent}`;
				if (this.intent === 'Attack' || this.intent === 'Attack/Debuff') {
					string += ` for ${this.damage} damage.`;
				}

				console.log(string);
			}

			corrosiveSpit() {
				this.intent = 'Attack/Debuff';
				this.damage = 7;
				this.slimes = 1;
				this.corrosiveSpitCounter++;
				this.lickCounter = 0;
				this.tackleCounter = 0;
			}

			lick() {
				this.intent = 'Debuff';
				this.applyWeak = 1;
				this.lickCounter++;
				this.corrosiveSpitCounter = 0;
				this.tackleCounter = 0;
			}

			tackle() {
				this.intent = 'Attack';
				this.damage = 10;
				this.tackleCounter++;
				this.lickCounter = 0;
				this.corrosiveSpitCounter = 0;
			}
		},

		class AcidSlimeS {
			constructor() {
				this.name = 'Acid Slime (S)';
				this.minHP = 8;
				this.maxHP = 12;
				this.actualHP = Math.floor(Math.random() * 5) + 8;
				this.currentHP = this.actualHP;
				this.lastMove;
			}

			AI() {
				if (global.turn === 1) {
					let roll = Math.round(Math.random());
					if (roll === 0) {
						this.tackle();

						this.lastMove = 'Tackle';
					} else {
						this.lick();

						this.lastMove = 'Lick';
					}
				} else {
					if (this.lastMove === 'Tackle') {
						this.lick();

						this.lastMove = 'Lick';
					} else {
						this.tackle();

						this.lastMove = 'Tackle';
					}
				}
			}

			showIntent() {
				let string = `${this.name} plans to ${this.intent}`;
				if (this.intent === 'Attack' || this.intent === 'Attack/Debuff') {
					string += ` for ${this.damage} damage.`;
				}

				console.log(string);
			}

			lick() {
				this.intent = 'Debuff';
				this.applyWeak = 1;
			}

			tackle() {
				this.intent = 'Attack';
				this.damage = 3;
			}
		},

		class Cultist {
			constructor() {
				this.name = 'Cultist';
				this.minHP = 48;
				this.maxHP = 54;
				this.actualHP = Math.floor(Math.random() * 7) + 48;
				this.currentHP = this.actualHP;
				this.ritual = 0;
				this.strength = 0;
				this.damage = 6;
			}

			incantation() {
				this.intent = 'Buff';
				this.ritual = 3;
			}

			incantationGrowth() {
				this.strength += this.ritual;
			}

			darkStrike() {
				this.intent = 'Attack';
			}

			AI() {
				if (this.ritual === 0) {
					this.incantation();
				} else {
					this.darkStrike();
				}
			}

			showIntent() {
				let string = `${this.name} plans to ${this.intent}`;
				if (this.intent === 'Attack') {
					string += ` for ${this.damage} damage.`;
				} else string += '.';
				console.log(string);
			}
		},

		class JawWorm {
			constructor() {
				this.name = 'Jaw Worm';
				this.minHP = 40;
				this.maxHP = 44;
				this.actualHP = Math.floor(Math.random() * 5) + 40;
				this.currentHP = this.actualHP;
				this.bellowChance = 45;
				this.thrashChance = 30;
				this.chompChance = 25;
				this.bellowCounter = 0;
				this.thrashCounter = 0;
				this.chompCounter = 0;
				this.strength = 3;
				this.block = 0;
			}

			bellow() {
				this.intent = 'Buff';
				this.strength += 3;
				this.block += 6;
			}

			thrash() {
				this.intent = 'Attack';
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
				} else if (
					roll > this.bellowChance &&
					roll <= this.bellowChance + this.thrashChance &&
					this.thrashCounter < 2
				) {
					this.thrash();
				} else if (
					roll > this.bellowChance + this.thrashChance &&
					this.chompCounter < 1
				) {
					this.chomp();
				} else {
					this.AI();
				}
			}

			showIntent() {
				let string = `${this.name} plans to ${this.intent}`;
				if (this.intent === 'Attack' || this.intent === 'Attack/Debuff') {
					string += ` for ${this.damage} damage.`;
				}

				console.log(string);
			}
		},

		class LouseGreen {
			constructor() {
				this.name = 'Louse (Green)';
				this.minHP = 11;
				this.maxHP = 17;
				this.actualHP = Math.floor(Math.random() * 7) + 11;
				this.currentHP = this.actualHP;
				this.curlUpAmount = Math.floor(Math.random() * 5) + 3;
				this.damage = Math.floor(Math.random() * 3) + 5;
				this.applyWeak = 2;
				this.biteCounter = 0;
				this.spitWebCounter = 0;
				this.block = 0;
			}

			spitWeb() {
				this.intent = 'Debuff';
				this.spitWebCounter++;
				this.biteCounter = 0;
			}

			bite() {
				this.intent = 'Attack';
				this.biteCounter++;
				this.spitWebCounter = 0;
			}

			curlUp() {
				this.block += this.curlUpAmount;
			}

			AI() {
				let roll = Math.floor(Math.random() * 100) + 1;

				if (roll <= 75 && this.biteCounter < 2) {
					this.bite();
				} else if (roll > 75 && this.spitWebCounter < 2) {
					this.spitWeb();
				} else {
					this.AI();
				}
			}

			showIntent() {
				let string = `${this.name} plans to ${this.intent}`;
				if (this.intent === 'Attack' || this.intent === 'Attack/Debuff') {
					string += ` for ${this.damage} damage.`;
				} else string += '.';

				console.log(string);
			}
		},

		class LouseRed {
			constructor() {
				this.name = 'Louse (Red)';
				this.minHP = 11;
				this.maxHP = 17;
				this.actualHP = Math.floor(Math.random() * 6) + 10;
				this.currentHP = this.actualHP;
				this.curlUpAmount = Math.floor(Math.random() * 5) + 3;
				this.damage = Math.floor(Math.random() * 3) + 5;
				this.strength = 0;
				this.biteCounter = 0;
				this.growCounter = 0;
				this.block = 0;
			}

			grow() {
				this.intent = 'Buff';
				this.strength += 3;
				this.growCounter++;
				this.biteCounter = 0;
			}

			bite() {
				this.intent = 'Attack';
				this.biteCounter++;
				this.growCounter = 0;
			}

			curlUp() {
				this.block += this.curlUpAmount;
			}

			AI() {
				let roll = Math.floor(Math.random() * 100) + 1;

				if (roll <= 75 && this.biteCounter < 2) {
					this.bite();
				} else if (roll > 75 && this.growCounter < 2) {
					this.grow();
				} else {
					this.AI();
				}
			}

			showIntent() {
				let string = `${this.name} plans to ${this.intent}`;
				if (this.intent === 'Attack' || this.intent === 'Attack/Debuff') {
					string += ` for ${this.damage} damage.`;
				} else string += '.';

				console.log(string);
			}
		},

		class SpikeSlimeL {
			constructor() {
				this.name = 'Spike Slime (L)';
				this.minHP = 64;
				this.maxHP = 70;
				this.actualHP =
					Math.floor(Math.random() * (this.maxHP - this.minHP + 1)) +
					this.minHP;
				this.currentHP = this.actualHP;
				this.flameTackleCounter = 0;
				this.lickCounter = 0;
			}

			AI() {
				let roll = Math.floor(Math.random() * 100) + 1;
				console.log(`Roll: ${roll}`);

				if (roll <= 30 && this.flameTackleCounter < 2) {
					this.flameTackle();
				} else if (roll > 30 && this.lickCounter < 2) {
					this.lick();
				} else {
					this.AI();
				}
			}

			showIntent() {
				let string = `${this.name} plans to ${this.intent}`;
				if (this.intent === 'Attack' || this.intent === 'Attack/Debuff') {
					string += ` for ${this.damage} damage.`;
				} else string += '.';

				console.log(string);
			}

			split() {
				this.intent = '???';
				if (this.currentHP <= Math.floor(this.actualHP / 2)) {
					// Code here
				}
			}

			lick() {
				this.intent = 'Debuff';
				this.applyFrail = 2;
				this.lickCounter++;
				this.flameTackleCounter = 0;
			}

			flameTackle() {
				this.intent = 'Attack';
				this.damage = 16;
				this.slimes = 2;
				this.flameTackleCounter++;
				this.lickCounter = 0;
			}
		},

		class SpikeSlimeM {
			constructor() {
				this.name = 'Spike Slime (M)';
				this.minHP = 28;
				this.maxHP = 32;
				this.actualHP =
					Math.floor(Math.random() * (this.maxHP - this.minHP + 1)) +
					this.minHP;
				this.currentHP = this.actualHP;
				this.flameTackleCounter = 0;
				this.lickCounter = 0;
			}

			AI() {
				let roll = Math.floor(Math.random() * 100) + 1;
				console.log(`Roll: ${roll}`);

				if (roll <= 30 && this.flameTackleCounter < 2) {
					this.flameTackle();
				} else if (roll > 30 && this.lickCounter < 2) {
					this.lick();
				} else {
					this.AI();
				}
			}

			showIntent() {
				let string = `${this.name} plans to ${this.intent}`;
				if (this.intent === 'Attack' || this.intent === 'Attack/Debuff') {
					string += ` for ${this.damage} damage.`;
				} else string += '.';

				console.log(string);
			}

			lick() {
				this.intent = 'Debuff';
				this.applyFrail = 1;
				this.lickCounter++;
				this.flameTackleCounter = 0;
			}

			flameTackle() {
				this.intent = 'Attack';
				this.damage = 8;
				this.slimes = 1;
				this.flameTackleCounter++;
				this.lickCounter = 0;
			}
		},

		class SpikeSlimeS {
			constructor() {
				this.name = 'Spike Slime (S)';
				this.minHP = 10;
				this.maxHP = 14;
				this.actualHP =
					Math.floor(Math.random() * (this.maxHP - this.minHP + 1)) +
					this.minHP;
				this.currentHP = this.actualHP;
				this.damage = 5;
			}

			AI() {
				this.tackle();
			}

			showIntent() {
				let string = `${this.name} plans to ${this.intent}`;
				if (this.intent === 'Attack' || this.intent === 'Attack/Debuff') {
					string += ` for ${this.damage} damage.`;
				}

				console.log(string);
			}

			tackle() {
				this.intent = 'Attack';
			}
		}
	]
};
