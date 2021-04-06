// // Use d3.json() to fetch data from JSON file

// function optionChanged(sample) {

//     d3.json("../../data/samples.json").then((data) => {
//         //clear dropdown menu
//         d3.select("#selDataset").html("");  

//     })


//     //// --------------MetaData------------------/////
//     function buildMetaData(sample) {

//         sample = 940
//         d3.json("../../data/samples.json").then((data) => {
//             var metaData = data.metadata
//             //filter metadata for selected ID on dropdown
//             var sampleOutput = metaData.filter(x => x.id === sample);
//             var result = sampleOutput[0]
//             var panel = d3.select("#sample-metadata")
            
//             //clear 
//             panel.html("")
//             // append and add id to the dropdown menu
//             Object.entries(result).forEach(([key,value])=> {
//                 panel.append("h6").text(`${key.toUpperCase()} : ${value}`);
//             })
    
//         });

//         ///// ----------- BAR CHART ----------------/////
//         // function buildChart {
//         sampleID = 940
//         d3.json("../../data/samples.json").then((data) => {
//             var idSamp = data.samples.filter(x => (parseInt(x.id)) === sampleID)
//             var sampValues = idSamp[0].sample_values.slice(0,10)
//             sampValues = sampValues.reverse()
//             console.log(sampValues)
//             var otuValues = idSamp[0].otu_ids.slice(0,10)
//             otuValues = otuValues.reverse()
//             console.log(otuValues)
//             var singOTUValue = otuValues.map(x => `OTU ${x}`)

//             console.log(singOTUValue)
            

//             var trace = {
//                 x: sampValues,
//                 y: singOTUValue,
//                 mode: "markers",
//                 marker: {size:10},
//                 text: singOTUValue,
//                 type: "bar",
//                 orientation: "h"
//             };

//             var data1 = [trace];
//             var layout = {
//                 title: `Top 10 OTUs Found in ID ${sampleID}`,
//                 xaxis: { title: "Sample Values" },
//                 yaxis: { title: "OTU IDs" },
//             };
            
//             Plotly.newPlot("bar", data1, layout)
//         });

        ///// ----------- Bubble Chart----------------/////

        // sampleID = 940
        // d3.json("../../data/samples.json").then((data) => {
        //     var idSamp = data.samples.filter(x => (parseInt(x.id)) === sampleID)
        //     var indivSampValue = idSamp[0].sample_values
        //     console.log(indivSampValue)
        //     var indivOtuValue = idSamp[0].otu_ids
    
        
        //     var trace1 = {
        //         x: indivSampValue,
        //         y: indivOtuValue,
        //         mode: 'markers',
        //         marker: {
        //           size: indivSampValue,
        //           color: indivOtuValue
        //         },
        //         text: indivOtuValue
        //       };
            
        //       var data2 = [trace1];
            
        //       var layout = {
        //         title: "OTU ID",
        //         showlegend: false,
        //         height: 600,
        //         width: 1000
        //       };
            
        //       Plotly.newPlot("bubble", data2, layout);

        // });


d3.json("../../data/samples.json").then((data) => {
    sampleID = 940            
    console.log(data)
    
    
    // var labels = Object.values(data.)
})






// var idSamp = data.samples.filter(x => (parseInt(x.id)) === sampleID)
//             var sampValues = idSamp[0].sample_values.slice(0,10)
//             sampValues = sampValues.reverse()
//             console.log(sampValues)
//             var otuValues = idSamp[0].otu_ids.slice(0,10)
//             otuValues = otuValues.reverse()
//             console.log(otuValues)
//             var singOTUValue = otuValues.map(x => `OTU ${x}`)

//             var indivSampValue = idSamp[0].sample_values
//             console.log(indivSampValue)
//             var indivOtuValue = idSamp[0].otu_ids


    // create init function
    // create option change 
    // then create build chart - metadata should change with option function.  
// })