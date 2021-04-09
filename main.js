const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

const player1 = {
    name: 'Scorpion',
    player: 1,
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: 'Kunai',
    attack: ()=>{
        console.log(this.name + 'Fight...')
    },
};

const player2 = {
    name: 'SubZero',
    player: 2,
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon:'Fist',
    attack: ()=>{
        console.log(this.name + 'Fight...')
    },
};

function createElement(tag, className) {
    let $element = document.createElement(tag);
    $element.classList.add(className);
   return $element;
}

function createPlayer(playerClass, player ) {
    const $player = createElement('div', playerClass);
    const $progressbar = createElement('div', 'progressbar');
    const $character = createElement('div', 'character');
    const $life = createElement('div','life');
    $life.innerHTML = player.hp;
    const $name = createElement('div', 'name');
    $name.innerHTML = player.name;
    const $img = document.createElement('img');
    $img.src = player.img;
    $player.appendChild($progressbar);
    $player.appendChild($character);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $character.appendChild($img);
    const $arenas = document.querySelector('.arenas');
    $arenas.appendChild($player);
}

function changeHP(player) {
    const $playerLife = document.querySelector('.player'+ player.player +' .life');
    player.hp -=20;
    $playerLife.style.width = player.hp + '%';

    if (player.hp < 0){

    }
}

$randomButton.addEventListener('click', () => {
    changeHP(player1);
    changeHP(player2);
});

function playerWin(name){
    const $winTitle = createElement('div', 'loseTitle');
    $winTitle.innerText = name + ' Win!';
    return $winTitle;
}

createPlayer('player1', player1);
createPlayer('player2', player2);