
import React, { useState, useEffect, useContext } from "react";
import MyResponsiveBar from '../components/nivo-bar';
import { UsersContext } from '../UsersProvider';



export default function Deaths() {

    const data = useContext(UsersContext);

    let arr = [...data.arr];

    let reformatted_arr = arr.map((state) => {
        return {
            "name": state.name,
            "deaths": state.deaths,
            "pop": state.pop,
            "Deaths Per 100,000 People": Math.round((state.deaths / state.pop) * 100000),
            "DeathsPerCapita": Math.round((state.deaths / state.pop) * 100000)


        }
    })

    console.log(reformatted_arr);

    const date = data.date;
    const max = data.maxDeaths;

    reformatted_arr = reformatted_arr.sort((a, b) => {
        return (a.deaths-b.deaths);
    })

    let perCapita = [...reformatted_arr]
    perCapita = perCapita.sort((a, b) => {
        return (a.DeathsPerCapita-b.DeathsPerCapita);
    })


   

    return (
       
        
        <div className="deaths-page">
            <h1>Deaths Per 100,000 People</h1>
            <h3>{date}</h3>

            <div className="deaths-set">
                <div className="container-bar-new">
        
                    <MyResponsiveBar data={perCapita} keys={[ 'Deaths Per 100,000 People' ]}/>

                </div>
            </div>

            <h1>Total Deaths</h1>
            <h3>{date}</h3>

            <div className="deaths-set">
                <div className="deaths-set">
                    <div className="container-bar-new">
            
                        <MyResponsiveBar data={reformatted_arr} keys={[ 'deaths' ]}/>

                    </div>
                </div>
            </div>
        </div>
    )
}