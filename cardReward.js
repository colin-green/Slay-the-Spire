const inquirer = require("inquirer");

// var inquirer = require('inquirer');

var character;
var floor = 0;
var maxHP;
var currentHP;
var energy = 3;
var hallwayCounter = 0;
var prevEnemy;
var prevElite;
var prevEvent;
var deck = ['Strike', 'Strike', 'Strike', 'Strike', 'Defend', 'Defend', 'Defend', 'Defend', 'Ascender\'s Bane'];
var relics = [];
var potionBelt = [];
var potionBeltSize = 2;
var gold = 99;
var cardChoiceCount = 3;

var act1easy = ['Cultist', 'Jaw Worm', 'Louse x2', 'Small Slimes'];
var act1elites = ['Gremlin Nob', 'Lagavulin', 'Sentries'];
var act1bosses = ['Hexaghost', 'Slime Boss', 'The Guardian'];

var rareChance = -2;
var uncommonChance = 37;
var commonChance = 63;

var eliteRareChance = 5;
var eliteUncommonChance = 40;
var eliteCommonChance = 55;

var potionChance = 40;

var allCards = [];

var ironcladCommons = ['Anger', 'Armaments', 'Body Slam', 'Clash', 'Cleave', 'Clothesline', 'Flex', 'Havoc', 'Headbutt', 'Heavy Blade', 'Iron Wave', 'Perfected Strike', 'Pommel Strike', 'Shrug It Off', 'Sword Boomerang', 'Thunderclap', 'True Grit', 'Twin Strike', 'Warcry', 'Wild Strike'];
var ironcladUncommons = ['Battle Trance', 'Blood for Blood', 'Bloodletting', 'Burning Pact', 'Carnage', 'Combust', 'Dark Embrace', 'Disarm', 'Dropkick', 'Dual Wield', 'Entrench', 'Evolve', 'Feel No Pain', 'Fire Breathing', 'Flame Barrier', 'Ghostly Armor', 'Hemokenisis', 'Infernal Blade', 'Inflame', 'Intimidate', 'Metallicize', 'Power Through', 'Pummel', 'Rage', 'Rampage', 'Reckless Charge', 'Rupture', 'Searing Blow', 'Second Wind', 'Seeing Red', 'Sentinel', 'Sever Soul', 'Shockwave', 'Spot Weakness', 'Uppercut', 'Whirlwind'];
var ironcladRares = ['Barricade', 'Berserk', 'Bludgeon', 'Brutality', 'Corruption', 'Demon Form', 'Double Tap', 'Exhume', 'Feed', 'Fiend Fire', 'Immolate', 'Impervious', 'Juggernaut', 'Limit Break', 'Offering', 'Reaper'];

var silentCommons = ['Acrobatics', 'Backflip', 'Bane', 'Blade Dance', 'Cloak and Dagger', 'Dagger Spray', 'Dagger Throw', 'Deadly Poison', 'Deflect', 'Dodge and Roll', 'Flying Knee', 'Outmaneuver', 'Piercing Wail', 'Poisoned Stab', 'Prepared', 'Quick Slash', 'Slice', 'Sneaky Strike', 'Sucker Punch'];
var silentUncommons = ['Accuracy', 'All-Out Attack', 'Backstab', 'Blur', 'Bouncing Flask', 'Calculated Gamble', 'Caltrops', 'Catalyst', 'Choke', 'Concentrate', 'Crippling Cloud', 'Dash', 'Distraction', 'Endless Agony', 'Escape Plan', 'Eviscerate', 'Expertise', 'Finisher', 'Flechettes', 'Footwork', 'Heel Hook', 'Infinite Blades', 'Leg Sweep', 'Masterful Stab', 'Noxious Fumes', 'Predator', 'Reflex', 'Riddle with Holes', 'Setup', 'Skewer', 'Tactician', 'Terror', 'Well-Laid Plans'];
var silentRares = ['A Thousand Cuts', 'Adrenaline', 'After Image', 'Alchemize', 'Bullet Time', 'Burst', 'Corpse Explosion', 'Die Die Die', 'Doppelganger', 'Envenom', 'Glass Knife', 'Grand Finale', 'Malaise', 'Nightmare', 'Phantasmal Killer', 'Storm of Steel', 'Tools of the Trade', 'Unload', 'Wraith Form'];

var defectCommons = ['Ball Lightning', 'Barrage', 'Beam Cell', 'Charge Battery', 'Claw', 'Cold Snap', 'Compile Driver', 'Coolheaded', 'Go for the Eyes', 'Hologram', 'Leap', 'Rebound', 'Recursion', 'Stack', 'Steam Barrier', 'Streamline', 'Sweeping Beam', 'Turbo'];
var defectUncommons = ['Aggregate', 'Auto-Shields', 'Blizzard', 'Boot Sequence', 'Bullseye', 'Capacitor', 'Chaos', 'Chill', 'Consume', 'Darkness', 'Defragment', 'Doom and Gloom', 'Double Energy', 'Equilibrium', 'FTL', 'Force Field', 'Fusion', 'Genetic Algorithm', 'Glacier', 'Heatsinks', 'Hello World', 'Loop', 'Melter', 'Overclock', 'Recycle', 'Reinforced Body', 'Reprogram', 'Rip and Tear', 'Scrape', 'Self Repair', 'Skim', 'Static Discharge', 'Storm', 'Sunder', 'Tempest', 'White Noise'];
var defectRares = ['All for One', 'Amplify', 'Biased Cognition', 'Buffer', 'Core Surge', 'Creative AI', 'Echo Form', 'Electrodynamics', 'Fission', 'Hyperbeam', 'Machine Learning', 'Meteor Strike', 'Multi-Cast', 'Rainbow', 'Reboot', 'Seek', 'Thunder Strike'];

