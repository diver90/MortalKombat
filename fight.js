import Logs from "./logs.js";
import {createElement, getRandom} from "./utils.js";
import {HIT, ATTACK} from "./const.js";

class Fight {

    constructor(props) {
        this.player1 = props.player1
        this.player2 = props.player2
    }

    generateLogs = new Logs().generateLogs;

    $arenas = document.querySelector('.arenas');

    $formFight = document.querySelector('.control');

    $randomButton = document.querySelector('.button');

    showResult = () => {
        if (this.player1.hp === 0 || this.player2.hp === 0) {
            this.$randomButton.disabled = true;
            if (this.player1.hp === 0 && this.player1.hp < this.player2.hp) {
                this.playerWin(this.player2.name)
                this.generateLogs('end', this.player2, this.player1);
            } else if (this.player2.hp === 0 && this.player2.hp < this.player1.hp) {
                this.playerWin(this.player1.name)
                this.generateLogs('end', this.player1, this.player2);
            } else {
                this.playerWin()
                this.generateLogs('draw', this.player1, this.player2);
            }
        }
    }

    playerAttack = () => {
        let attack = {};
        for (let {checked, name, value} of this.$formFight) {
            if (checked && name === 'hit') {
                attack.value = getRandom(HIT[value]);
                attack.hit = value;
            }
            if (checked && name === 'defence') {
                attack.defence = value;
            }
        }
        this.$formFight.reset();
        return attack;
    }

    enemyAttack = () => {
        const hit = ATTACK[getRandom(3) - 1];
        const defence = ATTACK[getRandom(3) - 1];

        return {
            value: getRandom(HIT[hit]),
            hit,
            defence
        }
    }

    playerWin = (name) => {
        const $winTitle = createElement('div', 'loseTitle');
        if (name) {
            $winTitle.innerText = name + ' Wins!';
        } else {
            $winTitle.innerText = 'Draw';
        }
        this.$arenas.appendChild($winTitle);
        this.createReloadButton();
    }

    createReloadButton = () => {
        const $reloadButtonWrap = createElement('div', 'reloadWrap');
        const $button = createElement('button', 'button');
        $button.innerText = 'Restart';
        $button.addEventListener('click', () => {
            window.location.reload();
        });
        $reloadButtonWrap.appendChild($button);
        this.$arenas.appendChild($reloadButtonWrap);
    }
}

export default Fight;