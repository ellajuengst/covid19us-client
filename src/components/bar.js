import React from 'react'

export default function bar(props) {
 
    const max = props.max;
    let divide = max / 100;
    const name = props.name;
    const number = props.number;
    let width = number / divide;
    let index = props.index;
    

    if (Number.isNaN(width)) {
        width = 0;
    }

    let color = '';
    if (width < 3) {
        color = '#A4ABCB';
    } else if (width < 10) {
        color = '#7D87B5';
    } else if (width < 15) {
        color = '#525A8E';
    } else if (width < 30) {
        color = '#34395B';
    } else {
        color = '#161927';
    }
    
    return (
        <g className="bar">
            <text className="bar-text" x="0" y="1.3em" dy={`${index*40}`} >{name}: <tspan fontWeight="500">{props.numberStr}</tspan></text>
            <rect width={`${width}%`} x="220" y={`${index*40}`} height="30" fill={color}></rect>

        </g>
    )
}