var watcherCommons = ['Bowling Bash', 'Consecrate', 'Crescendo', 'Crush Joints', 'Cut Through Fate', 'Empty Body', 'Empty Fist', 'Evaluate', 'Flurry of Blows', 'Flying Sleeves', 'Follow-Up', 'Halt', 'Just Lucky', 'Pressure Points', 'Prostrate', 'Protect', 'Sash Whip', 'Third Eye', 'Tranquility'];
var watcherUncommons = ['Battle Hymn', ' Carve Reality', 'Collect', 'Conclude', 'Deceive Reality', 'Empty Mind', 'Fasting', 'Fear No Evil', 'Foreign Influence', 'Foresight', 'Indignation', 'Inner Peace', 'Like Water', 'Meditate', 'Mental Fortress', 'Nirvana', 'Perserverence', 'Pray', 'Reach Heaven', 'Rushdown', 'Sanctity', 'Sands of Time', 'Signature Move', 'Simmering Fury', 'Study', 'Swivel', 'Talk to the Hand', 'Tantrum', 'Wallop', 'Wave of the Hand', 'Weave', 'Wheel Kick', 'Windmill Strike', 'Worship', 'Wreath of Flame'];
var watcherRares = ['Alpha', 'Blasphemy', 'Brilliance', 'Conjure Blade', 'Deus Ex Machina', 'Deva Form', 'Devotion', 'Establishment', 'Judgement', 'Lesson Learned', 'Master Reality', 'Omniscience', 'Ragnarok', 'Scrawl', 'Spirit Shield', 'Vault', 'Wish'];

var commonPotions = ['Block Potion', 'Dexterity Potion', 'Energy Potion', 'Explosive Potion', 'Fire Potion', 'Strength Potion', 'Swift Potion', 'Weak Potion', 'Fear Potion', 'Attack Potion', 'Skill Potion', 'Power Potion', 'Colorless Potion', 'Flex Potion', 'Speed Potion', 'Blessing of the Forge'];
var uncommonPotions = ['Regen Potion', 'Artifact Potion', 'Liquid Bronze', 'Gambler\'s Brew', 'Essence of Steel', 'Duplication Potion', 'Distilled Chaos', 'Liquid Memories'];
var rarePotions = ['Cultist Potion', 'Fruit Juice', 'Snecko Oil', 'Fairy in a Bottle', 'Smoke Bomb', 'Entropic Brew'];

var ironcladCommonPotion = 'Blood Potion';
var ironcladUncommonPotion = 'Elixir';
var ironcladRarePotion = 'Heart of Iron';
var silentCommonPotion = 'Poison Potion';
var silentUncommonPotion = 'Cunning Potion';
var silentRarePotion = 'Ghost in a Jar';
var defectCommonPotion = 'Focus Potion';
var defectUncommonPotion = 'Potion of Capacity';
var defectRarePotion = 'Essence of Darkness';
var watcherCommonPotion = 'Bottled Miracle';
var watcherUncommonPotion = 'Stance Potion';
var watcherRarePotion = 'Ambrosia';

var commonRelics = ['Akabeko', 'Anchor', 'Ancient Tea Set', 'Art of War', 'Bag of Marbles', 'Bag of Preparation', 'Blood Vial', 'Bronze Scales', 'Centenial Puzzle', 'Ceramic Fish', 'Dream Catcher', 'Happy Flower', 'Juzu Bracelet', 'Lantern', 'Maw Bank', 'Meal Ticket', 'Nunchaku', 'Oddly Smooth Stone', 'Omamori', 'Orichalcum', 'Pen Nib', 'Potion Belt', 'Preserved Insect', 'Regal Pillow', 'Smiling Mask', 'Strawberry', 'The Boot', 'Tiny Chest', 'Toy Ornithopter', 'Vajra', 'War Paint', 'Whetstone'];
var uncommonRelics = ['Blue Candle', 'Bottled Flame', 'Bottled Lightning', 'Bottled Tornado', 'Darkstone Periapt', 'Eternal Feather', 'Frozen Egg', 'Gremlin Horn', 'Horn Cleat', 'Ink Bottle', 'Kunai', 'Letter Opener', 'Matryoshka', 'Meat on the Bone', 'Mercury Hourglass', 'Molten Egg', 'Mummified Hand', 'Ornamental Fan', 'Pantograph', 'Pear', 'Question Card', 'Shuriken', 'Singing Bowl', 'Strike Dummy', 'Sundial', 'The Courier', 'Toxic Egg', 'White Beast Statue'];
var rareRelics = ['Bird-Faced Urn', 'Calipers', 'Captain\'s Wheel', 'Dead Branch', 'Du-Vu Doll', 'Fossilized Helix', 'Gambling Chip', 'Ginger', 'Girya', 'Ice Cream', 'Incense Burner', 'Lizard Tail', 'Mango', 'Gold Coin', 'Peace Pipe', 'Pocketwatch', 'Prayer Wheel', 'Shovel', 'Stone Calendar', 'Thread and Needle', 'Torii', 'Tungsten Rod', 'Turnip', 'Unceasing Top', 'Wing Boots'];
var bossRelics = ['Astrolabe', 'Black Star', 'Busted Crown', 'Calling Bell', 'Coffee Dripper', 'Cursed Key', 'Ectoplasm', 'Empty Cage', 'Fusion Hammer', 'Pandora\'s Box', 'Philosopher\'s Stone', 'Runic Dome', 'Runic Pyramid', 'Sacred Bark', 'Slaver\'s Collar', 'Snecko Eye', 'Sozu', 'Tiny House', 'Velvet Choker'];
var shopRelics = ['Cauldron', 'Chemical X', 'Clockwork Souvenir', 'Dolly\'s Mirror', 'Frozen Eye', 'Hand Drill', 'Lee\'s Waffle', 'Medical Kit', 'Membership Card', 'Orange Pellets', 'Orrey', 'Prismatic Shard', 'Sling of Courage', 'Strange Spoon', 'The Abacus', 'Toolbox'];

