var inquirer = require('inquirer');
var cards = require('./cards');
var relics = require('./relics');
var enemies = require('./enemies');

class Character {
    constructor() {
        this.gold = 99;
        this.maxEnergy = 3;
        this.currentEnergy = 3;
        this.potionBeltSize = 3;
        this.cardChoicCount = 3;
        this.startingHandDraw = 5;
        this.cardsPerTurn = 5;
        this.deck = [findCardRelicEnemy(cards.colorlessCardPool, 'Strike'), findCardRelicEnemy(cards.colorlessCardPool, 'Strike'), findCardRelicEnemy(cards.colorlessCardPool, 'Strike'), findCardRelicEnemy(cards.colorlessCardPool, 'Strike'), findCardRelicEnemy(cards.colorlessCardPool, 'Defend'), findCardRelicEnemy(cards.colorlessCardPool, 'Defend'), findCardRelicEnemy(cards.colorlessCardPool, 'Defend'), findCardRelicEnemy(cards.colorlessCardPool, 'Defend'), findCardRelicEnemy(cards.cursePool, 'Ascender\'s Bane')];
        this.relics = [];
        this.potions = [];
        this.block = 0;
        this.HPLossCount = 0;
        this.strength = 0;
        this.dexterity = 0;
        this.weak = 0;
        this.frail = 0;
        this.vulnerable = 0;
    }
}

class Ironclad extends Character {
    constructor() {
        super();
        this.name = 'Ironclad';
        this.maxHP = 80;
        this.currentHP = 80;
    }
}

class Silent extends Character {
    constructor() {
        super();
        this.name = 'Silent';
        this.maxHP = 70;
        this.currentHP = 70;
    }
}

class Defect extends Character {
    constructor() {
        super();
        this.name = 'Defect';
        this.maxHP = 75;
        this.currentHP = 75;
    }
}

class Watcher extends Character {
    constructor() {
        super();
        this.name = 'Watcher';
        this.maxHP = 72;
        this.currentHP = 72;
    }
}

var character = new Ironclad;
var floor = 0;
var hallwayCounter = 0;
var combatEnemies;
var turn = 1;
var prevHallway;
var prevElite;
var drawPile = [];
var hand = [];
var discard = [];
var exhaust = [];
var powersPlayed = [];

function findCardRelicEnemy(pool, name) {
    for (let i = 0; i < pool.length; i++) {
        if ((new pool[i]).name === name) {
            return new pool[i];
        }     
    }
}

function createStarterDeck() {

    switch (character.name) {
        case "Ironclad":
            character.deck.push(findCardRelicEnemy(cards.colorlessCardPool, 'Strike'));           
            character.deck.push(findCardRelicEnemy(cards.ironcladCardPool, 'Bash'));           
            character.relics.push(findCardRelicEnemy(relics.starterRelics, 'Burning Blood'));           
            break;
    
        case "Silent":
            character.deck.push(findCardRelicEnemy(cards.colorlessCardPool, 'Strike'));           
            character.deck.push(findCardRelicEnemy(cards.colorlessCardPool, 'Defend'));           
            character.deck.push(findCardRelicEnemy(cards.silentCardPool, 'Survivor'));
            character.deck.push(findCardRelicEnemy(cards.silentCardPool, 'Neutralize'));
            character.relics.push(findCardRelicEnemy(relics.starterRelics, 'Ring of the Serpent'));  
            break;
    
        case "Defect":
            character.deck.push(findCardRelicEnemy(cards.defectCardPool, 'Zap'));
            character.deck.push(findCardRelicEnemy(cards.defectCardPool, 'Dualcast'));
            character.relics.push(findCardRelicEnemy(relics.starterRelics, 'Cracked Core'));
            break;

        case 'Watcher':
            character.deck.push(findCardRelicEnemy(cards.watcherCardPool, 'Vigilance'));
            character.deck.push(findCardRelicEnemy(cards.watcherCardPool, 'Eruption'));
            character.relics.push(findCardRelicEnemy(relics.starterRelics, 'Pure Water'));
            break;
    
        default:
            console.log('Invalid character chosen.');
            break;
    }

}

function drawCards(num) {

    console.log(`Drawing ${num} cards.\n`);

    for (let i = 0; i < num; i++) {

        if (drawPile.length === 0) {
            shuffleDeck();
        }

        hand.push(drawPile[0]);
        drawPile.splice(0, 1);
    }

    showHand();
    showDrawPile();
    showDiscard();

}

function endTurn() {

    console.log('Ending turn.');

    hand.forEach(card => {

        if (card.ethereal) {
            exhaust.push(card);
        } else {
            discard.push(card);
        }
        
    })

    hand = [];

    combatEnemies.forEach(enemy => {
        enemy.AI();
    })

    showHand();
    showDrawPile();
    showDiscard();
    drawCards(5);

}

function shuffleDeck(deck) {

    console.log('Shuffling deck.\n');

    if (discard.length > 0) {
        discard.forEach(card => {
            deck.push(card);
        })
        discard = [];
    }

    for (let i = deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
        [deck[i], deck[j]] = [deck[j], deck[i]];
      }
      return deck;
}

