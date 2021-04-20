const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

const changeHP = function (damage) {
    return this.hp <= damage ? 0 : this.hp - damage;
};

const elHP = function (){
    return document.querySelector('.player'+ this.player +' .life');
};

const renderHP = function (){
    this.elHP().style.width = this.hp + '%';
};

const getRandom = (function (val){return Math.ceil(Math.random() * val)});

const $formFight = document.querySelector('.control');

const HIT = {
    head: 30,
    body: 20,
    foot: 10,
};

const ATTACK = ['head', 'body', 'foot'];

import { player1, player2 } from "./player.js";

const createReloadButton = function (){
    const $reloadButtonWrap = createElement('div', 'reloadWrap');
    const $button = createElement('button', 'button');
    $button.innerText = 'Restart';
    $button.addEventListener('click', () => {
        window.location.reload();
    });
    $reloadButtonWrap.appendChild($button);
    $arenas.appendChild($reloadButtonWrap);
}

function attack (){
    console.log(this.name + 'Fight...')
}

function createElement(tag, className) {
    let $element = document.createElement(tag);
    if(className){
        $element.classList.add(className);
    }
   return $element;
}

function createPlayer(playerObj) {
    const $player = createElement('div', 'player' + playerObj.player);
    const $progressbar = createElement('div', 'progressbar');
    const $character = createElement('div', 'character');
    const $life = createElement('div', 'life');
    const $name = createElement('div', 'name');
    const $img = createElement('img');

    $life.style.width = playerObj.hp + '%';
    $name.innerText = playerObj.name;
    $img.src = playerObj.img;

    $player.appendChild($progressbar);
    $player.appendChild($character);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $character.appendChild($img);
    return $player;
}

function playerWin(name){
    const $winTitle = createElement('div', 'loseTitle');
    if (name) {
        $winTitle.innerText = name + ' Wins!';
    } else {
        $winTitle.innerText = 'Draw';
    }
    $arenas.appendChild($winTitle);
    createReloadButton();
}

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));

function enemyAttack(){
    const hit = ATTACK[getRandom(3) - 1];
    const defence = ATTACK[getRandom(3) - 1];

    return {
        value: getRandom(HIT[hit]),
        hit,
        defence
    }
}

$formFight.addEventListener('submit', function (e){
    e.preventDefault();
    const enemy = enemyAttack();
    const attack = playerAttack();

    player1.hp = player1.changeHP(getTotalDamage(enemy,attack));
    player1.renderHP();
    player2.hp = player2.changeHP(getTotalDamage(attack,enemy));
    player2.renderHP();

    if (player1.hp === 0 || player2.hp === 0) {
        $randomButton.disabled = true;
        if(player1.hp === 0 && player1.hp < player2.hp){
            playerWin(player2.name)
        } else if(player2.hp === 0 && player2.hp < player1.hp) {
            playerWin(player1.name)
        } else {
            playerWin()
        }
    }

});

function getTotalDamage(attacker, defender) {
    return attacker.hit !== defender.defence ? attacker.value : 0;
}

function playerAttack(){
    let attack = {};
    for (let {checked, name, value}  of $formFight){
        if(checked && name === 'hit'){
            attack.value = getRandom(HIT[value]);
            attack.hit = value;
        }
        if (checked && name === 'defence'){
            attack.defence = value;
        }
    }
    $formFight.reset();
    return attack;
}