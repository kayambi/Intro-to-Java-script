console.log(data);
// YOUR CODE HERE
let trace1 = {
    x: data.map(row => row.pair),
    y: data.map(row => row.greekSearchResults),
    text: data.map(row => row.greekName),
    name: "Greek",
    marker: {
        color: 'green'
    },
    type: "bar"
}

let trace2 = {
    x: data.map(row => row.pair),
    y: data.map(row => row.romanSearchResults),
    text: data.map(row => row.romanName),
    name: "Roman",
    marker: {
        color: 'red',
        size: 20,
        line: {
            color: "red",
            width:2
        }
    },
    type: 'scatter'
};
let data2 = [trace1, trace2];
let layout = {
    title: "Greek vs. Roman gods search results",
    barmode: "group",
    font: {
        family: 'Raleway, sans-serif',
    },
    yaxis: {
        title: 'Axis title',
        titlefont: {
            family: 'Arial sans-serif',
            size:16,
            color: 'lightgrey'
        }
    },
    xaxis: {
        title: "Axis Title",
        tickangle: 45,
        tickfont: {
            size: 10,
            color: 'black'
        }
    },
    showlegend: true,
    bargap: 0.05
}

Plotly.newPlot('plot', data2, layout)


