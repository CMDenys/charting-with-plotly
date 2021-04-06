
// --------------MetaData------------------/////
function buildMetaData(sampleID) {
  // read in json file using d3
  d3.json("samples.json").then((data) => {
      console.log(data)
      var metaData = data.metadata
      
      //filter metadata for selected ID on dropdown and parse string argument to return integer.
      var sampleOutput = metaData.filter(x => x.id  === parseInt(sampleID));
      var result = sampleOutput[0]
      var panel = d3.select("#sample-metadata")
      
      //clear data in html
      panel.html("")
      
      // append and add id to the dropdown menu
      Object.entries(result).forEach(([key,value])=> {
          panel.append("h6").text(`${key.toUpperCase()} : ${value}`);
      })
  })
}  
  
  ///// ----------- BAR CHART ----------------/////

function buildChart(sampleID) {
    // read in json file using d3
  d3.json("samples.json").then((data) => {
      //filter into samples array and set the sampleID equal to id
      var idSamp = data.samples.filter(x => parseInt(x.id) === parseInt(sampleID))
  
      //index into the first element and set range for first 10 sample values
      var sampValues = idSamp[0].sample_values.slice(0,10)
      //reverse the order
      sampValues = sampValues.reverse()
        //index into the first element and set range for first 10 otu values
      var otuValues = idSamp[0].otu_ids.slice(0,10)
      //reverse the order
      otuValues = otuValues.reverse()
      //create a single OTU count and script for y axis.
      var singOTUValue = otuValues.map(x => `OTU ${x}`)
      
      //create trace
      var trace = {
          x: sampValues,
          y: singOTUValue,
          mode: "markers",
          marker: {size:10},
          text: singOTUValue,
          type: "bar",
          orientation: "h"
        };

        //set trace equal to data(1)
        var data1 = [trace];
        var layout = {
            title: `Top 10 OTUs Found in ID ${sampleID}`,
            xaxis: { title: "Sample Values" },
            yaxis: { title: "OTU IDs" },
        };

        //plot chart
        Plotly.newPlot("bar", data1, layout)

  })
}
  /// ----------- Bubble Chart----------------/////
function buildBubble(sampleID) {
  // read in json file using d3
  d3.json("samples.json").then((data) => {
      //filter the id from samples array
      var idSamp = data.samples.filter(x => (parseInt(x.id)) === parseInt(sampleID))
      //index into the first element of sample_values
      var indivSampValue = idSamp[0].sample_values
      //index into the first element of sample_values
      var indivOtuValue = idSamp[0].otu_ids

      //create trace
      var trace1 = {
      x: indivSampValue,
      y: indivOtuValue,
      mode: 'markers',
      marker: {
          size: indivSampValue,
          color: indivOtuValue
      },
      text: indivOtuValue
      };
      
      //set trace1 = to data(2)
      var data2 = [trace1];
      
      //set layout
      var layout = {
      title: "OTU ID",
      showlegend: false,
      height: 600,
      width: 1000
      };
      //plot grapth
      Plotly.newPlot("bubble", data2, layout);
  })    
}
  

///// --------------Drop Down Menu------------------/////
function optionChanged(sampleID) {
  
  //when optionChanged is initiated, call the following functions:
  buildMetaData(sampleID)
  buildChart(sampleID)
  buildBubble(sampleID)
}
//create new object / initialize
function init() {
  // read in json file using d3
  d3.json("samples.json").then((data) => {
      //clear existing data
      d3.select("#selDataset").html(""); 
      var metaData = data.metadata
      //append values for selected id key and values
      metaData.forEach(x => {d3.select ("#selDataset").append('option').attr('value', x.id).text(x.id);
      });
      //set sample ID equal to selected value
      sampleID = d3.select("#selDataset").node().value 
      //run functions for new sampleID
      buildMetaData(sampleID)
      buildChart(sampleID)
      buildBubble(sampleID)
  });

}
init()
