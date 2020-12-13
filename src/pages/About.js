import React from 'react'

export default function About() {
    return (
        <div className="about-page">
            <div className="about-container">
            <h1>About the Data</h1>
            <p>All data is sourced from Worldometers Coronavirus tracking. You can find their U.S. COVID-19 data <a href="https://www.worldometers.info/coronavirus/country/us/">here</a>. 
             Data is updated roughly every 30 minutes. If you wish to view the latest data, simply reload this site. These data visualizations were created to
            put the COVID-19 numbers into a visual context. The Coronavirus pandemic is raging on, and it is important that everyone is informed about the 
            gravity of the situation. <span>Wear a mask. Social distance. Stay safe.</span></p>
            </div>
            
        </div>
    )
}
