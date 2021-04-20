import {player1, player2} from "./player.js";
import {generateLogs} from "./logs.js";
import {createElement, getRandom} from "./utils.js";

const HIT = {
    head: 30,
    body: 20,
    foot: 10,
};

const ATTACK = ['head', 'body', 'foot'];


export const $arenas = document.querySelector('.arenas');
export const $formFight = document.querySelector('.control');
export const $randomButton = document.querySelector('.button');

export const showResult = () => {
    if (player1.hp === 0 || player2.hp === 0) {
        $randomButton.disabled = true;
        if(player1.hp === 0 && player1.hp < player2.hp){
            playerWin(player2.name)
            generateLogs('end', player2, player1);
        } else if(player2.hp === 0 && player2.hp < player1.hp) {
            playerWin(player1.name)
            generateLogs('end', player1, player2);
        } else {
            playerWin()
            generateLogs('draw', player1, player2);
        }
    }
}

export const playerAttack = () => {
    let attack = {};
    for (let {checked, name, value} of $formFight){
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

export const enemyAttack = () => {
    const hit = ATTACK[getRandom(3) - 1];
    const defence = ATTACK[getRandom(3) - 1];

    return {
        value: getRandom(HIT[hit]),
        hit,
        defence
    }
}


const playerWin = (name) => {
    const $winTitle = createElement('div', 'loseTitle');
    if (name) {
        $winTitle.innerText = name + ' Wins!';
    } else {
        $winTitle.innerText = 'Draw';
    }
    $arenas.appendChild($winTitle);
    createReloadButton();
}

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
