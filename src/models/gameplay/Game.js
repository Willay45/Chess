import Player from "../Player";

export default class Game {
    constructor(name, teamColor){
        this.currentScene = undefined;
        this.previousScene = undefined;
        this.player = new Player(name, teamColor);
    }

    getPlayer() {
        return this.player;
    }

    getCurrentScene() {
        return this.currentScene;
    }

    getPreviousScene() {
        return this.previousScene;
    }

    setCurrentScene(scene) {
        this.currentScene = scene;
    }

    backToPreviousScene() {
        const currScene = this.currentScene;
        this.currentScene = this.previousScene;
        this.previousScene = currScene;
    }

}