function showDrawPile() {
    console.log('Draw Pile:');
    if (drawPile.length == 0) {
        console.log('[Empty]');
    } else {
        for (let i = 0; i < drawPile.length; i++) {
            console.log(drawPile[i].name);
        }
    }
    console.log('\n');
}

function showHand() {
    console.log('Hand:');
    if (hand.length == 0) {
        console.log('[Empty]');
    } else {
        for (let i = 0; i < hand.length; i++) {
            console.log(hand[i].name);
        }
    }
    console.log('\n');
}

function showDiscard() {
    console.log('Discard Pile:');
    if (discard.length == 0) {
        console.log('[Empty]');
    } else {
        for (let i = 0; i < discard.length; i++) {
            console.log(discard[i].name);
        }
    }
    console.log('\n');
}

function whaleBonus() {
    let option12choices = [`+Max HP`, 'Enemies in the next 3 combats will have 1 HP', 'Remove a card', 'Transform a card', 'Upgrade a card', 'Choose a card to obtain', 'Obtain a random rare card/uncommon colorless card/common relic', 'Recieve 100 gold', 'Obtain 3 random potions'];
    let option3disadvantages = ['Lose max HP', 'Take damage', 'Obtain a Curse', 'Lose all gold'];
    let option3rewards = ['Remove 2 cards', 'Transform 2 cards', 'Choose a rare card to obtain', 'Obtain 2 random colorless cards', 'Obtain a random rare relic'];

    let option1roll = Math.floor(Math.random() * option12choices.length);
    let option1 = option12choices[option1roll];
    option12choices.splice(option1roll, 1);

    let option2roll = Math.floor(Math.random() * option12choices.length);
    let option2 = option12choices[option2roll];

    let option3disadvantage = option3disadvantages[Math.floor(Math.random() * option3disadvantages.length)];
    if (!option3disadvantage === 'Lose all gold') {
        option3rewards.push('Gain 250 gold');
    }
    if (!option3disadvantage === 'Lose max HP') {
        option3rewards.push('++Max HP');
    }
    let option3reward = option3rewards[Math.floor(Math.random() * option3rewards.length)];
    let option3 = `${option3reward} (${option3disadvantage})`;
    let option4 = 'Replace your starting relic with a random boss relic';
    let choices = [option1, option2, option3, option4];
    console.log(choices);
}

function determineHallway() {
    if (hallwayCounter < 3) {
        var fights = ['Cultist', 'Jaw Worm', 'Louse x2', 'Small Slimes'];
        if (prevHallway) {
            fights.splice(fights.indexOf(prevHallway), 1);
        }
        // var fight = fights[Math.floor(Math.random() * fights.length)];
        var fight = 'Small Slimes';
        prevHallway = fight;
        
        switch (fight) {
            case 'Cultist':
                combatEnemies = [findCardRelicEnemy(enemies.act1Enemies, 'Cultist')];
                break;
            case 'Jaw Worm':
                combatEnemies = [findCardRelicEnemy(enemies.act1Enemies, 'Jaw Worm')];
                break;
            case 'Louse x2':
                let louse1 = Math.round(Math.random());
                if (louse1 === 0) {
                    louse1 = findCardRelicEnemy(enemies.act1Enemies, 'Louse (Green)');
                } else {
                    louse1 = findCardRelicEnemy(enemies.act1Enemies, 'Louse (Red)');
                }
                let louse2 = Math.round(Math.random());
                if (louse2 === 0) {
                    louse2 = findCardRelicEnemy(enemies.act1Enemies, 'Louse (Green)');
                } else {
                    louse2 = findCardRelicEnemy(enemies.act1Enemies, 'Louse (Red)');
                }
                combatEnemies = [louse1, louse2];
                break;
            case 'Small Slimes':
                let roll = Math.round(Math.random());
                if (roll === 0) {
                    combatEnemies = [findCardRelicEnemy(enemies.act1Enemies, 'Spike Slime (M)'), findCardRelicEnemy(enemies.act1Enemies, 'Acid Slime (S)')];
                } else {
                    combatEnemies = [findCardRelicEnemy(enemies.act1Enemies, 'Acid Slime (M)'), findCardRelicEnemy(enemies.act1Enemies, 'Spike Slime (S)')];
                }
                break;        
            default:
                break;
        }
    }
}

function showEnemy(enemies) {
    enemies.forEach(enemy => {
        console.log(enemy.name);
        console.log(`${enemy.currentHP}/${enemy.actualHP} HP\n`);
    })
}

function startCombat(enemies) {
    drawPile = character.deck;
    shuffleDeck(drawPile);
    console.log('New combat:\n');
    showEnemy(enemies);
    enemies.forEach(enemy => enemy.AI());
    enemies.forEach(enemy => enemy.showIntent());

    drawCards(character.startingHandDraw);
}

createStarterDeck();
// console.log(character);
// drawCards(5);
// endTurn();
// endTurn();
// whaleBonus();
determineHallway();
startCombat(combatEnemies);
// endTurn();