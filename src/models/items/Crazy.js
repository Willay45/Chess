import TokenChess from "./TokenChess";

export default class Crazy extends TokenChess {
    constructor(teamColor) {
        super(teamColor)
        this.moves = null;
        this.sprite = null;
        this.name = "Crazy";
        this.PM = 10;
    }

    getMoves() {
        return this.moves;
    }
    
    getSprite() {
        return this.sprite;
    }   

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getPM() {
        return this.PM;
    }

}