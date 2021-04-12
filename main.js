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

function changeHP(player) {
    const $playerLife = document.querySelector('.player'+ player.player +' .life');
    let $damage = Math.ceil(Math.random() * 20);
    player.hp = player.hp <= $damage ? 0 : player.hp - $damage;
    console.log(player.name + ' get damage ' +$damage + ' ' + player.hp + 'hp left ');
    $playerLife.style.width = player.hp + '%';

    if (player.hp === 0){
        player.player - 1 ? playerWin(player1.name) : playerWin(player2.name);
    }
}

$randomButton.addEventListener('click', () => {
    changeHP(player1);
    changeHP(player2);
});

function playerWin(name){
    const $winTitle = createElement('div', 'loseTitle');
    $winTitle.innerText = name + ' Wins!';
    $randomButton.disabled = true;
    $arenas.appendChild($winTitle);
}

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));