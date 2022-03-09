import React from 'react';
import "./Cell.css";

const Cell = (props) => {
    return (<td className={"cell-common " + props.class}></td> );
}

export default Cell;