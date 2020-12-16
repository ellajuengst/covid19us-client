import { ResponsiveBar } from '@nivo/bar';

import React, { useState, useEffect, useContext } from "react";
import { UsersContext } from '../UsersProvider';

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

let getColor = (bar) => {
    if (bar.id == 'deaths') {
        if (bar.value > 18000) {
            return '#161927'
        } else if (bar.value > 7000) {
            return '#34395B';
        } else if (bar.value > 4000) {
            return '#525A8E';
        } else if (bar.value > 2000) {
            return '#7D87B5';
        } else {
            return '#A4ABCB';
        }
    } else if (bar.id == 'Deaths Per 100,000 People') {
        if (bar.value > 150) {
            return '#161927'
        } else if (bar.value > 100) {
            return '#34395B';
        } else if (bar.value > 80) {
            return '#525A8E';
        } else if (bar.value > 40) {
            return '#7D87B5';
        } else {
            return '#A4ABCB';
        }
    } else if (bar.id == 'New Cases Per 100,000 People') {
        if (bar.value > 100) {
            return '#161927'
        } else if (bar.value > 80) {
            return '#34395B';
        } else if (bar.value > 60) {
            return '#525A8E';
        } else if (bar.value > 40) {
            return '#7D87B5';
        } else {
            return '#A4ABCB';
        }
    } else if (bar.id == 'New Cases') {
        if (bar.value > 10000) {
            return '#161927'
        } else if (bar.value > 5000) {
            return '#34395B';
        } else if (bar.value > 3000) {
            return '#525A8E';
        } else if (bar.value > 1000) {
            return '#7D87B5';
        } else {
            return '#A4ABCB';
        }
    } else if (bar.id == 'New Deaths') {
        if (bar.value > 110) {
            return '#161927'
        } else if (bar.value > 90) {
            return '#34395B';
        } else if (bar.value > 70) {
            return '#525A8E';
        } else if (bar.value > 50) {
            return '#7D87B5';
        } else {
            return '#A4ABCB';
        }
    } else if (bar.id == 'New Deaths Per 100,000 People') {
        if (bar.value > 4) {
            return '#161927'
        } else if (bar.value > 3) {
            return '#34395B';
        } else if (bar.value > 2) {
            return '#525A8E';
        } else if (bar.value > 1) {
            return '#7D87B5';
        } else {
            return '#A4ABCB';
        }
    }
    
    
}

const MyResponsiveBar = ( props /* see data tab */ ) => (
    <ResponsiveBar
        data={props.data}
        keys={props.keys}
        indexBy="name"
        margin={{ top: 20, right: 120, bottom: 20, left: 120 }}
        padding={0.3}
        groupMode="grouped"
        layout="horizontal"
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={getColor}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'fries'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'sandwich'
                },
                id: 'lines'
            }
        ]}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={'#FFFFFF'}
        
        animate={true}
        motionStiffness={90}
        motionDamping={15}
    />
)


export default MyResponsiveBar;