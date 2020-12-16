import React, { useState, useEffect, useContext } from "react";
import Bar from "../components/bar";
import { UsersContext } from '../UsersProvider';
import MyResponsiveBar from '../components/nivo-bar';


export default function NewDeaths() {
    const data = useContext(UsersContext);

    let arr = [...data.arr];


    let reformatted_arr = arr.map((state) => {
        let cases;
        if (Number.isNaN(state.newDeaths)) {
            cases = 0;
        } else {
            cases = state.newDeaths;
        }
        return {
            "name": state.name,
            "New Deaths": cases,
            "newDeaths": cases,
            "pop": state.pop,
            "New Deaths Per 100,000 People": Math.round((cases / state.pop) * 100000),
            "NewDeathsPerCapita": Math.round((cases / state.pop) * 100000)
        }
    })

    console.log(reformatted_arr);

    const date = data.date;

  
    


    

    reformatted_arr = reformatted_arr.sort((a, b) => {
       return a.newDeaths-b.newDeaths;
    })

    let perCapita = [...reformatted_arr]
    perCapita = perCapita.sort((a, b) => {
        return (a.NewDeathsPerCapita-b.NewDeathsPerCapita);
    })

    return (
        


        <div className="new-cases-page">
            <h1>New Deaths Per 100,000 People</h1>
            <h3>{date}</h3>
            <h4>Note: If no number is shown, new numbers for this state have not been reported yet today.</h4>

            <div className="deaths-set">
                <div className="container-bar-new">
        
                    <MyResponsiveBar data={perCapita} keys={[ 'New Deaths Per 100,000 People' ]}/>

                </div>
            </div>

            <h1>Total New Deaths</h1>
            <h3>{date}</h3>
            <h4>Note: If no number is shown, new numbers for this state have not been reported yet today.</h4>

            <div className="deaths-set">
                <div className="deaths-set">
                    <div className="container-bar-new">
            
                        <MyResponsiveBar data={reformatted_arr} keys={[ 'New Deaths' ]}/>

                    </div>
                </div>
            </div>
        </div>
       
    )
}
