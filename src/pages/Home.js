import React from 'react'
import covid from '../assets/covid.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
    return (
        <div className="row p-5 m-2 home">
            <div className="col-lg-6 p-3 col-md-12 title">
                <h1><span>COVID-19</span> U.S.</h1>
                <h2>View the latest COVID-19 numbers in data visualization format. </h2>
            </div>
            <div className="col-lg-6 p-3 col-md-12 covid-div">
                <img src={covid} alt={'covid-image'}></img>
            </div>
        </div>


    )
}
