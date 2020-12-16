import React, { useState, useEffect, useContext } from "react";
import Bar from "../components/bar";
import MyResponsiveBar from '../components/nivo-bar';

import { UsersContext } from '../UsersProvider';


export default function NewCases() {
    const data = useContext(UsersContext);

    let arr = [...data.arr];


    let reformatted_arr = arr.map((state) => {
        let cases;
        if (Number.isNaN(state.newCases)) {
            cases = 0;
        } else {
            cases = state.newCases;
        }
        return {
            "name": state.name,
            "New Cases": cases,
            "newCases": cases,
            "pop": state.pop,
            "New Cases Per 100,000 People": Math.round((cases / state.pop) * 100000),
            "NewCasesPerCapita": Math.round((cases / state.pop) * 100000)
        }
    })

    console.log(reformatted_arr);

    const date = data.date;

  
    


    

    reformatted_arr = reformatted_arr.sort((a, b) => {
       return a.newCases-b.newCases;
    })

    let perCapita = [...reformatted_arr]
    perCapita = perCapita.sort((a, b) => {
        return (a.NewCasesPerCapita-b.NewCasesPerCapita);
    })

    return (
        


        <div className="new-cases-page">
            <h1>New Cases Per 100,000 People</h1>
            <h3>{date}</h3>
            <h4>Note: If no number is shown, new numbers for this state have not been reported yet today.</h4>

            <div className="deaths-set">
                <div className="container-bar-new">
        
                    <MyResponsiveBar data={perCapita} keys={[ 'New Cases Per 100,000 People' ]}/>

                </div>
            </div>

            <h1>Total New Cases</h1>
            <h3>{date}</h3>
            <h4>Note: If no number is shown, new numbers for this state have not been reported yet today.</h4>

            <div className="deaths-set">
                <div className="deaths-set">
                    <div className="container-bar-new">
            
                        <MyResponsiveBar data={reformatted_arr} keys={[ 'New Cases' ]}/>

                    </div>
                </div>
            </div>
        </div>
       
    )
}
