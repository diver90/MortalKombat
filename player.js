class Player {
    constructor(props) {
            this.player = props.player,
            this.name = props.name,
            this.hp = props.hp,
            this.img = props.img
    }


    changeHP = function (damage) {
        return this.hp <= damage ? 0 : this.hp - damage;
    };

    elHP = () => {
        return document.querySelector('.player' + this.player + ' .life');
    };

    renderHP = () => {
        this.elHP().style.width = this.hp + '%';
    };

    attack = () => {
        console.log(this.name + 'Fight...')
    }
}

export default Player;