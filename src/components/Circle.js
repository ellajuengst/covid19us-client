import React from 'react'

export default function Circle(props) {

    const name = props.data.name;
    const number = props.data.cases;
    const max = props.max;
    let divide = max / 100;
    let width = number / divide;
    let radius = width / 2;
    let color = '';
    if (width < 8) {
        color = '#A4ABCB';
    } else if (width < 15) {
        color = '#7D87B5';
    } else if (width < 25) {
        color = '#525A8E';
    } else if (width < 40) {
        color = '#34395B';
    } else {
        color = '#161927';
    }

    if (number >= 531850) {
        return (
            <div className="circle-div">
                 <svg viewBox="0 0 300 300" preserveAspectRatio="xMinYMin meet">
                    <g>
                    <circle r={`${radius}%`} cx="50%" cy="50%" fill={`${color}`} className="circle-back" />
                    <text className="text" x="50%" y="50%" textAnchor="middle" fill="white" dy=".3em">
                        <tspan className="name-text" x="50%" dy="-8px">{name}</tspan>
                        <tspan className="cases-text" x="50%" dy="20px">{props.data.casesStr}</tspan>
                    </text>                    </g>
                </svg> 

            </div>)
    } else {
        return (
            <div className="circle-div">
                <svg viewBox="0 0 300 300" preserveAspectRatio="xMinYMin meet">
                    <g>
                    <circle r={`${radius}%`} cx="50%" cy="50%" fill={`${color}`} className="circle-back" />
                    </g>
                    <text className="text" x="50%" y="80%" textAnchor="middle" fill="black" dy=".3em">
                        <tspan className="name-text" x="50%" dy="-8px">{name}</tspan>
                        <tspan className="cases-text" x="50%" dy="20px">{props.data.casesStr}</tspan>
                    </text>
                </svg> 
                
                
            </div>)
    }

}

