// var inquirer = require('inquirer');
var cards = require('./cards');
var relics = require('./relics');

class Character {
    constructor() {
        this.gold = 99;
        this.maxEnergy = 3;
        this.currentEnergy = 3;
        this.potionBeltSize = 3;
        this.cardChoicCount = 3;
        this.deck = [new cards.colorlessCardPool[0], new cards.colorlessCardPool[0], new cards.colorlessCardPool[0], new cards.colorlessCardPool[0], new cards.colorlessCardPool[1], new cards.colorlessCardPool[1], new cards.colorlessCardPool[1], new cards.colorlessCardPool[1], new cards.cursePool[0]];
        this.relics = [];
        this.potions = [];
        this.block = 0;
        this.HPLossCount = 0;
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
var drawPile = [];
var hand = [];
var discard = [];
var exhaust = [];
var powersPlayed = [];
var buffsDebuffs = [];

function findCardRelic(pool, name) {
    for (let i = 0; i < pool.length; i++) {
        if ((new pool[i]).name === name) {
            return new pool[i];
        }     
    }
}

function createStarterDeck() {

    switch (character.name) {
        case "Ironclad":
            character.deck.push(findCardRelic(cards.colorlessCardPool, 'Strike'));           
            character.deck.push(findCardRelic(cards.ironcladCardPool, 'Bash'));           
            character.relics.push(findCardRelic(relics.starterRelics, 'Burning Blood'));           
            break;
    
        case "Silent":
            character.deck.push(findCardRelic(cards.colorlessCardPool, 'Strike'));           
            character.deck.push(findCardRelic(cards.colorlessCardPool, 'Defend'));           
            character.deck.push(findCardRelic(cards.silentCardPool, 'Survivor'));
            character.deck.push(findCardRelic(cards.silentCardPool, 'Neutralize'));
            character.relics.push(findCardRelic(relics.starterRelics, 'Ring of the Serpent'));  
            break;
    
        case "Defect":
            character.deck.push(findCardRelic(cards.defectCardPool, 'Zap'));
            character.deck.push(findCardRelic(cards.defectCardPool, 'Dualcast'));
            character.relics.push(findCardRelic(relics.starterRelics, 'Cracked Core'));
            break;

        case 'Watcher':
            character.deck.push(findCardRelic(cards.watcherCardPool, 'Vigilance'));
            character.deck.push(findCardRelic(cards.watcherCardPool, 'Eruption'));
            character.relics.push(findCardRelic(relics.starterRelics, 'Pure Water'));
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
            reshuffle();
        }

        var drawnCardIndex = Math.floor(Math.random() * drawPile.length);
        var drawnCard = drawPile[drawnCardIndex];
        hand.push(drawnCard);
        drawPile.splice(drawnCardIndex, 1);      
              
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

    showHand();
    showDrawPile();
    showDiscard();
    drawCards(5);

}

function reshuffle() {

    console.log('Shuffling deck.\n')

    let discardSize = discard.length;

    for (let i = 0; i < discardSize; i++) {
        let roll = Math.floor(Math.random() * discard.length);
        drawPile.push(discard[roll]);
        discard.splice(roll, 1);
    }

    // discard = [];

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

// createStarterDeck();
// console.log(character);
// drawCards(5);
// endTurn();
// endTurn();
// whaleBonus();