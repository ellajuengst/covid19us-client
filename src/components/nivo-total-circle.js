import { ResponsiveBubble } from '@nivo/circle-packing'
import React, { useState, useEffect, useContext } from "react";
import { UsersContext } from '../UsersProvider';




let getColor = (circle) => {

    if (circle.Cases > 600000) {
        return '#161927'
    } else if (circle.Cases > 400000) {
        return '#34395B';
    } else if (circle.Cases > 200000) {
        return '#525A8E';
    } else if (circle.Cases > 100000) {
        return '#7D87B5';
    } else {
        return '#A4ABCB';
    }
}

let getTextColor = (circle) => {
   
        if (circle.r < 40 && circle.color !="rgb(22,25,39)") {
            return '#161927'
        } else {
            return '#fff'
        }
    
}



const MyResponsiveBubble = (props) => (
    <ResponsiveBubble
        root={props.data}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        identity="name"
        value={props.value}
        colors={getColor}
        leavesOnly={true}
        padding={10}
        labelTextColor={getTextColor}
        borderColor={{ from: 'color' }}

        animate={true}
        motionStiffness={90}
        motionDamping={12}
    />
)


export default MyResponsiveBubble;