
    // --------------MetaData------------------/////
    function buildMetaData(sampleID) {


        // sampleID = 940
        d3.json("samples.json").then((data) => {
            console.log(data)
            var metaData = data.metadata
            // //filter metadata for selected ID on dropdown
            // var sampleOutput = metaData.filter(x => (parseInt(x.id)) === sampleID);
            var sampleOutput = metaData.filter(x => x.id  === parseInt(sampleID));
            var result = sampleOutput[0]
            var panel = d3.select("#sample-metadata")
            
            //clear 
            panel.html("")
            // // append and add id to the dropdown menu
            Object.entries(result).forEach(([key,value])=> {
                panel.append("h6").text(`${key.toUpperCase()} : ${value}`);
            })
        })
    }  
    
        
    ///// ----------- BAR CHART ----------------/////
  
    function buildChart(sampleID) {


        // sampleID = 940
        d3.json("samples.json").then((data) => {
            var idSamp = data.samples.filter(x => parseInt(x.id) === parseInt(sampleID))
        
            var sampValues = idSamp[0].sample_values.slice(0,10)
            sampValues = sampValues.reverse()
            console.log(sampValues)
            var otuValues = idSamp[0].otu_ids.slice(0,10)
            otuValues = otuValues.reverse()
            console.log(otuValues)
            var singOTUValue = otuValues.map(x => `OTU ${x}`)
            console.log(singOTUValue)

        console.log(singOTUValue)
        
        var trace = {
            x: sampValues,
            y: singOTUValue,
            mode: "markers",
            marker: {size:10},
            text: singOTUValue,
            type: "bar",
            orientation: "h"
        
        };

        var data1 = [trace];
        var layout = {
            title: `Top 10 OTUs Found in ID ${sampleID}`,
            xaxis: { title: "Sample Values" },
            yaxis: { title: "OTU IDs" },
        };
    
        Plotly.newPlot("bar", data1, layout)
    
        })
    }
    /// ----------- Bubble Chart----------------/////
function buildBubble(sampleID) {
    d3.json("samples.json").then((data) => {
        var idSamp = data.samples.filter(x => (parseInt(x.id)) === parseInt(sampleID))
        var indivSampValue = idSamp[0].sample_values
        // console.log(indivSampValue)
        var indivOtuValue = idSamp[0].otu_ids


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

        var data2 = [trace1];

        var layout = {
        title: "OTU ID",
        showlegend: false,
        height: 600,
        width: 1000
        };

        Plotly.newPlot("bubble", data2, layout);
    })    
}
    

///// --------------Drop Down Menu------------------/////
function optionChanged(sampleID) {
    console.log("option changed", sampleID)

    // sampleID = 940
    
    buildMetaData(sampleID)
    buildChart(sampleID)
    buildBubble(sampleID)
}
// optionChanged(940)
function init() {
    d3.json("samples.json").then((data) => {
        d3.select("#selDataset").html(""); 
        var metaData = data.metadata
        metaData.forEach(x => {d3.select ("#selDataset").append('option').attr('value', x.id).text(x.id);
        });
        sampleID = d3.select("#selDataset").node().value 
        buildMetaData(sampleID)
        buildChart(sampleID)
        buildBubble(sampleID)
    });

}
init()