var ironcladCommonRelics = ['Red Skull'];
var ironcladUncommonRelics = ['Paper Phrog', 'Self-Forming Clay'];
var ironcladRareRelics = ['Champion Belt', 'Charon\'s Ashes', 'Magic Flower'];
var ironcladBossRelics = ['Burning Blood', 'Mark of Pain', 'Runic Cube'];
var ironcladShopRelics = ['Brimstone'];
var silentCommonRelics = ['Snecko Skull'];
var silentUncommonRelics = ['Ninja Scroll', 'Paper Krane'];
var silentRareRelics = ['The Specimen', 'Tingsha', 'Tough Bandages'];
var silentBossRelics = ['Hovering Kite', 'Ring of the Serpent', 'Wrist Blade'];
var silentShopRelics = ['Twisted Funnel'];
var defectCommonRelics = ['Data Disk'];
var defectUncommonRelics = ['Gold-Plated Cables', 'Symbiotic Virus'];
var defectRareRelics = ['Emotion Chip'];
var defectBossRelics = ['Frozen Core', 'Inserter', 'Nuclear Battery'];
var defectShopRelics = ['Runic Capacitor'];
var watcherCommonRelics = ['Damaru'];
var watcherUncommonRelics = ['Duality', 'Teardrop Locket'];
var watcherRareRelics = ['Cloak Clasp', 'Golden Eye'];
var watcherBossRelics = ['Holy Water', 'Violet Lotus'];
var watcherShopRelics = ['Melange'];

var act1Events = ['Big Fish', 'Golden Idol', 'Living Wall', 'Scrap Ooze', 'Shining Light', 'The Ssssserpent', 'Wing Statue', 'World of Goop'];
var act1Shrines = ['Bonfire Spirits', 'Face Trader', 'Golden Shrine', 'Lab', 'Match and Keep', 'Ominous Forge', 'Purifier', 'Transmogrifier', 'Upgrade Shrine', 'We Meet Again', 'Wheel of Change'];
var seenEvents = [];
var QMevent = 85;
var QMhallway = 10;
var QMshop = 3;
var QMtreasure = 2;

