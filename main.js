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

function changeHP(player, damage) {
    const $playerLife = document.querySelector('.player'+ player.player +' .life');
    player.hp = player.hp <= damage ? 0 : player.hp - damage;
    console.log(player.name + ' get damage ' +damage + ' ' + player.hp + 'hp left ');
    $playerLife.style.width = player.hp + '%';
}

function elHP(){

}

$randomButton.addEventListener('click', () => {
    let damage = (function (){return Math.ceil(Math.random() * 20)});

    changeHP(player1, damage());
    changeHP(player2, damage());

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

function playerWin(name){
    const $winTitle = createElement('div', 'loseTitle');
    if (name) {
        $winTitle.innerText = name + ' Wins!';
    } else {
        $winTitle.innerText = 'Draw';
    }
    $arenas.appendChild($winTitle);
}

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));