class Server {
    apiUrl = 'https://reactmarathon-api.herokuapp.com/api/mk/';

    getPlayerAll = async () => {
        return await fetch(this.apiUrl + 'players')
            .then((res) => {
            return res.json()
        })
            .catch(
                (reason) => {
                    return console.log(reason.json());
                });
    };

    getRandomEnemy = async () => {
        return await fetch(this.apiUrl + 'player/choose')
            .then(
            (res) => {
                return res.json()
            })
            .catch(
                (reason) => {
                    return console.log(reason.json());
                });
    };

    getFight = async (hit, defence) => {
        return await fetch(this.apiUrl + 'player/fight', {
            method: 'POST',
            body: JSON.stringify({
                hit,
                defence,
            })
        })
            .then(
                (res) => {
                return res.json();
            })
            .catch(
                (reason) => {
                return reason.json();
            });
    };
}

export default Server;