function hallwayReward() {

    floor++;

    if (hallwayCounter < 3) {
        var newEnemy = act1easy[Math.floor(Math.random() * act1easy.length)];
        while (newEnemy == prevEnemy) {
            newEnemy = act1easy[Math.floor(Math.random() * act1easy.length)];
        }
        console.log(`Fighting ${newEnemy}.`);
    } else {
        var act1hardRoll = Math.floor(Math.random() * 32) + 1;
        if (act1hardRoll <= 4) {
            var newEnemy = 'Large Slime';
        } else if (act1hardRoll <= 8) {
            var newEnemy = 'Blue Slaver';
        } else if (act1hardRoll <= 12) {
            var newEnemy = 'Louse x3';
        } else if (act1hardRoll <= 16) {
            var newEnemy = 'Fungi Beast x2';
        } else if (act1hardRoll <= 20) {
            var newEnemy = 'Looter';
        } else if (act1hardRoll <= 23) {
            var newEnemy = 'Exordium Thugs';
        } else if (act1hardRoll <= 26) {
            var newEnemy = 'Exordium Wildlife';
        } else if (act1hardRoll <= 28) {
            var newEnemy = 'Gremlin Gang';
        } else if (act1hardRoll <= 30) {
            var newEnemy = 'Lots of Slimes';
        } else if (act1hardRoll <= 32) {
            var newEnemy = 'Red Slaver';
        }
        while (newEnemy == prevEnemy) {
            var act1hardRoll = Math.floor(Math.random() * 32) + 1;
        if (act1hardRoll <= 4) {
            var newEnemy = 'Large Slime';
        } else if (act1hardRoll <= 8) {
            var newEnemy = 'Blue Slaver';
        } else if (act1hardRoll <= 12) {
            var newEnemy = 'Louse x3';
        } else if (act1hardRoll <= 16) {
            var newEnemy = 'Fungi Beast x2';
        } else if (act1hardRoll <= 20) {
            var newEnemy = 'Looter';
        } else if (act1hardRoll <= 23) {
            var newEnemy = 'Exordium Thugs';
        } else if (act1hardRoll <= 26) {
            var newEnemy = 'Exordium Wildlife';
        } else if (act1hardRoll <= 28) {
            var newEnemy = 'Gremlin Gang';
        } else if (act1hardRoll <= 30) {
            var newEnemy = 'Lots of Slimes';
        } else if (act1hardRoll <= 32) {
            var newEnemy = 'Red Slaver';
        }
        }
        console.log(`Fighting ${newEnemy}.`);
    }
    prevEnemy = newEnemy;
    hallwayCounter++;

    switch (character) {
        case 'Ironclad':
            var commons = ironcladCommons.map(x => x);
            var uncommons = ironcladUncommons.map(x => x);
            var rares = ironcladRares.map(x => x);
            break;    
        case 'Silent':
            var commons = silentCommons.map(x => x);
            var uncommons = silentUncommons.map(x => x);
            var rares = silentRares.map(x => x);
            break;    
        case 'Defect':
            var commons = defectCommons.map(x => x);
            var uncommons = defectUncommons.map(x => x);
            var rares = defectRares.map(x => x);
            break;    
        case 'Watcher':
            var commons = watcherCommons.map(x => x);
            var uncommons = watcherUncommons.map(x => x);
            var rares = watcherRares.map(x => x);
            break;    
        default:
            break;
    }

    var choices = [];
    var gold = Math.floor(Math.random() * 11) + 10;
    
    for (let i = 0; i < cardChoiceCount; i++) {
        
        var rarityRoll = Math.floor(Math.random() * 100) + 1;
        var card;
        if (rarityRoll <= commonChance) {
            card = commons[Math.floor(Math.random() * commons.length)];
            while (choices.includes(card)) {
                card = commons[Math.floor(Math.random() * commons.length)];
            }
            choices.push(card);
            rareChance++;
            eliteRareChance++;
            if (rareChance > 0) {
                commonChance -= 1;
            }
            eliteCommonChance -= 1;
        } else if (rarityRoll > commonChance && rarityRoll < (101 - rareChance)) {
            card = uncommons[Math.floor(Math.random() * uncommons.length)];
            while (choices.includes(card)) {
                card = uncommons[Math.floor(Math.random() * uncommons.length)];
            }
            choices.push(card);
        } else if (rarityRoll >= (101 - rareChance) && rareChance > 0) {
            card = rares[Math.floor(Math.random() * rares.length)];
            while (choices.includes(card)) {
                card = rares[Math.floor(Math.random() * rares.length)];
            }
            choices.push(card);
            rareChance = -2;
            uncommonChance = 37;
            commonChance = 63;
            eliteRareChance = 5;
            eliteUncommonChance = 40;
            eliteCommonChance = 55;
        }
        
    }

    choices.push('Skip');
    if (relics.includes('Singing Bowl')) {
        choices.push('+2 Max HP');
    }

    console.log(`You got ${gold} gold.`);
    potionDrop(choices);

}

function eliteReward() {

    floor++;

    switch (character) {
        case 'Ironclad':
            var commons = ironcladCommons.map(x => x);
            var uncommons = ironcladUncommons.map(x => x);
            var rares = ironcladRares.map(x => x);
            break;    
        case 'Silent':
            var commons = silentCommons.map(x => x);
            var uncommons = silentUncommons.map(x => x);
            var rares = silentRares.map(x => x);
            break;    
        case 'Defect':
            var commons = defectCommons.map(x => x);
            var uncommons = defectUncommons.map(x => x);
            var rares = defectRares.map(x => x);
            break;    
        case 'Watcher':
            var commons = watcherCommons.map(x => x);
            var uncommons = watcherUncommons.map(x => x);
            var rares = watcherRares.map(x => x);
            break;    
        default:
            break;
    }

    var choices = [];
    var gold = Math.floor(Math.random() * 11) + 25;
    var newElite = act1elites[Math.floor(Math.random() * act1elites.length)];
    while (newElite == prevElite) {
        newElite = act1elites[Math.floor(Math.random() * act1elites.length)];
    }
    console.log(`Fighting ${newElite}.`);
    prevElite = newElite;
    
    for (let i = 0; i < cardChoiceCount; i++) {
        
        var rarityRoll = Math.floor(Math.random() * 100) + 1;
        var card;
        if (rarityRoll <= eliteCommonChance) {
            card = commons[Math.floor(Math.random() * commons.length)];
            while (choices.includes(card)) {
                card = commons[Math.floor(Math.random() * commons.length)];
            }
            choices.push(card);
            rareChance++;
            eliteRareChance++;
            if (rareChance > 0) {
                commonChance -= 1;
            }
            eliteCommonChance -= 1;
        } else if (rarityRoll > eliteCommonChance && rarityRoll < (101 - eliteRareChance)) {
            card = uncommons[Math.floor(Math.random() * uncommons.length)];
            while (choices.includes(card)) {
                card = uncommons[Math.floor(Math.random() * uncommons.length)];
            }
            choices.push(card);
        } else if (rarityRoll >= (101 - eliteRareChance)) {
            card = rares[Math.floor(Math.random() * rares.length)];
            while (choices.includes(card)) {
                card = rares[Math.floor(Math.random() * rares.length)];
            }
            choices.push(card);
            rareChance = -2;
            uncommonChance = 37;
            commonChance = 63;
            eliteRareChance = 5;
            eliteUncommonChance = 40;
            eliteCommonChance = 55;
        }
        
    }

    choices.push('Skip');
    if (relics.includes('Singing Bowl')) {
        choices.push('+2 Max HP');
    }
    
    myGold += gold;
    console.log(`You got ${gold} gold.`);
    potionDrop(choices);

}

