import React, { useState, useEffect, useContext } from "react";
import Circle from "../components/Circle";
import { UsersContext } from '../UsersProvider';
import MyResponsiveCircleTotal from '../components/nivo-total-circle';
import MyResponsiveCircleCap from '../components/nivo-cap-circle';


export default function CasesNivo() {
   
    const data = useContext(UsersContext);

    const arr = [...data.arr];
    const date = data.date;
    const max = data.maxCases;

    let total_arr = arr.map((state) => {
        return {
            "name": state.name,
            "Cases": state.cases,
        }
    })

    let per_cap_arr = arr.map((state) => {
        return {
            "name": state.name,
            "Cases": Math.round((state.cases / state.pop) * 100000),
            "pop": state.pop,
            "Cases Per 100,000 People": Math.round((state.cases / state.pop) * 100000),
            "CasesPerCapita": Math.round((state.cases / state.pop) * 100000)
        }
    })

    per_cap_arr = per_cap_arr.sort((a,b) => {
        return b.CasesPerCapita - a.CasesPerCapita;
    })


   
    let root_total = {
        "name": "root",
        "children": total_arr
    }

    let root_per_cap = {
        "name": "root",
        "children": per_cap_arr
    }

    //let per_cap = [...reformatted_arr]



    return (
        <div className="cases-page">
            <h1>Total Cases Per 100,000 People</h1>
            <h3>{date}</h3>

            <div className="cases-set">
                <MyResponsiveCircleCap data={root_per_cap} value={'Cases Per 100,000 People'} c={false}/>     
            </div>
            <h1>Total Cases</h1>
            <h3>{date}</h3>
            <div className="cases-set">
                <MyResponsiveCircleTotal data={root_total} value={'Cases'} c={true}/>     
            </div>
        </div>
        
    )
}


// {arr.map((state, index) => (
//     <Circle data={state} max={max} key={index}/>
// ))}   