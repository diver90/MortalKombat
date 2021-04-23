const changeHP = function (damage) {
    return this.hp <= damage ? 0 : this.hp - damage;
};

const elHP = function (){
    return document.querySelector('.player'+ this.player +' .life');
};

const renderHP = function (){
    this.elHP().style.width = this.hp + '%';
};

function attack (){
    console.log(this.name + 'Fight...')
}

export const player1 = {
    name: 'Scorpion',
    player: 1,
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: 'Kunai',
    attack,
    changeHP,
    renderHP,
    elHP,
};

export const player2 = {
    name: 'SubZero',
    player: 2,
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon:'Fist',
    attack,
    changeHP,
    renderHP,
    elHP,
};