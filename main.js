const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');
const $chat = document.querySelector('.chat');

const changeHP = function (damage) {
    return this.hp <= damage ? 0 : this.hp - damage;
};

const elHP = function (){
    return document.querySelector('.player'+ this.player +' .life');
};

const renderHP = function (){
    this.elHP().style.width = this.hp + '%';
};

const getRandom = (function (val){return Math.ceil(Math.random() * val)});

const $formFight = document.querySelector('.control');

const HIT = {
    head: 30,
    body: 20,
    foot: 10,
};

const ATTACK = ['head', 'body', 'foot'];

const logs = {
    start: 'Часы показывали [time], когда [player1] и [player2] бросили вызов друг другу.',
    end: [
        'Результат удара [playerWins]: [playerLose] - труп',
        '[playerLose] погиб от удара бойца [playerWins]',
        'Результат боя: [playerLose] - жертва, [playerWins] - убийца',
    ],
    hit: [
        '[playerDefence] пытался сконцентрироваться, но [playerKick] разбежавшись раздробил копчиком левое ухо врага.',
        '[playerDefence] расстроился, как вдруг, неожиданно [playerKick] случайно раздробил грудью грудину противника.',
        '[playerDefence] зажмурился, а в это время [playerKick], прослезившись, раздробил кулаком пах оппонента.',
        '[playerDefence] чесал <вырезано цензурой>, и внезапно неустрашимый [playerKick] отчаянно размозжил грудью левый бицепс оппонента.',
        '[playerDefence] задумался, но внезапно [playerKick] случайно влепил грубый удар копчиком в пояс оппонента.',
        '[playerDefence] ковырялся в зубах, но [playerKick] проснувшись влепил тяжелый удар пальцем в кадык врага.',
        '[playerDefence] вспомнил что-то важное, но внезапно [playerKick] зевнув, размозжил открытой ладонью челюсть противника.',
        '[playerDefence] осмотрелся, и в это время [playerKick] мимоходом раздробил стопой аппендикс соперника.',
        '[playerDefence] кашлянул, но внезапно [playerKick] показав палец, размозжил пальцем грудь соперника.',
        '[playerDefence] пытался что-то сказать, а жестокий [playerKick] проснувшись размозжил копчиком левую ногу противника.',
        '[playerDefence] забылся, как внезапно безумный [playerKick] со скуки, влепил удар коленом в левый бок соперника.',
        '[playerDefence] поперхнулся, а за это [playerKick] мимоходом раздробил коленом висок врага.',
        '[playerDefence] расстроился, а в это время наглый [playerKick] пошатнувшись размозжил копчиком губы оппонента.',
        '[playerDefence] осмотрелся, но внезапно [playerKick] робко размозжил коленом левый глаз противника.',
        '[playerDefence] осмотрелся, а [playerKick] вломил дробящий удар плечом, пробив блок, куда обычно не бьют оппонента.',
        '[playerDefence] ковырялся в зубах, как вдруг, неожиданно [playerKick] отчаянно размозжил плечом мышцы пресса оппонента.',
        '[playerDefence] пришел в себя, и в это время [playerKick] провел разбивающий удар кистью руки, пробив блок, в голень противника.',
        '[playerDefence] пошатнулся, а в это время [playerKick] хихикая влепил грубый удар открытой ладонью по бедрам врага.',
    ],
    defence: [
        '[playerKick] потерял момент и храбрый [playerDefence] отпрыгнул от удара открытой ладонью в ключицу.',
        '[playerKick] не контролировал ситуацию, и потому [playerDefence] поставил блок на удар пяткой в правую грудь.',
        '[playerKick] потерял момент и [playerDefence] поставил блок на удар коленом по селезенке.',
        '[playerKick] поскользнулся и задумчивый [playerDefence] поставил блок на тычок головой в бровь.',
        '[playerKick] старался провести удар, но непобедимый [playerDefence] ушел в сторону от удара копчиком прямо в пятку.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.',
        '[playerKick] не думал о бое, потому расстроенный [playerDefence] отпрыгнул от удара кулаком куда обычно не бьют.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.'
    ],
    draw: 'Ничья - это тоже победа!'
};

const player1 = {
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

const player2 = {
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

function attack (){
    console.log(this.name + 'Fight...')
}

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

function playerWin(name){
    const $winTitle = createElement('div', 'loseTitle');
    if (name) {
        $winTitle.innerText = name + ' Wins!';
    } else {
        $winTitle.innerText = 'Draw';
    }
    $arenas.appendChild($winTitle);
    createReloadButton();
}

function enemyAttack(){
    const hit = ATTACK[getRandom(3) - 1];
    const defence = ATTACK[getRandom(3) - 1];

    return {
        value: getRandom(HIT[hit]),
        hit,
        defence
    }
}

function showResult() {
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

function generateLogs(type, player1, player2, hit){
    const date = new Date();
    let text;
    let time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    let logsNum = logs[type].length;
    logsNum < 0 ? logsNum = 0 :'';
    switch (type) {
        case 'start':
            text = logs[type].replace('[player1]', player1.name).replace('[player2]', player2.name).replace('[time]', time);
            break;
        case 'end':
            text = logs[type][getRandom(logsNum)-1].replace('[playerWins]', player1.name).replace('[playerLose]', player2.name);
            text = `${time} ${text}`
            break;
        case 'hit':
            text = logs[type][getRandom(logsNum)-1].replace('[playerKick]', player1.name).replace('[playerDefence]', player2.name);
            text = `${time} ${text} ${player2.name} HP -${hit} ${player2.hp}/100`
            break;
        case 'defence':
            text = logs[type][getRandom(logsNum)-1].replace('[playerKick]', player1.name).replace('[playerDefence]', player2.name);
            text = `${time} ${text} ${player2.name} HP ${player2.hp}/100`
            break;
        case 'draw':
            text = logs[type];
            text = `${time} ${text}`
            break;
        default:
            text = 'Something happen... But what?';
    }

    console.log(text);
    const el = `<p>${text}</p>`;
    $chat.insertAdjacentHTML('afterbegin', el);
}

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));

generateLogs('start', player1, player2);

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

// function getTotalDamage(attacker, defender) {
//     return attacker.hit !== defender.defence ? attacker.value : 0;
// }

function playerAttack(){
    let attack = {};
    for (let item of $formFight){
        if(item.checked && item.name === 'hit'){
            attack.value = getRandom(HIT[item.value]);
            attack.hit = item.value;
        }
        if (item.checked && item.name === 'defence'){
            attack.defence = item.value;
        }
    }
    $formFight.reset();
    return attack;
}