function bossReward() {

    console.log(`Fighting ${act1bosses[Math.floor(Math.random() * act1bosses.length)]}`);

    switch (character) {
        case 'Ironclad':
            var rares = ironcladRares.map(x => x);
            break;    
        case 'Silent':
            var rares = silentRares.map(x => x);
            break;    
        case 'Defect':
            var rares = defectRares.map(x => x);
            break;    
        case 'Watcher':
            var rares = watcherRares.map(x => x);
            break;    
        default:
            break;
    }

    var cardChoices = [];
    var relicChoices = [];
    var gold = Math.floor(Math.random() * 9) + 71;
    
    for (let i = 0; i < cardChoiceCount; i++) {
        var card;
        card = rares[Math.floor(Math.random() * rares.length)];
        while (cardChoices.includes(card)) {
            card = rares[Math.floor(Math.random() * rares.length)];
        }
        cardChoices.push(card);
    }

    for (let i = 0; i < 3; i++) {
        var relic;
        relic = bossRelics[Math.floor(Math.random() * bossRelics.length)];
        while (relicChoices.includes(relic)) {
            relic = bossRelics[Math.floor(Math.random() * bossRelics.length)];
        }
        relicChoices.push(relic);
    }

    cardChoices.push('Skip');
    relicChoices.push('Skip');

    console.log(`You got ${gold} gold.`);
    potionDrop();
    addCardBoss(cardChoices, relicChoices);
}

function potionDrop(cardChoices) {

    var beltFull = potionBelt.length >= potionBeltSize;
    var potionRoll = Math.floor(Math.random() * 100) + 1;

    // If a potion drops...
    if (potionRoll <= potionChance) {
        var potionRarity = Math.floor(Math.random() * 100) + 1;
        // 70% chance for common
        if (potionRarity <= 70) {
            var potion = commonPotions[Math.floor(Math.random() * commonPotions.length)];
            // 25% chance for uncommon
        } else if (potionRarity > 70 && potionRarity <= 95) {
            var potion = uncommonPotions[Math.floor(Math.random() * uncommonPotions.length)];
            // 5% chance for rare
        } else if (potionRarity > 95) {
            var potion = rarePotions[Math.floor(Math.random() * rarePotions.length)];
        }

        // If you have room for another potion...
        if (!beltFull) {
            // Push it to the potion belt array
            potionBelt.push(potion);
            // Log the new potion and the potion belt array
            console.log(`You got a(n) ${potion}.`);
            console.log(potionBelt);
            // Lower potion drop chance
            potionChance -= 10;
            console.log(`Potion drop chance: ${potionChance}%`);
            if (potionDrop.caller == hallwayReward) {
                addCard(cardChoices);
            } else if (potionDrop.caller == eliteReward) {
                relicDrop();
                addCard(cardChoices);
            } else if (potionDrop.caller == bossReward) {
                addCardBoss(cardChoices, relicChoices);
            }
            // If belt is full...
        } else {
            console.log(`A(n) ${potion} has dropped.`);
            potionChance -= 10;
            console.log(`Potion drop chance: ${potionChance}%`);
            swapPotions(potion, cardChoices);
        }
        // If no potion drops...
    } else {
        // Increase the potion drop chance
        potionChance += 10;
        console.log(`Potion drop chance: ${potionChance}%`);
        if (potionDrop.caller == hallwayReward) {
            addCard(cardChoices);
        } else if (potionDrop.caller == eliteReward) {
            relicDrop();
            addCard(cardChoices);
        }
    }
}

function swapPotions(potion, cardChoices) {

    var myPotions = potionBelt.map(x => x);
    myPotions.push('No, keep my current potions.');

    inquirer.prompt({
        type: 'list',
        name: 'choice',
        message: `Would you like to discard one of your potions for ${potion}?`,
        choices: myPotions
    }).then(answers => {
        for (let i = 0; i < myPotions.length; i++) {
            if (answers.choice == myPotions[i]) {
                potionBelt.splice(i, 1, potion);
                console.log(potionBelt);
                break;
            }         
        }
        addCard(cardChoices);
    })
}

function relicDrop() {

    var rarityRoll = Math.floor(Math.random() * 100) + 1;
    if (rarityRoll <= 50) {
        var relicRoll = Math.floor(Math.random() * commonRelics.length);
        var relic = commonRelics[relicRoll];
        relics.push(relic);
        commonRelics.splice(relicRoll, 1);
    } else if (rarityRoll > 50 && rarityRoll <= 83) {
        var relicRoll = Math.floor(Math.random() * uncommonRelics.length);
        var relic = uncommonRelics[relicRoll];
        relics.push(relic);
        uncommonRelics.splice(relicRoll, 1);
    } else if (rarityRoll > 83) {
        var relicRoll = Math.floor(Math.random() * rareRelics.length);
        var relic = rareRelics[relicRoll];
        relics.push(relic);
        rareRelics.splice(relicRoll, 1);
    }

    if (relic == 'Question Card') {
        cardChoiceCount = 4;
    }

    if (relic == 'Potion Belt') {
        potionBeltSize = 4;
    }

    console.log(`You got ${relic}.`);
    console.log('Your current relics:');
    console.log(relics);
}

