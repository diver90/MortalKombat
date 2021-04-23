
import { player1, player2 } from  './player.js';
import { generateLogs } from './logs.js';
import { createElement } from "./utils.js";
import { $arenas, $formFight, enemyAttack, playerAttack, showResult } from "./fight.js";

function createPlayer({player, hp, name, img}) {
    const $player = createElement('div', 'player' + player);
    const $progressbar = createElement('div', 'progressbar');
    const $character = createElement('div', 'character');
    const $life = createElement('div', 'life');
    const $name = createElement('div', 'name');
    const $img = createElement('img');

    $life.style.width = hp + '%';
    $name.innerText = name;
    $img.src = img;

    $player.appendChild($progressbar);
    $player.appendChild($character);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $character.appendChild($img);
    return $player;
}

function init(){

    $arenas.appendChild(createPlayer(player1));
    $arenas.appendChild(createPlayer(player2));
    generateLogs('start', player1, player2);
}

init();

$formFight.addEventListener('submit', function (e){
    e.preventDefault();
    const enemy = enemyAttack();
    const player = playerAttack();

    if (enemy.hit !== player.defence) {
        player1.hp = player1.changeHP(enemy.value);
        player1.renderHP();
        generateLogs('hit', player2, player1, enemy.value);
    } else {
        generateLogs('defence', player2, player1);
    }
    if (player.hit !== enemy.defence) {
        player2.hp = player2.changeHP(player.value);
        player2.renderHP();
        generateLogs('hit', player1, player2, player.value);
    } else {
        generateLogs('defence', player1, player2);

    }
    showResult();

});