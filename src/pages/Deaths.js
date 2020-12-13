import React, { useState, useEffect, useContext } from "react";
import Bar from "../components/bar";
import { UsersContext } from '../UsersProvider';

export default function Deaths() {
    const data = useContext(UsersContext);

    let arr = [...data.arr];

    const date = data.date;
    const max = data.maxDeaths;
    

    if (arr.length == 0) { 
        return <div className="loading">Fetching latest data...</div>
    }

    arr = arr.sort((a, b) => {
        return (b.deaths-a.deaths);
    })

    
    return (
        <div className="deaths-page">
            <h1>Total Deaths Per State</h1>
            <h3>{date}</h3>

            <div className="deaths-set">
                <svg className="chart" viewBox="0 0 1000 2040" preserveAspectRatio="xMinYMin meet" aria-labelledby="title desc" role="img">
                    {arr.map((state, index) => (
                        <Bar name={state.name} max={max} number={state.deaths} numberStr={state.deathsStr} key={index} index={index}/>
                    ))}
                </svg>     
            </div>
        </div>
       
    )
}
