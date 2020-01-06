// var inquirer = require('inquirer');
var cards = require('./cards');

console.log(cards);

class Character {
    constructor() {
        this.gold = 99;
        this.energy = 3;
        this.potionBeltSize = 3;
        this.cardChoicCount = 3;
        this.relics = [];
    }
}

class Ironclad extends Character {
    constructor() {
        super();
        this.name = 'Ironclad';
        this.maxHP = 80;
    }
}

class Silent extends Character {
    constructor() {
        super();
        this.name = 'Silent';
        this.maxHP = 70;
    }
}

class Defect extends Character {
    constructor() {
        super();
        this.name = 'Defect';
        this.maxHP = 75;
    }
}

class Watcher extends Character {
    constructor() {
        super();
        this.name = 'Watcher';
        this.maxHP = 72;
    }
}

var character = "Ironclad";
var relics = [];
var drawPile = [];
var hand = [];
var discard = [];
var exhaust = [];
var powersPlayed = [];
var buffsDebuffs = [];

function createStarterDeck() {

    drawPile.push(new Strike);
    drawPile.push(new Strike);
    drawPile.push(new Strike);
    drawPile.push(new Strike);
    drawPile.push(new Defend);
    drawPile.push(new Defend);
    drawPile.push(new Defend);
    drawPile.push(new Defend);
    drawPile.push(new AscendersBane);

    switch (character) {
        case "Ironclad":
            drawPile.push(new Strike);
            drawPile.push(new Bash);            
            break;
    
        case "Silent":
            drawPile.push(new Strike);
            drawPile.push(new Defend);
            drawPile.push(new Neutralize);
            drawPile.push(new Survivor);
            break;
    
        case "Defect":
            orbs = [null, null, null];
            drawPile.push(new Zap);
            drawPile.push(new Dualcast);
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

// createStarterDeck();
// drawCards(5);
// endTurn();
// endTurn();