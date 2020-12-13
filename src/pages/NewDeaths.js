import React, { useState, useEffect, useContext } from "react";
import Bar from "../components/bar";
import { UsersContext } from '../UsersProvider';

export default function NewDeaths() {
    const data = useContext(UsersContext);

    let arr = [...data.arr];
   
    const date = data.date;
    const max = data.maxDeaths;


    if (arr.length == 0) { 
        return <div className="loading">Fetching latest data...</div>
    }

    

    arr = arr.sort((a, b) => {
        let aTemp;
        let bTemp;
        if (Number.isNaN(a.newDeaths)) {
            aTemp = 0;
        } else {
            aTemp = a.newDeaths;
        }
        if (Number.isNaN(b.newDeaths)) {
            bTemp = 0;
        } else {
            bTemp = b.newDeaths;
        }
    
        return (bTemp-aTemp);
    })

    return (
        <div className="new-cases-page">
            <h1>New Deaths Per State</h1>
            <h3>{date}</h3>
            <h4>Note: If no number is shown, new numbers for this state have not been reported yet today.</h4>
            <div className="deaths-set">
                <svg className="chart" viewBox="0 0 1000 2040" preserveAspectRatio="xMinYMin meet" aria-labelledby="title desc" role="img">
                    {arr.map((state, index) => (
                        <Bar name={state.name} max={max} number={state.newDeaths} numberStr={state.newDeathsStr} key={index} index={index}/>
                    ))}
                </svg>     
            </div>
        </div>
       
    )
}