function chooseCharacter() {
    inquirer.prompt({
        type: 'list',
        name: 'character',
        message: 'Choose your character.',
        choices: ['Ironclad', 'Silent', 'Defect', 'Watcher']
    }).then(answers => {
        character = answers.character;
        switch (answers.character) {
            case 'Ironclad':
                relics.push('Burning Blood');
                deck.push('Strike');
                deck.push('Bash');
                for (let i = 0; i < ironcladCommonRelics.length; i++) {
                    commonRelics.push(ironcladCommonRelics[i]);
                }
                for (let i = 0; i < ironcladUncommonRelics.length; i++) {
                    uncommonRelics.push(ironcladUncommonRelics[i]);
                }
                for (let i = 0; i < ironcladRareRelics.length; i++) {
                    rareRelics.push(ironcladRareRelics[i]);
                }
                for (let i = 0; i < ironcladBossRelics.length; i++) {
                    bossRelics.push(ironcladBossRelics[i]);
                }
                for (let i = 0; i < ironcladShopRelics.length; i++) {
                    shopRelics.push(ironcladShopRelics[i]);
                }
                commonPotions.push(ironcladCommonPotion);
                uncommonPotions.push(ironcladUncommonPotion);
                rarePotions.push(ironcladRarePotion);
                break;        
            case 'Silent':
                relics.push('Ring of the Snake');
                deck.push('Strike');
                deck.push('Defend');
                deck.push('Neutralize');
                deck.push('Survivor');
                for (let i = 0; i < silentCommonRelics.length; i++) {
                    commonRelics.push(silentCommonRelics[i]);
                }
                for (let i = 0; i < silentUncommonRelics.length; i++) {
                    uncommonRelics.push(silentUncommonRelics[i]);
                }
                for (let i = 0; i < silentRareRelics.length; i++) {
                    rareRelics.push(silentRareRelics[i]);
                }
                for (let i = 0; i < silentBossRelics.length; i++) {
                    bossRelics.push(silentBossRelics[i]);
                }
                for (let i = 0; i < silentShopRelics.length; i++) {
                    shopRelics.push(silentShopRelics[i]);
                }
                commonPotions.push(silentCommonPotion);
                uncommonPotions.push(silentUncommonPotion);
                rarePotions.push(silentRarePotion);
                break;        
            case 'Defect':
                relics.push('Cracked Core');
                deck.push('Zap');
                deck.push('Dualcast');
                for (let i = 0; i < defectCommonRelics.length; i++) {
                    commonRelics.push(defectCommonRelics[i]);
                }
                for (let i = 0; i < defectUncommonRelics.length; i++) {
                    uncommonRelics.push(defectUncommonRelics[i]);
                }
                for (let i = 0; i < defectRareRelics.length; i++) {
                    rareRelics.push(defectRareRelics[i]);
                }
                for (let i = 0; i < defectBossRelics.length; i++) {
                    bossRelics.push(defectBossRelics[i]);
                }
                for (let i = 0; i < defectShopRelics.length; i++) {
                    shopRelics.push(defectShopRelics[i]);
                }
                commonPotions.push(defectCommonPotion);
                uncommonPotions.push(defectUncommonPotion);
                rarePotions.push(defectRarePotion);
                break;        
            case 'Watcher':
                relics.push('Pure Water');
                deck.push('Eruption');
                deck.push('Vigilance');
                for (let i = 0; i < watcherCommonRelics.length; i++) {
                    commonRelics.push(watcherCommonRelics[i]);
                }
                for (let i = 0; i < watcherUncommonRelics.length; i++) {
                    uncommonRelics.push(watcherUncommonRelics[i]);
                }
                for (let i = 0; i < watcherRareRelics.length; i++) {
                    rareRelics.push(watcherRareRelics[i]);
                }
                for (let i = 0; i < watcherBossRelics.length; i++) {
                    bossRelics.push(watcherBossRelics[i]);
                }
                for (let i = 0; i < watcherShopRelics.length; i++) {
                    shopRelics.push(watcherShopRelics[i]);
                }
                commonPotions.push(watcherCommonPotion);
                uncommonPotions.push(watcherUncommonPotion);
                rarePotions.push(watcherRarePotion);
                break;        
            default:
                break;
        }
        chooseRoom();
    })
}

function chooseRoom() {
    inquirer.prompt({
        type: 'list',
        name: 'room',
        message: 'What would you like to do?',
        choices: ['Hallway Fight', '?', 'Elite Fight', 'Boss Fight', 'Quit']
    }).then(answers => {
        switch (answers.room) {
            case 'Hallway Fight':
                hallwayReward();
                break;
            case '?':
                act1QuestionMark();
                break;
            case 'Elite Fight':
                eliteReward();
                break;
            case 'Boss Fight':
                bossReward();
                break;
            case 'Quit':
                console.log('Thanks for playing!');
                break;
            default:
                break;
        }
    })
}

