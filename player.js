import {Player} from "./classPlayer.js";

export const player1 = new Player({
        name: 'Scorpion',
        player: 1,
        hp: 100,
        img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
       weapon: 'Kunai',
    });

    export const player2 = new Player({
        name: 'SubZero',
        player: 2,
        hp: 100,
        img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
       weapon: 'Fist',
    });
