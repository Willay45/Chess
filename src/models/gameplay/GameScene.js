import Game from "./Game";
import Player from "../Player";

export default class GameScene {
    constructor(opponent, playerName, teamColor, endAction) {
        this.opponent = opponent;
        this.player = new Player(playerName, teamColor);
        this.boardGame = "BoardGame";
        this;started = false;
        this.endAction = endAction;
    }

    getOpponent() {
        return this.opponent;
    }

    getPlayer() {
        return this.player;
    }

    getBoardGame() {
        return this.boardGame;
    }

    isStarted() {
        return this.started;
    }


}