import {getRandom} from "./utils.js";
import { LOGS } from "./const.js";

class Logs {
    $chat = document.querySelector('.chat');

    logsNum = (data) => {
        let num = getRandom(data.length) - 1;
        return num < 0 ? 0 : num;
    };

    generateLogs = (type, player1, player2, damage) => {
        const {start, hit, defence, end, draw} = LOGS;
        const date = new Date();
        let text;
        let time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

        switch (type) {
            case 'start':
                text = start.replace('[player1]', `<b>${player1.name}</b>`).replace('[player2]', `<b>${player2.name}</b>`).replace('[time]', time);
                break;
            case 'end':
                text = end[this.logsNum(end)].replace('[playerWins]', `<b>${player1.name}</b>`).replace('[playerLose]', `<b>${player2.name}</b>`);
                text = `${time} ${text}`
                break;
            case 'hit':
                text = hit[this.logsNum(hit)].replace('[playerKick]', `<b>${player1.name}</b>`).replace('[playerDefence]', `<b>${player2.name}</b>`);
                text = `${time} ${text} <b>${player2.name}</b> HP <b style="color: #f51001;">-${damage}</b> <b style="color: #00d600" >[${player2.hp}/100]</b>`
                break;
            case 'defence':
                text = defence[this.logsNum(defence)].replace('[playerKick]', `<b>${player1.name}</b>`).replace('[playerDefence]', `<b>${player2.name}</b>`);
                text = `${time} ${text}  <b>${player2.name}</b> HP <b style="color: #00d600" >[${player2.hp}/100]</b>`
                break;
            case 'draw':
                text = `${time} ${draw}`
                break;
            default:
                text = 'Something happen... But what?';
                break;
        }

        this.$chat.insertAdjacentHTML('afterbegin', `<p>${text}</p>`);
    }
}

export default Logs;