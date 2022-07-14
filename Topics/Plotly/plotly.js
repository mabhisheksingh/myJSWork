var trace1 = {
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
  type: "scatter",
};

var trace2 = {
  x: [1, 2, 3, 4],
  y: [16, 5, 11, 9],
  type: "scatter",
};

var data = [trace1, trace2];
var layout = {
    // width:980,
    // heigh:350,
    width:500,
    heigh:500,
    margin: {
      l: 30,
      r: 50,
      b: 30,
      t: 100,
      pad: 4
    },
    title:'Line and Scatter Plot'
  };
// Plotly.newPlot("myDiv", data,layout);
Plotly.newPlot("myDiv1", data,layout);
Plotly.newPlot("myDiv2", data,layout);
Plotly.newPlot("myDiv3", data,layout);
// Plotly.newPlot("myDiv4", data,layout);


let elem = document.getElementById('myDiv1');
let rect = elem.getBoundingClientRect();
for (var key in rect) {
  if(typeof rect[key] !== 'function') {
    console.log(" key ",key ," value : ", rect[key]);
  }
}
