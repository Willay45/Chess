class TokenChess {
    constructor(teamColor) {
        this.id = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
        this.isAlive = true;
        this.position = null;
        this.teamColor = teamColor

    }

    getId() {
        return this.id;
    }

    getIsAlive() {
        return this.isAlive;
    }

    setIsAlive(value) {
        this.isAlive = value;
    }

    getPosition() {
        return this.position;
    }

    setPosition(newPosition) {
        this.position = newPosition;
    }

}