function addCard(choices) {
    inquirer.prompt({
        type: 'list',
        name: 'cardChoice',
        message: 'Would you like to add a card to your deck?',
        choices: choices
    }).then(answers => {
        if (answers.cardChoice != 'Skip') {
            deck.push(answers.cardChoice);
        }
        console.log('Your current deck:');
        console.log(deck);
        chooseRoom();
    })
}

function addCardBoss(cards, relics) {
    inquirer.prompt({
        type: 'list',
        name: 'cardChoice',
        message: 'Would you like to add a card to your deck?',
        choices: cards
    }).then(answers => {
        if (answers.cardChoice != 'Skip') {
            deck.push(answers.cardChoice);
        }
        console.log('Your current deck:');
        console.log(deck);
        addRelic(relics);
    })
}

function addRelic(choices) {
    inquirer.prompt({
        type: 'list',
        name: 'relicChoice',
        message: 'Would you like to add a relic to your deck?',
        choices: choices
    }).then(answers => {
        if (answers.relicChoice != 'Skip') {
            relics.push(answers.relicChoice);
        }

        if (answers.relicChoice == 'Pandora\'s Box') {
            deck = pandorasBox();
            console.log('Your current deck:');
            console.log(deck);
        }

        console.log('Your current relics:');
        console.log(relics);
        console.log('You beat the act!');
    })
}

function pandorasBox() {

    let allCards = [];

    switch (character) {
        case 'Ironclad':
            ironcladCommons.forEach(card => allCards.push(card));
            ironcladUncommons.forEach(card => allCards.push(card));
            ironcladRares.forEach(card => allCards.push(card));
            break;    
        case 'Silent':
            silentCommons.forEach(card => allCards.push(card));
            silentUncommons.forEach(card => allCards.push(card));
            silentRares.forEach(card => allCards.push(card));
            break;    
        case 'Defect':
            defectCommons.forEach(card => allCards.push(card));
            defectUncommons.forEach(card => allCards.push(card));
            defectRares.forEach(card => allCards.push(card));
            break;    
        case 'Watcher':
            watcherCommons.forEach(card => allCards.push(card));
            watcherUncommons.forEach(card => allCards.push(card));
            watcherRares.forEach(card => allCards.push(card));
            break;    
        default:
            break;
    }

    let newDeck = deck.map(card => {
        if (card == 'Strike' || card == 'Defend') {
            return allCards[Math.floor(Math.random() * allCards.length)];
        } else return card;
    })

    return newDeck;

}

function act1QuestionMark() {

    let QMarray = [];

    for (let i = 0; i < QMevent; i++) {
        QMarray.push('Event');
    }

    for (let i = 0; i < QMhallway; i++) {
        QMarray.push('Hallway');
    }

    for (let i = 0; i < QMshop; i++) {
        QMarray.push('Shop');
    }

    for (let i = 0; i < QMtreasure; i++) {
        QMarray.push('Treasure');
    }

    let QMroll = Math.floor(Math.random() * QMarray.length);
    let result = QMarray[QMroll];

    switch (result) {
        case 'Treasure':
            QMtreasure = 2;
            QMshop += 3;
            QMhallway += 10;
            while ((QMevent + QMhallway + QMshop + QMtreasure) > 100) {
                QMevent--;
            }
            while ((QMevent + QMhallway + QMshop + QMtreasure) < 100) {
                QMevent++;
            }
            break;
        case 'Shop':
            QMtreasure += 2;
            QMshop = 3;
            QMhallway += 10;
            while ((QMevent + QMhallway + QMshop + QMtreasure) > 100) {
                QMevent--;
            }
            while ((QMevent + QMhallway + QMshop + QMtreasure) < 100) {
                QMevent++;
            }
            break;
        case 'Hallway':
            QMtreasure += 2;
            QMshop += 3;
            QMhallway = 10;
            while ((QMevent + QMhallway + QMshop + QMtreasure) > 100) {
                QMevent--;
            }
            while ((QMevent + QMhallway + QMshop + QMtreasure) < 100) {
                QMevent++;
            }
            break;
        case 'Event':
            QMtreasure += 2;
            QMshop += 3;
            QMhallway += 10;
            while ((QMevent + QMhallway + QMshop + QMtreasure) > 100) {
                QMevent--;
            }
            while ((QMevent + QMhallway + QMshop + QMtreasure) < 100) {
                QMevent++;
            }
            act1DetermineEvent();
            break;
    
        default:
            break;
    }

    console.log(`Roll: ${QMroll}`);
    console.log(`You got: ${result}\n`);
    console.log(`Event: ${QMevent}%`);
    console.log(`Hallway: ${QMhallway}%`);
    console.log(`Shop: ${QMshop}%`);
    console.log(`Treasure: ${QMtreasure}%`);
    console.log(`Total: ${QMevent + QMhallway + QMshop + QMtreasure}%\n`)

    chooseRoom();
    
}

