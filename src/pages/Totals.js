import React, { useState, useEffect, useContext } from "react";
import Circle from "../components/Circle";
import { UsersContext } from '../UsersProvider';

export default function Totals() {

    const data = useContext(UsersContext);
    const date = data.date;
    const casesStr = data.totalCases;
    const deathsStr = data.totalDeaths
    const recoveredStr = data.totalRecovered;
    const newCasesStr = data.totalNewCases;
    const newDeathsStr = data.totalNewDeaths;
    const cases = parseFloat(data.totalCases.replace(/,/g, '').replace(/\+/g, ''));
    const deaths = parseFloat(data.totalDeaths.replace(/,/g, '').replace(/\+/g, ''));
    const recovered = parseFloat(data.totalRecovered.replace(/,/g, '').replace(/\+/g, ''));
    const newCases = parseFloat(data.totalNewCases.replace(/,/g, '').replace(/\+/g, ''));
    const newDeaths = parseFloat(data.totalNewDeaths.replace(/,/g, '').replace(/\+/g, ''));

  const [casesHov, setCasesHov] = useState(false);
  const [deathsHov, setDeathsHov] = useState(false);
  const [recoveredHov, setRecoveredHov] = useState(false);
  const [healthyHov, setHealthyHov] = useState(false);


  let isDeathsHov = function() {
    setDeathsHov(!deathsHov);
}

let isCasesHov = function() {
    setCasesHov(!casesHov);
}

let isRecoveredHov = function() {
    setRecoveredHov(!recoveredHov);
}

let isHealthyHov = function() {
    setHealthyHov(!healthyHov);

}


    
    const pop = 328200000;

    const healthy = pop - (recovered + cases + deaths);
    const slices = [
        { percent: deaths / pop, color: '#161927', name: 'deaths', state: deathsHov, key: 1, func: isDeathsHov },
        { percent: cases / pop, color: '#525A8E', name: 'cases' ,  state: casesHov, key: 2, func: isCasesHov },
        { percent: recovered / pop, color: '#7D87B5', name: 'recovered', state: recoveredHov, key: 3, func: isRecoveredHov  },
        { percent: healthy / pop, color: '#A4ABCB', name: 'healthy', state: healthyHov, key: 4, func: isHealthyHov }
      ];

    let cumulativePercent = 0;

    function getCoordinatesForPercent(percent) {
        const x = Math.cos(2 * Math.PI * percent);
        const y = Math.sin(2 * Math.PI * percent);
        return [x, y];
    }
    let paths = [];

    slices.forEach(slice => {
        // destructuring assignment sets the two variables at once
        const [startX, startY] = getCoordinatesForPercent(cumulativePercent);
        
        // each slice starts where the last slice ended, so keep a cumulative percent
        cumulativePercent += slice.percent;
        
        const [endX, endY] = getCoordinatesForPercent(cumulativePercent);
      
        // if the slice is more than 50%, take the large arc (the long way around)
        const largeArcFlag = slice.percent > .5 ? 1 : 0;
      
          // create an array and join it just for code readability
        const pathData = [
          `M ${startX} ${startY}`, // Move
          `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`, // Arc
          `L 0 0`, // Line
        ].join(' ');
      
        // create a <path> and append it to the <svg> element
        let path = <path className={`${slice.name}-slice ${slice.name}-hov`} d={pathData} onMouseEnter={slice.func} onMouseLeave={slice.func} key={slice.key} fill={slice.state ? 'white' : slice.color}></path>;
        paths.push(path);

    });



    const styles = { 
        transform: `rotate(-90deg)` 
    };

    return (
        <div className="totals-page">
            <h1>U.S. Total Numbers</h1>
            <h3>{date}</h3>
            <div className="totals-data">
                <div className="totals">
                    <div><h2>Totals</h2></div>   
                    <div className="overalls-div">
                        <div className="overalls deaths-div deaths-hov" style={{transform: deathsHov ? 'scale(1.05)' : 'scale(1)'}} onMouseEnter={isDeathsHov} onMouseLeave={isDeathsHov}><div className="pointer-none"><h3><span>Deaths:</span> {deathsStr}</h3></div></div>            
                        <div className="overalls cases-div cases-hov"  style={{transform: casesHov ? 'scale(1.05)' : 'scale(1)'}} onMouseOver={isCasesHov} onMouseLeave={isCasesHov}><div className="pointer-none"><h3><span>Cases:</span> {casesStr}</h3></div></div>            
                        <div className="overalls recovered-div recovered-hov"  style={{transform: recoveredHov ? 'scale(1.05)' : 'scale(1)'}} onMouseOver={isRecoveredHov} onMouseLeave={isRecoveredHov}><div className="pointer-none"><h3><span>Recovered:</span> {recoveredStr}</h3></div></div>  
                        <div className="overalls healthy-div healthy-hov"  style={{transform: healthyHov ? 'scale(1.05)' : 'scale(1)'}} onMouseOver={isHealthyHov} onMouseLeave={isHealthyHov}><div className="pointer-none"><h3><span>Healthy:</span> ~{healthy}</h3></div></div>     
                    </div>
                    <svg viewBox="-1 -1 2 2" style={styles}>
                        {paths}
                    </svg>
                </div>
                <div  className="daily">
                    <div><h2>Today's Numbers</h2></div>   
                    <div className="overalls daily-div"><h3><span>New Cases:</span> {newCasesStr}</h3></div>            
                    <div className="overalls daily-div"><h3><span>New Deaths:</span> {newDeathsStr}</h3></div>
                </div>
            </div>
            
        </div>
    )
}
