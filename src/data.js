export async function loadCases() {
    const res = await fetch('http://localhost:4000/cases');
    let data = await res.json();
    data = data.slice(1);
    let arr = [];
    data.forEach((state, index) => {
        let str = createSVG(state, index);
        arr.push(str);
    })
}


async function loadDeaths() {
    const res = await fetch('http://localhost:4000/deaths');
    let data = await res.json();
    data = data.slice(1);
    return data;
}

async function loadNewCases() {
    const res = await fetch('http://localhost:4000/new-cases');
    let data = await res.json();
    data = data.slice(1);
    return data;
}

async function loadNewDeaths() {
    const res = await fetch('http://localhost:4000/new-deaths');
    let data = await res.json();
    data = data.slice(1);
    return data;
}


function createSVG(state, index, x, y) {
    let name = state.name;
    
    let casesText = state.cases;
    
    let cases = parseFloat(state.cases.replace(/,/g, ''))
    let width = cases / 3500;
    let radius = width / 2;
    let color = '';
    if (width < 20) {
        color = '#A4ABCB';
    } else if (width < 50) {
        color = '#7D87B5';
    } else if (width < 120) {
        color = '#525A8E';
    } else if (width < 200) {
        color = '#34395B';
    } else {
        color = '#161927';
    }
    let inner = '';
   
    if (cases <= 410000) {
        inner = `<svg id="${name}circle" class='circle' height="${width}" width="${width}">
                    <circle  cx="${radius}" cy="${radius}" r="${radius}" stroke="none" fill="${color}" />
                </svg>
                <text  class="name-text" id='${name}' x="50%" y="50%" text-anchor="middle" dy=".3em">${name}</text>
                
                <text class="cases-text" id='${name}cases' x="50%" y="50%" text-anchor="middle"  dy=".3em">${casesText}</text>`;
    } else {
        inner = `<svg id="${name}circle" class='circle' height="${width}" width="${width}">
        
                    <circle  cx="${radius}" cy="${radius}" r="${radius}" stroke="none" fill="${color}" />
                    <text class="text" x="50%" y="50%" text-anchor="middle" fill="#fff" dy=".3em">
                        <tspan class="name-text" x="50%" dy="-8px">${name}</tspan>
                        <tspan class="cases-text" x="50%" dy="20px">${casesText}</tspan>
                    </text>
                 </svg>`;
    }

    return inner;
}




