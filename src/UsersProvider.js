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

  let state_populations = [
    {
      "rank": 1,
      "State": "California",
      "Pop": 39937500,
      "Growth": "0.0096",
      "Pop2018": 39557000,
      "Pop2010": 37320900,
      "growthSince2010": "0.0701",
      "Percent": "0.1194",
      "density": "256.3728"
    },
    {
      "rank": 2,
      "State": "Texas",
      "Pop": 29472300,
      "Growth": "0.0268",
      "Pop2018": 28701800,
      "Pop2010": 25242700,
      "growthSince2010": "0.1676",
      "Percent": "0.0881",
      "density": "112.8204"
    },
    {
      "rank": 3,
      "State": "Florida",
      "Pop": 21993000,
      "Growth": "0.0326",
      "Pop2018": 21299300,
      "Pop2010": 18845800,
      "growthSince2010": "0.1670",
      "Percent": "0.0658",
      "density": "410.1259"
    },
    {
      "rank": 4,
      "State": "New York",
      "Pop": 19440500,
      "Growth": "-0.0052",
      "Pop2018": 19542200,
      "Pop2010": 19400100,
      "growthSince2010": "0.0021",
      "Percent": "0.0581",
      "density": "412.5218"
    },
    {
      "rank": 5,
      "State": "Pennsylvania",
      "Pop": 12820900,
      "Growth": "0.0011",
      "Pop2018": 12807100,
      "Pop2010": 12711200,
      "growthSince2010": "0.0086",
      "Percent": "0.0383",
      "density": "286.5454"
    },
    {
      "rank": 6,
      "State": "Illinois",
      "Pop": 12659700,
      "Growth": "-0.0064",
      "Pop2018": 12741100,
      "Pop2010": 12840800,
      "growthSince2010": "-0.0141",
      "Percent": "0.0379",
      "density": "228.0246"
    },
    {
      "rank": 7,
      "State": "Ohio",
      "Pop": 11747700,
      "Growth": "0.0050",
      "Pop2018": 11689400,
      "Pop2010": 11539300,
      "growthSince2010": "0.0181",
      "Percent": "0.0351",
      "density": "287.5040"
    },
    {
      "rank": 8,
      "State": "Georgia",
      "Pop": 10736100,
      "Growth": "0.0206",
      "Pop2018": 10519500,
      "Pop2010": 9711810,
      "growthSince2010": "0.1055",
      "Percent": "0.0321",
      "density": "186.6726"
    },
    {
      "rank": 9,
      "State": "North Carolina",
      "Pop": 10611900,
      "Growth": "0.0220",
      "Pop2018": 10383600,
      "Pop2010": 9574290,
      "growthSince2010": "0.1084",
      "Percent": "0.0317",
      "density": "218.2710"
    },
    {
      "rank": 10,
      "State": "Michigan",
      "Pop": 10045000,
      "Growth": "0.0049",
      "Pop2018": 9995920,
      "Pop2010": 9877540,
      "growthSince2010": "0.0170",
      "Percent": "0.0300",
      "density": "177.6650"
    },
    {
      "rank": 11,
      "State": "New Jersey",
      "Pop": 8936570,
      "Growth": "0.0031",
      "Pop2018": 8908520,
      "Pop2010": 8799620,
      "growthSince2010": "0.0156",
      "Percent": "0.0267",
      "density": "1215.1985"
    },
    {
      "rank": 12,
      "State": "Virginia",
      "Pop": 8626210,
      "Growth": "0.0127",
      "Pop2018": 8517680,
      "Pop2010": 8023680,
      "growthSince2010": "0.0751",
      "Percent": "0.0258",
      "density": "218.4404"
    },
    {
      "rank": 13,
      "State": "Washington",
      "Pop": 7797100,
      "Growth": "0.0347",
      "Pop2018": 7535590,
      "Pop2010": 6742900,
      "growthSince2010": "0.1563",
      "Percent": "0.0233",
      "density": "117.3273"
    },
    {
      "rank": 14,
      "State": "Arizona",
      "Pop": 7378490,
      "Growth": "0.0288",
      "Pop2018": 7171650,
      "Pop2010": 6407770,
      "growthSince2010": "0.1515",
      "Percent": "0.0221",
      "density": "64.9549"
    },
    {
      "rank": 15,
      "State": "Massachusetts",
      "Pop": 6976600,
      "Growth": "0.0108",
      "Pop2018": 6902150,
      "Pop2010": 6566430,
      "growthSince2010": "0.0625",
      "Percent": "0.0209",
      "density": "894.4359"
    },
    {
      "rank": 16,
      "State": "Tennessee",
      "Pop": 6897580,
      "Growth": "0.0188",
      "Pop2018": 6770010,
      "Pop2010": 6355300,
      "growthSince2010": "0.0853",
      "Percent": "0.0206",
      "density": "167.2749"
    },
    {
      "rank": 17,
      "State": "Indiana",
      "Pop": 6745350,
      "Growth": "0.0080",
      "Pop2018": 6691880,
      "Pop2010": 6490440,
      "growthSince2010": "0.0393",
      "Percent": "0.0202",
      "density": "188.2809"
    },
    {
      "rank": 18,
      "State": "Missouri",
      "Pop": 6169270,
      "Growth": "0.0070",
      "Pop2018": 6126450,
      "Pop2010": 5995980,
      "growthSince2010": "0.0289",
      "Percent": "0.0185",
      "density": "89.7453"
    },
    {
      "rank": 19,
      "State": "Maryland",
      "Pop": 6083120,
      "Growth": "0.0067",
      "Pop2018": 6042720,
      "Pop2010": 5788640,
      "growthSince2010": "0.0509",
      "Percent": "0.0182",
      "density": "626.6735"
    },
    {
      "rank": 20,
      "State": "Wisconsin",
      "Pop": 5851750,
      "Growth": "0.0066",
      "Pop2018": 5813570,
      "Pop2010": 5690480,
      "growthSince2010": "0.0283",
      "Percent": "0.0175",
      "density": "108.0496"
    },
    {
      "rank": 21,
      "State": "Colorado",
      "Pop": 5845530,
      "Growth": "0.0263",
      "Pop2018": 5695560,
      "Pop2010": 5048280,
      "growthSince2010": "0.1579",
      "Percent": "0.0175",
      "density": "56.4012"
    },
    {
      "rank": 22,
      "State": "Minnesota",
      "Pop": 5700670,
      "Growth": "0.0159",
      "Pop2018": 5611180,
      "Pop2010": 5310840,
      "growthSince2010": "0.0734",
      "Percent": "0.0170",
      "density": "71.5922"
    },
    {
      "rank": 23,
      "State": "South Carolina",
      "Pop": 5210100,
      "Growth": "0.0248",
      "Pop2018": 5084130,
      "Pop2010": 4635660,
      "growthSince2010": "0.1239",
      "Percent": "0.0156",
      "density": "173.3176"
    },
    {
      "rank": 24,
      "State": "Alabama",
      "Pop": 4908620,
      "Growth": "0.0042",
      "Pop2018": 4887870,
      "Pop2010": 4785450,
      "growthSince2010": "0.0257",
      "Percent": "0.0147",
      "density": "96.9221"
    },
    {
      "rank": 25,
      "State": "Louisiana",
      "Pop": 4645180,
      "Growth": "-0.0032",
      "Pop2018": 4659980,
      "Pop2010": 4544530,
      "growthSince2010": "0.0221",
      "Percent": "0.0139",
      "density": "107.5174"
    },
    {
      "rank": 26,
      "State": "Kentucky",
      "Pop": 4499690,
      "Growth": "0.0070",
      "Pop2018": 4468400,
      "Pop2010": 4348200,
      "growthSince2010": "0.0348",
      "Percent": "0.0135",
      "density": "113.9566"
    },
    {
      "rank": 27,
      "State": "Oregon",
      "Pop": 4301090,
      "Growth": "0.0263",
      "Pop2018": 4190710,
      "Pop2010": 3837530,
      "growthSince2010": "0.1208",
      "Percent": "0.0129",
      "density": "44.8086"
    },
    {
      "rank": 28,
      "State": "Oklahoma",
      "Pop": 3954820,
      "Growth": "0.0030",
      "Pop2018": 3943080,
      "Pop2010": 3759630,
      "growthSince2010": "0.0519",
      "Percent": "0.0118",
      "density": "57.6546"
    },
    {
      "rank": 29,
      "State": "Connecticut",
      "Pop": 3563080,
      "Growth": "-0.0027",
      "Pop2018": 3572660,
      "Pop2010": 3579120,
      "growthSince2010": "-0.0045",
      "Percent": "0.0107",
      "density": "735.8695"
    },
    {
      "rank": 30,
      "State": "Utah",
      "Pop": 3282120,
      "Growth": "0.0383",
      "Pop2018": 3161100,
      "Pop2010": 2775330,
      "growthSince2010": "0.1826",
      "Percent": "0.0098",
      "density": "39.9430"
    },
    {
      "rank": 31,
      "State": "Iowa",
      "Pop": 3179850,
      "Growth": "0.0075",
      "Pop2018": 3156140,
      "Pop2010": 3050770,
      "growthSince2010": "0.0423",
      "Percent": "0.0095",
      "density": "56.9284"
    },
    {
      "rank": 32,
      "State": "Nevada",
      "Pop": 3139660,
      "Growth": "0.0347",
      "Pop2018": 3034390,
      "Pop2010": 2702460,
      "growthSince2010": "0.1618",
      "Percent": "0.0094",
      "density": "28.5993"
    },
    {
      "rank": 33,
      "State": "Arkansas",
      "Pop": 3039000,
      "Growth": "0.0084",
      "Pop2018": 3013820,
      "Pop2010": 2921980,
      "growthSince2010": "0.0400",
      "Percent": "0.0091",
      "density": "58.4030"
    },
    {
      "rank": 34,
      "State": "Puerto Rico",
      "Pop": 3032160,
      "Growth": "-0.0510",
      "Pop2018": 3195150,
      "Pop2010": 3721520,
      "growthSince2010": "-0.1852",
      "Percent": "0.0091",
      "density": "876.6002"
    },
    {
      "rank": 35,
      "State": "Mississippi",
      "Pop": 2989260,
      "Growth": "0.0009",
      "Pop2018": 2986530,
      "Pop2010": 2970540,
      "growthSince2010": "0.0063",
      "Percent": "0.0089",
      "density": "63.7056"
    },
    {
      "rank": 36,
      "State": "Kansas",
      "Pop": 2910360,
      "Growth": "-0.0004",
      "Pop2018": 2911500,
      "Pop2010": 2858210,
      "growthSince2010": "0.0182",
      "Percent": "0.0087",
      "density": "35.5968"
    },
    {
      "rank": 37,
      "State": "New Mexico",
      "Pop": 2096640,
      "Growth": "0.0006",
      "Pop2018": 2095430,
      "Pop2010": 2064590,
      "growthSince2010": "0.0155",
      "Percent": "0.0063",
      "density": "17.2850"
    },
    {
      "rank": 38,
      "State": "Nebraska",
      "Pop": 1952570,
      "Growth": "0.0121",
      "Pop2018": 1929270,
      "Pop2010": 1829540,
      "growthSince2010": "0.0672",
      "Percent": "0.0058",
      "density": "25.4161"
    },
    {
      "rank": 39,
      "State": "Idaho",
      "Pop": 1826160,
      "Growth": "0.0410",
      "Pop2018": 1754210,
      "Pop2010": 1570770,
      "growthSince2010": "0.1626",
      "Percent": "0.0055",
      "density": "22.0970"
    },
    {
      "rank": 40,
      "State": "West Virginia",
      "Pop": 1778070,
      "Growth": "-0.0154",
      "Pop2018": 1805830,
      "Pop2010": 1854210,
      "growthSince2010": "-0.0411",
      "Percent": "0.0053",
      "density": "73.9691"
    },
    {
      "rank": 41,
      "State": "Hawaii",
      "Pop": 1412690,
      "Growth": "-0.0055",
      "Pop2018": 1420490,
      "Pop2010": 1363960,
      "growthSince2010": "0.0357",
      "Percent": "0.0042",
      "density": "219.9424"
    },
    {
      "rank": 42,
      "State": "New Hampshire",
      "Pop": 1371250,
      "Growth": "0.0109",
      "Pop2018": 1356460,
      "Pop2010": 1316780,
      "growthSince2010": "0.0414",
      "Percent": "0.0041",
      "density": "153.1610"
    },
    {
      "rank": 43,
      "State": "Maine",
      "Pop": 1345790,
      "Growth": "0.0055",
      "Pop2018": 1338400,
      "Pop2010": 1327630,
      "growthSince2010": "0.0137",
      "Percent": "0.0040",
      "density": "43.6336"
    },
    {
      "rank": 44,
      "State": "Montana",
      "Pop": 1086760,
      "Growth": "0.0230",
      "Pop2018": 1062300,
      "Pop2010": 990722,
      "growthSince2010": "0.0969",
      "Percent": "0.0033",
      "density": "7.4668"
    },
    {
      "rank": 45,
      "State": "Rhode Island",
      "Pop": 1056160,
      "Growth": "-0.0011",
      "Pop2018": 1057320,
      "Pop2010": 1053940,
      "growthSince2010": "0.0021",
      "Percent": "0.0032",
      "density": "1021.4313"
    },
    {
      "rank": 46,
      "State": "Delaware",
      "Pop": 982895,
      "Growth": "0.0163",
      "Pop2018": 967171,
      "Pop2010": 899595,
      "growthSince2010": "0.0926",
      "Percent": "0.0029",
      "density": "504.3073"
    },
    {
      "rank": 47,
      "State": "South Dakota",
      "Pop": 903027,
      "Growth": "0.0236",
      "Pop2018": 882235,
      "Pop2010": 816165,
      "growthSince2010": "0.1064",
      "Percent": "0.0027",
      "density": "11.9116"
    },
    {
      "rank": 48,
      "State": "North Dakota",
      "Pop": 761723,
      "Growth": "0.0022",
      "Pop2018": 760077,
      "Pop2010": 674710,
      "growthSince2010": "0.1290",
      "Percent": "0.0023",
      "density": "11.0393"
    },
    {
      "rank": 49,
      "State": "Alaska",
      "Pop": 734002,
      "Growth": "-0.0047",
      "Pop2018": 737438,
      "Pop2010": 713906,
      "growthSince2010": "0.0281",
      "Percent": "0.0022",
      "density": "1.2863"
    },
    {
      "rank": 50,
      "State": "District Of Columbia",
      "Pop": 720687,
      "Growth": "0.0260",
      "Pop2018": 702455,
      "Pop2010": 605085,
      "growthSince2010": "0.1911",
      "Percent": "0.0022",
      "density": "11814.5410"
    },
    {
      "rank": 51,
      "State": "Vermont",
      "Pop": 628061,
      "Growth": "0.0028",
      "Pop2018": 626299,
      "Pop2010": 625880,
      "growthSince2010": "0.0035",
      "Percent": "0.0019",
      "density": "68.1416"
    },
    {
      "rank": 52,
      "State": "Wyoming",
      "Pop": 567025,
      "Growth": "-0.0185",
      "Pop2018": 577737,
      "Pop2010": 564483,
      "growthSince2010": "0.0045",
      "Percent": "0.0017",
      "density": "5.8400"
    }
  ];
  

  const getUsers = async () => { 
      const res = await fetch('https://covid19us-server.herokuapp.com/info');
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
          let pop = state_populations.find(obj => {
            return obj.State == state.name;
          })
          
          let obj = {name: state.name, cases: state.cases, deaths: state.deaths, newCases: state.newCases, newDeaths: state.newDeaths, pop: pop.Pop};
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
    newCases: newCases, newCasesStr: state.newCases, newDeaths: newDeaths, newDeathsStr: state.newDeaths, pop: state.pop }
})

let maxCases = Math.max.apply(Math, reformatted_arr.map(function(state) { return state.cases; }))

let maxDeaths = Math.max.apply(Math, reformatted_arr.map(function(state) { return state.deaths; }))


let maxNewCases = Math.max.apply(Math, reformatted_arr.map(function(state) { return state.newCases; }))

let maxNewDeaths = Math.max.apply(Math, reformatted_arr.map(function(state) { return state.newDeaths; }))



if (arr.length == 0) { 
    return <div className="loading"><div>Fetching latest data...</div><div>(This may take a second)</div></div>
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