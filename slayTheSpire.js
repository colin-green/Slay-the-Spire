var inquirer = require('inquirer');

class Strike {
    constructor() {
        this.name = 'Strike';
        this.type = 'Attack';
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
}

class Defend {
    constructor() {
        this.name = 'Defend';
        this.type = 'Skill';
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

class AscendersBane {
    constructor() {
        this.name = 'Ascender\'s Bane';
        this.type = 'Curse';
        this.unplayable = true;
    }
}

class Bash {
    constructor() {
        this.name = 'Bash';
        this.type = 'Attack';
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

class Neutralize {
    constructor() {
        this.name = 'Neutralize';
        this.type = 'Attack';
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
}

class Survivor {
    constructor() {
        this.name = 'Survivor';
        this.type = 'Skill';
        this.cost = 1;
        this.block = 8;
        this.upgraded = false;
    }

    upgrade() {
        console.log(`Upgrading ${this.name}.`);
        this.name += '+';
        this.upgraded = true;
        this.block = 11;
    }

    // discard() {

    // }
}

class Zap {
    constructor() {
        this.name = 'Zap';
        this.type = 'Skill';
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
}

class Dualcast {
    constructor() {
        this.name = 'Dualcast';
        this.type = 'Skill';
        this.cost = 1;
        this.evokeOrb = 2;
        this.upgraded = false;
    }

    upgrade() {
        console.log(`Upgrading ${this.name}.`);
        this.name += '+';
        this.upgraded = true;
        this.cost = 0;
    }
}

function crackedCore() {
    return orbs[0] = 'Lightning';
}

var character = "Ironclad";
var orbs;
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

        if (drawPile.length == 0) {
            reshuffle();
            var drawnCardIndex = Math.floor(Math.random() * drawPile.length);
            var drawnCard = drawPile[drawnCardIndex];
            hand.push(drawnCard);
            drawPile.splice(drawnCardIndex, 1); 
        } else {
            var drawnCardIndex = Math.floor(Math.random() * drawPile.length);
            var drawnCard = drawPile[drawnCardIndex];
            hand.push(drawnCard);
            drawPile.splice(drawnCardIndex, 1);  
        }      
    }

    showHand();
    showDrawPile();
    showDiscard();

}

function endTurn() {

    console.log('Ending turn.');

    for (let i = 0; i < hand.length; i++) {
        
        if (hand[i] == 'Ascender\'s Bane') {
            exhaust.push(hand[i]);
        } else {
            discard.push(hand[i]);
        }
        
    }

    hand = [];

    showHand();
    showDrawPile();
    showDiscard();
    drawCards(5);

}

function reshuffle() {

    for (let i = 0; i < discard.length; i++) {

        drawPile.push(discard[i]);
        
    }

    discard = [];

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

createStarterDeck();
drawCards(5);
// endTurn();
// endTurn();