function act1DetermineEvent() {

    let event;
    floor++;
    console.log(`Floor ${floor}`);

    // If you have at least 35 gold, and it's not in the array already, and you haven't seen the event yet, add it to the array
    if (gold >= 35 && !act1Events.includes('The Cleric') && !seenEvents.includes('The Cleric')) {
        act1Events.push('The Cleric');
    }

    // If you have less than 35 gold, and it's in the array, remove it
    if (gold < 35 && act1Events.includes('The Cleric')) {
        act1Events.splice(act1Events.indexOf('The Cleric'), 1);
    }

    if (gold >= 50 && !act1Shrines.includes('The Woman in Blue') && !seenEvents.includes('The Woman in Blue')) {
        act1Shrines.push('The Woman in Blue');
    }

    if (gold < 50 && act1Shrines.includes('The Woman in Blue')) {
        act1Shrines.splice(act1Shrines.indexOf('The Woman in Blue'), 1);
    }

    if (floor >= 7 && !act1Events.includes('Dead Adventurer') && !seenEvents.includes('Dead Adventurer')) {
        act1Events.push('Dead Adventurer');
    }

    if (floor >= 7 && !act1Events.includes('Mushrooms') && !seenEvents.includes('Mushrooms')) {
        act1Events.push('Mushrooms');
    }

    // if (cursed) {
    //     shrines.push('The Divine Fountain');
    // }

    let shrineRoll = Math.floor(Math.random() * 4) + 1;
    console.log(`Shrine roll: ${shrineRoll}`);

    if (shrineRoll === 1) {
        let roll = Math.floor(Math.random() * act1Shrines.length);
        event = act1Shrines[roll];
        seenEvents.push(event);
        act1Shrines.splice(roll, 1);
    } else {
        let roll = Math.floor(Math.random() * act1Events.length);
        event = act1Events[roll];
        seenEvents.push(event);
        act1Events.splice(roll, 1);
    }

    console.log(`You got the "${event}" event.`);
    console.log('Remaining events:');
    console.log(act1Events);
    console.log('Remaining shrines:');
    console.log(act1Shrines);

    chooseRoom();

}

function treasureChest() {
    let chestSize = Math.floor(Math.random() * 6) + 1;

    // Small Chest
    if (chestSize <= 3) {
        console.log('Small Chest:');
        let goldRoll = Math.round(Math.random());
    
        if (goldRoll === 1) {
        let goldAmount = Math.floor(Math.random() * 6) + 23;
        gold += goldAmount;
        console.log(`You got ${goldAmount} gold.`);
        console.log(`Total gold: ${gold}`);
    }

        let rarityRoll = Math.floor(Math.random() * 4) + 1;
        if (rarityRoll === 4) {
            let relicRoll = Math.floor(Math.random() * uncommonRelics.length);
            var relic = uncommonRelics[relicRoll];
            relics.push(relic);
            uncommonRelics.splice(relicRoll, 1);
        } else {
            let relicRoll = Math.floor(Math.random() * commonRelics.length);
            var relic = commonRelics[relicRoll];
            relics.push(relic);
            commonRelics.splice(relicRoll, 1);
        }

        console.log(`You got ${relic}.`);

    // Medium Chest
    } else if (chestSize > 3 && chestSize < 6) {
        console.log('Medium Chest:');
        let goldRoll = Math.floor(Math.random() * 20) + 1;
    
        if (goldRoll <= 7) {
        let goldAmount = Math.floor(Math.random() * 11) + 45;
        gold += goldAmount;
        console.log(`You got ${goldAmount} gold.`);
        console.log(`Total gold: ${gold}`);
    }

        let rarityRoll = Math.floor(Math.random() * 20) + 1;
        if (rarityRoll <= 10) {
            let relicRoll = Math.floor(Math.random() * commonRelics.length);
            var relic = commonRelics[relicRoll];
            relics.push(relic);
            commonRelics.splice(relicRoll, 1);
        } else if (rarityRoll > 10 && rarityRoll < 18) {
            let relicRoll = Math.floor(Math.random() * uncommonRelics.length);
            var relic = uncommonRelics[relicRoll];
            relics.push(relic);
            uncommonRelics.splice(relicRoll, 1);
        } else {
            let relicRoll = Math.floor(Math.random() * rareRelics.length);
            var relic = rareRelics[relicRoll];
            relics.push(relic);
            rareRelics.splice(relicRoll, 1);
        }

        console.log(`You got ${relic}.`);

    // Large Chest
    } else {
        console.log('Large Chest:');
        let goldRoll = Math.round(Math.random());
    
        if (goldRoll === 1) {
        let goldAmount = Math.floor(Math.random() * 16) + 68;
        gold += goldAmount;
        console.log(`You got ${goldAmount} gold.`);
        console.log(`Total gold: ${gold}`);
    }

        let rarityRoll = Math.floor(Math.random() * 4) + 1;
        if (rarityRoll === 4) {
            let relicRoll = Math.floor(Math.random() * rareRelics.length);
            var relic = rareRelics[relicRoll];
            relics.push(relic);
            rareRelics.splice(relicRoll, 1);
        } else {
            let relicRoll = Math.floor(Math.random() * uncommonRelics.length);
            var relic = uncommonRelics[relicRoll];
            relics.push(relic);
            uncommonRelics.splice(relicRoll, 1);
        }

        console.log(`You got ${relic}.`);

    }

    console.log('Relics:');
    console.log(relics, '\n');
}

treasureChest();