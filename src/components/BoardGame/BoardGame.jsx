import React from "react";
import dataChessBoard from "../dataChessBoard.json";
import Cell from "./Cell";
import './BoardGame.css';

const BoardGame = () => {

    return ( 
        <table className="board">
            {dataChessBoard.map(row => <tr>{row.Cells.map(cell => <Cell class={cell.className}/>)}</tr>)}
        </table> 
    );
}

export default BoardGame;