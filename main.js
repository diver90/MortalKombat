const player1 = {
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: 'Kunai',
    attack: ()=>{
        console.log(this.name + 'Fight...')
    },
};

const player2 = {
    name: 'SubZero',
    hp: 100,
    img: '- http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon:'Fist',
        attack: ()=>{
            console.log(this.name + 'Fight...')
        },
};



function createPlayer(player, playerName, life) {
    const $player = document.createElement('div');
    $player1.classList.add('player1');
    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');
    const $character = document.createElement('div');
    $character.classList.add('character');
    const $life = document.createElement('div');
    $progressbar.classList.add('life');
    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerHTML = player.name;
    const $img = document.createElement('img');
    $img.src = player.img;
    $player.appendChild($progressbar);
    $player.appendChild($character);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $character.appendChild($name);
    const $arenas = document.querySelector('.arenas');
    $arenas =
}