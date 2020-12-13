import React from "react";
import { useState, useEffect } from "react";


export const UsersContext = React.createContext();

export const UsersProvider = props => {

  const [arr, setArr] = useState([]);
  const [totalCases, setTotalCases] = useState([]);
  const [totalDeaths, setTotalDeaths] = useState([]);
  const [totalRecovered, setTotalRecovered] = useState([]);
  const [totalNewCases, setTotalNewCases] = useState([]);
  const [totalNewDeaths, setTotalNewDeaths] = useState([]);
  const [date, setDate] = useState([]);


  const getUsers = async () => { 
      const res = await fetch('http://localhost:4000/info');
      let data = await res.json();
      setTotalCases(data.totalCases);
      setTotalDeaths(data.totalDeaths);
      setTotalRecovered(data.totalRecovered);
      setTotalNewCases(data.totalNewCases);
      setTotalNewDeaths(data.totalNewDeaths);
      setDate(data.date);


      let dataArr = data.arr.slice(1);
      let arr = [];

      dataArr.forEach((state) => {
          let obj = {name: state.name, cases: state.cases, deaths: state.deaths, newCases: state.newCases, newDeaths: state.newDeaths};
          arr.push(obj);
      })
      setArr(arr);
  };


  useEffect(() => {
    getUsers();
}, []);

   
let reformatted_arr = arr.map((state) => {
  let cases = parseFloat(state.cases.replace(/,/g, ''));
  let deaths = parseFloat(state.deaths.replace(/,/g, ''));
  let newCases = parseFloat(state.newCases.replace(/,/g, '').replace(/\+/g, ''));
  let newDeaths = parseFloat(state.newDeaths.replace(/,/g, '').replace(/\+/g, ''));

  return {name: state.name, cases: cases, casesStr: state.cases, deaths: deaths, deathsStr: state.deaths, 
    newCases: newCases, newCasesStr: state.newCases, newDeaths: newDeaths, newDeathsStr: state.newDeaths }
})

let maxCases = Math.max.apply(Math, reformatted_arr.map(function(state) { return state.cases; }))

let maxDeaths = Math.max.apply(Math, reformatted_arr.map(function(state) { return state.deaths; }))


let maxNewCases = Math.max.apply(Math, reformatted_arr.map(function(state) { return state.newCases; }))

let maxNewDeaths = Math.max.apply(Math, reformatted_arr.map(function(state) { return state.newDeaths; }))



if (arr.length == 0) { 
    return <div className="loading">Fetching latest data...</div>
}


let obj = {
  arr: reformatted_arr,
  date: date,
  totalCases: totalCases,
  totalDeaths: totalDeaths,
  totalRecovered: totalRecovered,
  totalNewCases: totalNewCases,
  totalNewDeaths: totalNewDeaths,
  maxCases: maxCases,
  maxDeaths: maxDeaths,
  maxNewCaes: maxNewCases,
  maxNewDeaths: maxNewDeaths
}

  return (
    <UsersContext.Provider value={obj}>
      {props.children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;