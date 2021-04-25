import Player from "./player.js";
import Fight from "./fight.js";
import {createElement} from "./utils.js";

export default class Game {

    createPlayer = ({player, hp, name, img}) => {
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

    start = () => {
        this.player1 = new Player({
            name: 'Scorpion',
            player: 1,
            hp: 100,
            img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
            weapon: 'Kunai',
        });

        this.player2 = new Player({
            name: 'SubZero',
            player: 2,
            hp: 100,
            img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
            weapon: 'Fist',
        });

        const fight = new Fight({
                player1: this.player1,
                player2: this.player2
        });

        fight.$formFight.addEventListener('submit', function (e) {
            e.preventDefault();
            const enemy = fight.enemyAttack();
            const player = fight.playerAttack();

            if (enemy.hit !== player.defence) {
                fight.player1.hp = fight.player1.changeHP(enemy.value);
                fight.player1.renderHP();
                fight.generateLogs('hit', fight.player2, fight.player1, enemy.value);
            } else {
                fight.generateLogs('defence', fight.player2, fight.player1);
            }
            if (player.hit !== enemy.defence) {
                fight.player2.hp = fight.player2.changeHP(player.value);
                fight.player2.renderHP();
                fight.generateLogs('hit', fight.player1, fight.player2, player.value);
            } else {
                fight.generateLogs('defence', fight.player1, fight.player2);

            }
            fight.showResult();
        })

        fight.$arenas.appendChild(this.createPlayer(this.player1));
        fight.$arenas.appendChild(this.createPlayer(this.player2));
        fight.generateLogs('start', this.player1, this.player2);
    }

}