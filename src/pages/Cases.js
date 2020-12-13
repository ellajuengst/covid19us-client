import React, { useState, useEffect, useContext } from "react";
import Circle from "../components/Circle";
import { UsersContext } from '../UsersProvider';


export default function Cases() {
   
    const data = useContext(UsersContext);

    const arr = [...data.arr];
    const date = data.date;
    const max = data.maxCases;

    if (arr.length == 0) { 
        return <div className="loading">Fetching latest data...</div>
    }

    return (
        <div className="cases-page">
            <h1>Total Cases Per State</h1>
            <h3>{date}</h3>

            <div className="cases-set">
                    {arr.map((state, index) => (
                        <Circle data={state} max={max} key={index}/>
                    ))}     
            </div>
        </div>
        
    )
}
