
// Use d3.json() to fetch data from JSON file

// function buildMetaData(sample) {

    // 1 - make sure we are able to read data - all done with function
    //     commented out
    //--------------------------------------------------------------------
    // d3.json("../../data/samples.json").then((data) => {
    //     console.log(data)
        
    // 2 - use variable to define metadata and filter for id.  Since we need
    //     to see if it's working, we'll console.log an existing id (940).  
    //     using the [0] item because we only want the first sample
    //---------------------------------------------------------------------
    // d3.json("../../data/samples.json").then((data) => {  
    //     var sample = 940
    //     var metaData = data.metadata
    //     var sampleOutput = metaData.filter(x => x.id === sample);
    //     var result = sampleOutput[0]
    //     console.log(result)

    // 3 - locate where we need to add info/data in the html and use
    //     object entries to append data.  panel.html("") to clear
    //     also can use html with "" to edit text
    //---------------------------------------------------------------------
    // d3.json("../../data/samples.json").then((data) => {  
    //     var sample = 940
    //     var metaData = data.metadata
    //     var sampleOutput = metaData.filter(x => x.id === sample);
    //     var result = sampleOutput[0]
    //     var panel = d3.select("#sample-metadata")
    //     panel.html("")
    //     Object.entries(result).forEach(([key,value])=> {
    //         panel.append("h6").text(`${key.toUpperCase()} : ${value}`);
    //     })
    //     console.log(result)
    // });

    // 4 - remove the sample id used and uncomment the function.


    // d3.json("../../data/samples.json").then((data) => {
       
    //     var sample = 940
    //     var metaData = data.metadata
    //     var sampleOutput = metaData.filter(x => x.id === sample);
    //     var result = sampleOutput[0]
    //     var panel = d3.select("#sample-metadata")
    //     panel.html("")
    //     Object.entries(result).forEach(([key,value])=> {
    //         panel.append("h6").text(`${key.toUpperCase()} : ${value}`);
    //     })
    //     console.log(result)

    // });
    
    
    // function buildTable (sample) { 
//     sampleID = 940
//     console.log(sampleID)
//     var idSamp = data.samples.filter(x => (x.id) == sampleID)
//     var sampValues = idSamp[0].sample_values.slice(0,10)
//     sampValues = sampValues.reverse()
//     console.log(sampValues)
//     var otuValues = idSamp[0].otu_ids.slice(0,10)
//     otuValues = otuValues.reverse()
//     console.log(otuValues)


//     var trace = {
//         x: sampValues,
//         y: otuValues,
//         mode: "markers",
//         marker: {size:14},
//         text: otuValues,
//         type: "bar",
//         orientation: "h"
//     };

//     var data1 = [trace];
//     var layout = {
//         title: `Top 10 OTUs Found in ID ${sampleID}`,
//         xaxis: { title: "Sample Values" },
//         yaxis: { title: "OTU IDs" },
//     };
      
//     Plotly.newPlot("bar", data1, layout)

// })

//build optionChanged function

// function optionChanged(sample) {
    // var sample = 940
    d3.json("../../data/samples.json").then((data) => {
        //clear dropdown menu
        sampleID = 940
        console.log(data)

        var idSamp = data.samples.filter(x => (parseInt(x.id)) === sampleID)
        var indivSampValue = idSamp[0].sample_values
        
        
        var labels = Object.values(data.sample_values)
        var labelsII = Object.keys(data.samples)
        console.log(labels)
        console.log(labelsII)



    })
    
    
   