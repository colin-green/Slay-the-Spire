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

            play(target) {
                if (character.weak > 0 && character.vulnerable > 0) {
                    target.currentHP -= Math.floor(this.damage * 1.125);
                } else if (character.vulnerable > 0) {
                    target.currentHP -= Math.floor(this.damage * 1.5);
                } else if (character.weak > 0) {
                    target.currentHP -= Math.floor(this.damage * 0.75);
                } else {
                    target.currentHP -= this.damage;
                }
                target.vulnerable += this.vulnerable;
            }
        },
        class Anger {
            constructor() {
                this.name = 'Anger';
                this.type = 'Attack';
                this.rarity = 'Common';
                this.cost = 0;
                this.damage = 6;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.damage = 8;
            }
        },
        class Armaments {
            constructor() {
                this.name = 'Armaments';
                this.type = 'Skill';
                this.rarity = 'Common';
                this.cost = 1;
                this.block = 5;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
            }
        },
        class BodySlam {
            constructor() {
                this.name = 'Body Slam';
                this.type = 'Attack';
                this.rarity = 'Common';
                this.cost = 1;
                this.damage = character.block;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.cost = 0;
            }
        },
        class Clash {
            constructor() {
                this.name = 'Clash';
                this.type = 'Attack';
                this.rarity = 'Common';
                this.cost = 0;
                this.damage = 14;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.damage = 18;
            }
        },
        class Cleave {
            constructor() {
                this.name = 'Cleave';
                this.type = 'Attack';
                this.rarity = 'Common';
                this.cost = 1;
                this.damage = 8;
                this.aoe = true;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.damage = 11;
            }
        },
        class Clothesline {
            constructor() {
                this.name = 'Clothesline';
                this.type = 'Attack';
                this.rarity = 'Common';
                this.cost = 2;
                this.damage = 12;
                this.weak = 2;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.damage = 14;
                this.weak = 3;
            }
        },
        class Flex {
            constructor() {
                this.name = 'Flex';
                this.type = 'Skill';
                this.rarity = 'Common';
                this.cost = 0;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
            }
        },
        class Havoc {
            constructor() {
                this.name = 'Havoc';
                this.type = 'Skill';
                this.rarity = 'Common';
                this.cost = 1;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.cost = 0;
            }
        },
        class Headbutt {
            constructor() {
                this.name = 'Headbutt';
                this.type = 'Attack';
                this.rarity = 'Common';
                this.cost = 1;
                this.damage = 9;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.damage = 12;
            }
        }, 
        class HeavyBlade {
            constructor() {
                this.name = 'Heavy Blade';
                this.type = 'Attack';
                this.rarity = 'Common';
                this.cost = 2;
                this.damage = 14;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
            }
        },
        class IronWave {
            constructor() {
                this.name = 'Iron Wave';
                this.type = 'Attack';
                this.rarity = 'Common';
                this.cost = 1;
                this.block = 5;
                this.damage = 5;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.block = 7;
                this.damage = 7;
            }
        },
        class PerfectedStrike {
            constructor() {
                this.name = 'Perfected Strike';
                this.type = 'Attack';
                this.rarity = 'Common';
                this.cost = 2;
                this.damage = 6;
                this.extraDamage = 2;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.extraDamage = 3;
            }
        },
        class PommelStrike {
            constructor() {
                this.name = 'Pommel Strike';
                this.type = 'Attack';
                this.rarity = 'Common';
                this.cost = 1;
                this.damage = 9;
                this.draw = 1;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.damage = 10;
                this.draw = 2;
            }
        },
        class ShrugItOff {
            constructor() {
                this.name = 'Shrug It Off';
                this.type = 'Skill';
                this.rarity = 'Common';
                this.cost = 1;
                this.block = 8;
                this.draw = 1;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.block = 11;
            }
        },
        class SwordBoomerang {
            constructor() {
                this.name = 'Sword Boomerang';
                this.type = 'Attack';
                this.rarity = 'Common';
                this.cost = 1;
                this.damage = 3;
                this.damageTimes = 3;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.damageTimes = 4;
            }
        },
        class Thunderclap {
            constructor() {
                this.name = 'Thunderclap';
                this.type = 'Attack';
                this.rarity = 'Common';
                this.cost = 1;
                this.damage = 4;
                this.vulnerable = 1;
                this.aoe = true;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.damage = 7;
            } 
        },
        class TrueGrit {
            constructor() {
                this.name = 'True Grit';
                this.type = 'Skill';
                this.rarity = 'Common';
                this.cost = 1;
                this.block = 7;
                this.random = true;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.block = 9;
                this.random = false;
            }
        },
        class TwinStrike {
            constructor() {
                this.name = 'Twin Strike';
                this.type = 'Attack';
                this.rarity = 'Common';
                this.cost = 1;
                this.damage = 5;
                this.damageTimes = 2;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.damage = 7;
            }
        },
        class Warcry {
            constructor() {
                this.name = 'Warcry';
                this.type = 'Skill';
                this.rarity = 'Common';
                this.cost = 0;
                this.draw = 1;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.draw = 2;
            }
        },
        class WildStrike {
            constructor() {
                this.name = 'Wild Strike';
                this.type = 'Attack';
                this.rarity = 'Common';
                this.cost = 1;
                this.damage = 12;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.damage = 17;
            }
        },
        class BattleTrance {
            constructor() {
                this.name = 'Battle Trance';
                this.type = 'Skill';
                this.rarity = 'Uncommon';
                this.cost = 0;
                this.draw = 3;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.draw = 4;
            }
        },
        class BloodForBlood {
            constructor() {
                this.name = 'Blood for Blood';
                this.type = 'Attack';
                this.rarity = 'Uncommon';
                this.cost = 4;
                this.damage = 18;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.cost = 3;
                this.damage = 22;
            }
        },
        class Bloodletting {
            constructor() {
                this.name = 'Bloodletting';
                this.type = 'Skill';
                this.rarity = 'Uncommon';
                this.cost = 0;
                this.energy = 1;
                this.HPLoss = 3;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.energy = 2;
            }
        },
        class BurningPact {
            constructor() {
                this.name = 'Burning Pact';
                this.type = 'Skill';
                this.rarity = 'Uncommon';
                this.cost = 1;
                this.draw = 2;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.draw = 3;
            }
        },
        class Carnage {
            constructor() {
                this.name = 'Carnage';
                this.type = 'Attack';
                this.rarity = 'Uncommon';
                this.cost = 2;
                this.damage = 20;
                this.ethereal = true;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.damage = 28;
            }
        },
        class Combust {
            constructor() {
                this.name = 'Combust';
                this.type = 'Power';
                this.rarity = 'Uncommon';
                this.cost = 1;
                this.damage = 5;
                this.aoe = true;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.damage = 7;
            }
        },
        class DarkEmbrace {
            constructor() {
                this.name = 'Dark Embrace';
                this.type = 'Power';
                this.rarity = 'Uncommon';
                this.cost = 2;
                this.draw = 1;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.cost = 1;
            }
        },
        class Disarm {
            constructor() {
                this.name = 'Disarm';
                this.type = 'Skill';
                this.rarity = 'Uncommon';
                this.cost = 1;
                this.strengthDown = 2;
                this.exhaust = true;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.strengthDown = 3;
            }
        },
        class Dropkick {
            constructor() {
                this.name = 'Dropkick';
                this.type = 'Attack';
                this.rarity = 'Uncommon';
                this.cost = 1;
                this.damage = 5;
                this.energy = 1;
                this.draw = 1;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.damage = 8;
            }
        },
        class DualWield {
            constructor() {
                this.name = 'Dual Wield';
                this.type = 'Skill';
                this.rarity = 'Uncommon';
                this.cost = 1;
                this.copies = 2;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.copies = 3;
            }
        },
        class Entrench {
            constructor() {
                this.name = 'Entrench';
                this.type = 'Skill';
                this.rarity = 'Uncommon';
                this.cost = 2;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.cost = 1;
            }
        },
        class Evolve {
            constructor() {
                this.name = 'Evolve';
                this.type = 'Power';
                this.rarity = 'Uncommon';
                this.cost = 1;
                this.draw = 1;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.draw = 2;
            }
        },
        class FeelNoPain {
            constructor() {
                this.name = 'Feel No Pain';
                this.type = 'Power';
                this.rarity = 'Uncommon';
                this.cost = 1;
                this.block = 3;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.block = 4;
            }
        },
        class FireBreathing {
            constructor() {
                this.name = 'Fire Breathing';
                this.type = 'Power';
                this.rarity = 'Uncommon';
                this.cost = 1;
                this.damage = 6;
                this.aoe = true;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.damage = 10;
            }
        },
        class FlameBarrier {
            constructor() {
                this.name = 'Flame Barrier';
                this.type = 'Skill';
                this.rarity = 'Uncommon';
                this.cost = 2;
                this.block = 12;
                this.thorns = 4;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.block = 16;
                this.thorns = 6;
            }
        },
        class GhostlyArmor {
            constructor() {
                this.name = 'Ghostly Armor';
                this.type = 'Skill';
                this.rarity = 'Uncommon';
                this.cost = 1;
                this.block = 10;
                this.ethereal = true;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.block = 13;
            }
        },
        class Hemokinesis {
            constructor() {
                this.name = 'Hemokinesis';
                this.type = 'Attack';
                this.rarity = 'Uncommon';
                this.cost = 1;
                this.damage = 14;
                this.HPLoss = 3;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.damage = 18;
                this.HPLoss = 2;
            }
        },
        class InfernalBlade {
            constructor() {
                this.name = 'Infernal Blade';
                this.type = 'Skill';
                this.rarity = 'Uncommon';
                this.cost = 1;
                this.exhaust = true;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.cost = 0;
            }
        },
        class Inflame {
            constructor() {
                this.name = 'Inflame';
                this.type = 'Power';
                this.rarity = 'Uncommon';
                this.cost = 1;
                this.strength = 2;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.strength = 3;
            }
        },
        class Intimidate {
            constructor() {
                this.name = 'Intimidate';
                this.type = 'Skill';
                this.rarity = 'Uncommon';
                this.cost = 0;
                this.weak = 1;
                this.exhaust = true;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.weak = 2;
            }
        },
        class Metallicize {
            constructor() {
                this.name = 'Metallicize';
                this.type = 'Power';
                this.rarity = 'Uncommon';
                this.cost = 1;
                this.block = 3;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.block = 4;
            }
        },
        class PowerThrough {
            constructor() {
                this.name = 'Power Through';
                this.type = 'Skill';
                this.rarity = 'Uncommon';
                this.cost = 1;
                this.block = 15;
                this.wounds = 2;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.block = 20;
            }
        },
        class Pummel {
            constructor() {
                this.name = 'Pummel';
                this.type = 'Attack';
                this.rarity = 'Uncommon';
                this.cost = 1;
                this.damage = 2;
                this.damageTimes = 4;
                this.exhaust = true;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.damageTimes = 5;
            }
        },
        class Rage {
            constructor() {
                this.name = 'Rage';
                this.type = 'Skill';
                this.rarity = 'Uncommon';
                this.cost = 0;
                this.block = 3;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.block = 5;
            }
        },
        class Rampage {
            constructor() {
                this.name = 'Rampage';
                this.type = 'Attack';
                this.rarity = 'Uncommon';
                this.cost = 1;
                this.damage = 8;
                this.scaling = 5;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.scaling = 8;
            }
        },
        class RecklessCharge {
            constructor() {
                this.name = 'Reckless Charge';
                this.type = 'Attack';
                this.rarity = 'Uncommon';
                this.cost = 0;
                this.damage = 7;
                this.dazed = 1;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.damage = 10;
            }
        },
        class Rupture {
            constructor() {
                this.name = 'Rupture';
                this.type = 'Power';
                this.rarity = 'Uncommon';
                this.cost = 1;
                this.strength = 1;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.cost = 0;
            }
        },
        class SearingBlow {
            constructor() {
                this.name = 'Searing Blow';
                this.type = 'Attack';
                this.rarity = 'Uncommon';
                this.cost = 2;
                this.damage = 12;
                this.scaling = 4;
                this.upgraded = 0;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.upgraded++;
                this.name = `Searing Blow+${this.upgraded}`;
                this.damage += this.scaling;
                this.scaling++;
            }
        },
        class SecondWind {
            constructor() {
                this.name = 'Second Wind';
                this.type = 'Skill';
                this.rarity = 'Uncommon';
                this.cost = 1;
                this.block = 5;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.block = 7;
            }
        },
        class SeeingRed {
            constructor() {
                this.name = 'Seeing Red';
                this.type = 'Skill';
                this.rarity = 'Uncommon';
                this.cost = 1;
                this.energy = 2;
                this.exhaust = true;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.cost = 0;
            }
        },
        class Sentinel {
            constructor() {
                this.name = 'Sentinel';
                this.type = 'Skill';
                this.rarity = 'Uncommon';
                this.cost = 1;
                this.block = 5;
                this.energy = 2;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.block = 8;
                this.energy = 3;
            }
        },
        class SeverSoul {
            constructor() {
                this.name = 'Sever Soul';
                this.type = 'Attack';
                this.rarity = 'Uncommon';
                this.cost = 2;
                this.damage = 16;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.damage = 22;
            }
        },
        class Shockwave {
            constructor() {
                this.name = 'Shockwave';
                this.type = 'Skill';
                this.rarity = 'Uncommon';
                this.cost = 2;
                this.weak = 3;
                this.vulnerable = 3;
                this.exhaust = true;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.weak = 5;
                this.vulnerable = 5;
            }
        },
        class SpotWeakness {
            constructor() {
                this.name = 'Spot Weakness';
                this.type = 'Skill';
                this.rarity = 'Uncommon';
                this.cost = 1;
                this.strength = 3;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.strength = 4;
            }
        },
        class Uppercut {
            constructor() {
                this.name = 'Uppercut';
                this.type = 'Attack';
                this.rarity = 'Uncommon';
                this.cost = 2;
                this.damage = 13;
                this.weak = 1;
                this.vulnerable = 1;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.weak = 2;
                this.vulnerable = 2;
            }
        },
        class Whirlwind {
            constructor() {
                this.name = 'Whirlwind';
                this.type = 'Attack';
                this.rarity = 'Uncommon';
                this.cost = character.currentEnergy;
                this.damage = 5;
                this.damageTimes = this.cost;
                this.aoe = true;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.damage = 8;
            }
        },
        class Barricade {
            constructor() {
                this.name = 'Barricade';
                this.type = 'Power';
                this.rarity = 'Rare';
                this.cost = 3;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.cost = 2;
            }
        },
        class Berserk {
            constructor() {
                this.name = 'Berserk';
                this.type = 'Power';
                this.rarity = 'Rare';
                this.cost = 0;
                this.vulnerable = 2;
                this.energy = 1;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.vulnerable = 1;
            }
        },
        class Bludgeon {
            constructor() {
                this.name = 'Bludgeon';
                this.type = 'Attack';
                this.rarity = 'Rare';
                this.cost = 3;
                this.damage = 32;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.damage = 42;
            }
        },
        class Brutality {
            constructor() {
                this.name = 'Brutality';
                this.type = 'Power';
                this.rarity = 'Rare';
                this.cost = 0;
                this.HPLoss = 1;
                this.draw = 1;
                this.innate = false;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.innate = true;
            }
        },
        class Corruption {
            constructor() {
                this.name = 'Corruption';
                this.type = 'Power';
                this.rarity = 'Rare';
                this.cost = 3;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.cost = 2;
            }
        },
        class DemonForm {
            constructor() {
                this.name = 'Demon Form';
                this.type = 'Power';
                this.rarity = 'Rare';
                this.cost = 3;
                this.strength = 2;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.strength = 3;
            }
        },
        class DoubleTap {
            constructor() {
                this.name = 'Double Tap';
                this.type = 'Skill';
                this.rarity = 'Rare';
                this.cost = 1;
                this.twice = 1;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.twice = 2;
            }
        },
        class Exhume {
            constructor() {
                this.name = 'Exhume';
                this.type = 'Skill';
                this.rarity = 'Rare';
                this.cost = 1;
                this.exhaust = true;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.cost = 0;
            }
        },
        class Feed {
            constructor() {
                this.name = 'Feed';
                this.type = 'Attack';
                this.rarity = 'Rare';
                this.cost = 1;
                this.damage = 10;
                this.maxHP = 3;
                this.exhaust = true;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.damage = 12;
                this.maxHP = 4;
            }
        },
        class FiendFire {
            constructor() {
                this.name = 'Fiend Fire';
                this.type = 'Attack';
                this.rarity = 'Rare';
                this.cost = 2;
                this.damage = 7;
                this.exhaust = true;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.damage = 10;
            }
        },
        class Immolate {
            constructor() {
                this.name = 'Immolate';
                this.type = 'Attack';
                this.rarity = 'Rare';
                this.cost = 2;
                this.damage = 21;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.damage = 28;
            }
        },
        class Impervious {
            constructor() {
                this.name = 'Impervious';
                this.type = 'Skill';
                this.rarity = 'Rare';
                this.cost = 2;
                this.block = 30;
                this.exhaust = true;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.block = 40;
            }
        },
        class Juggernaut {
            constructor() {
                this.name = 'Juggernaut';
                this.type = 'Power';
                this.rarity = 'Rare';
                this.cost = 2;
                this.damage = 5;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.damage = 7;
            }
        },
        class LimitBreak {
            constructor() {
                this.name = 'Limit Break';
                this.type = 'Skill';
                this.rarity = 'Rare';
                this.cost = 1;
                this.exhaust = true;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.exhaust = false;
            }
        },
        class Offering {
            constructor() {
                this.name = 'Offering';
                this.type = 'Skill';
                this.rarity = 'Rare';
                this.cost = 0;
                this.HPLoss = 6;
                this.energy = 2;
                this.draw = 3;
                this.exhaust = true;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.draw = 5;
            }
        },
        class Reaper {
            constructor() {
                this.name = 'Reaper';
                this.type = 'Attack';
                this.rarity = 'Rare';
                this.cost = 2;
                this.damage = 4;
                this.aoe = true;
                this.upgraded = false;
            }
        
            upgrade() {
                console.log(`Upgrading ${this.name}.`);
                this.name += '+';
                this.upgraded = true;
                this.damage = 5;
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

            play(target) {
                let damageAmount;
                if (character.weak > 0 && target.vulnerable > 0) {
                    damageAmount = Math.floor((this.damage + character.strength) * 1.125);
                } else if (character.vulnerable > 0) {
                    damageAmount = Math.floor((this.damage + character.strength) * 1.5);
                } else if (character.weak > 0) {
                    damageAmount = Math.floor((this.damage + character.strength) * 0.75);
                } else {
                    damageAmount = this.damage + character.strength;
                }
                target.currentHP -= Math.floor(damageAmount);
                console.log(`Played ${this.name}, dealing ${damageAmount} damage to ${target}`);
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

            play() {
                let blockAmount;
                if (character.frail > 0) {
                    blockAmount = Math.floor((this.block + character.dexterity) * 0.75);
                } else {
                    blockAmount = this.block + character.dexterity;
                }
                character.block += blockAmount;
                console.log(`Played ${this.name} for ${blockAmount} block.`);
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