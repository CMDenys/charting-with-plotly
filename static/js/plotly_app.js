// Use d3.json() to fetch data from JSON file

function buildMetaData(sample) {

    
    d3.json("../../data/samples.json").then((data) => {
        var metaData = data.metadata
        var sampleOutput = metaData.filter(x => x.id === sample);
        var result = sampleOutput[0]
        var panel = d3.select("#sample-metadata")
        panel.html("")
        Object.entries(result).forEach(([key,value])=> {
            panel.append("h6").text(`${key.toUpperCase()} : ${value}`);
        })
        console.log(result)


    });
};

// create init function
// create option change 
// then create build chart - metadata should change with option function.  