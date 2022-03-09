import Crazy from "./items/Crazy";
import King from "./items/King";
import Pawn from "./items/Pawn";
import Queen from "./items/Queen";
import Rider from "./items/Rider";
import Tower from "./items/Tower";

export default class Player {
    constructor(name, teamColor){
        this.name = name;
        this.inventory = [];
        this.teamColor = teamColor;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getInventory() {
        return this.inventory;
    }

    setInventory() {
        this.inventory.push(new King(this.teamColor)); // 1
        this.inventory.push(new Queen(this.teamColor)); // 1
        for(let i = 0 ; i < 2 ; i++) {
            this.inventory.push(new Rider(this.teamColor)); // 2
            this.inventory.push(new Tower(this.teamColor)); // 2
            this.inventory.push(new Crazy(this.teamColor)); // 2
        }
        for(let i = 0 ; i < 8 ; i++){
            this.inventory.push(new Pawn(this.teamColor)); // 8
        }

    }

    tokensChessIsAlive () {
        let inventory = this.getInventory();
        let HasAliveToken;
        
        inventory.forEach(e => {
            if(e.isAlive){
              return HasAliveToken = true
            } else {
                HasAliveToken = false
            }
        });

        return HasAliveToken
    }

}