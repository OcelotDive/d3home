var testData = {
    data: [
  {
    "Time": "36:50",
    "Place": 1,
    "Seconds": 2210,
    "Name": "Marco Pantani",
    "Year": 1995,
    "Nationality": "ITA",
    "Doping": "Alleged drug use during 1995 due to high hematocrit levels",
    "URL": "https://en.wikipedia.org/wiki/Marco_Pantani#Alleged_drug_use"
  },
  {
    "Time": "36:55",
    "Place": 2,
    "Seconds": 2215,
    "Name": "Marco Pantani",
    "Year": 1997,
    "Nationality": "ITA",
    "Doping": "Alleged drug use during 1997 due to high hermatocrit levels",
    "URL": "https://en.wikipedia.org/wiki/Marco_Pantani#Alleged_drug_use"
  },
  {
    "Time": "37:15",
    "Place": 3,
    "Seconds": 2235,
    "Name": "Marco Pantani",
    "Year": 1994,
    "Nationality": "ITA",
    "Doping": "Alleged drug use during 1994 due to high hermatocrit levels",
    "URL": "https://en.wikipedia.org/wiki/Marco_Pantani#Alleged_drug_use"
  },
  {
    "Time": "37:36",
    "Place": 4,
    "Seconds": 2256,
    "Name": "Lance Armstrong",
    "Year": 2004,
    "Nationality": "USA",
    "Doping": "2004 Tour de France title stripped by UCI in 2012",
    "URL": "https://en.wikipedia.org/wiki/History_of_Lance_Armstrong_doping_allegations"
  },
  {
    "Time": "37:42",
    "Place": 5,
    "Seconds": 2262,
    "Name": "Jan Ullrich",
    "Year": 1997,
    "Nationality": "GER",
    "Doping": "Confessed later in his career to doping",
    "URL": "https://en.wikipedia.org/wiki/Jan_Ullrich#Operaci.C3.B3n_Puerto_doping_case"
  },
  {
    "Time": "38:05",
    "Place": 6,
    "Seconds": 2285,
    "Name": "Lance Armstrong",
    "Year": 2001,
    "Nationality": "USA",
    "Doping": "2001 Tour de France title stripped by UCI in 2012",
    "URL": "https://en.wikipedia.org/wiki/History_of_Lance_Armstrong_doping_allegations"
  },
  {
    "Time": "38:14",
    "Place": 7,
    "Seconds": 2294,
    "Name": "Miguel Indurain",
    "Year": 1995,
    "Nationality": "ESP",
    "Doping": "1994 Failed test for salbutemol, not a banned drug at that time",
    "URL": "http://www.independent.co.uk/sport/drugs-in-sport-indurain-allowed-to-use-banned-drug-1379584.html"
  },
  {
    "Time": "38:14",
    "Place": 8,
    "Seconds": 2294,
    "Name": "Alex Zülle",
    "Year": 1995,
    "Nationality": "SUI",
    "Doping": "Confessed in 1998 to taking EPO",
    "URL": "https://en.wikipedia.org/wiki/Alex_Z%C3%BClle#Festina_affair"
  },
  {
    "Time": "38:16",
    "Place": 9,
    "Seconds": 2296,
    "Name": "Bjarne Riis",
    "Year": 1995,
    "Nationality": "DEN",
    "Doping": "Alleged drug use during 1995 due to high hermatrocite levels",
    "URL": "https://en.wikipedia.org/wiki/Bjarne_Riis#Doping_allegations"
  },
  {
    "Time": "38:22",
    "Place": 10,
    "Seconds": 2302,
    "Name": "Richard Virenque",
    "Year": 1997,
    "Nationality": "FRA",
    "Doping": "In 2000 confessed to doping during his career",
    "URL": "https://en.wikipedia.org/wiki/Richard_Virenque#Festina_affair"
  },
  {
    "Time": "38:36",
    "Place": 11,
    "Seconds": 2316,
    "Name": "Floyd Landis",
    "Year": 2006,
    "Nationality": "USA",
    "Doping": "Stripped of 2006 Tour de France title",
    "URL": "https://en.wikipedia.org/wiki/Floyd_Landis_doping_case"
  },
  {
    "Time": "38:36",
    "Place": 12,
    "Seconds": 2316,
    "Name": "Andreas Klöden",
    "Year": 2006,
    "Nationality": "GER",
    "Doping": "Alleged use of illegal blood transfusions in 2006",
    "URL": "https://en.wikipedia.org/wiki/Andreas_Kl%C3%B6den#2009_Doping_allegations"
  },
  {
    "Time": "38:40",
    "Place": 13,
    "Seconds": 2320,
    "Name": "Jan Ullrich",
    "Year": 2004,
    "Nationality": "GER",
    "Doping": "Confessed later in his career to doping",
    "URL": "https://en.wikipedia.org/wiki/Jan_Ullrich#Operaci.C3.B3n_Puerto_doping_case"
  },
  {
    "Time": "38:44",
    "Place": 14,
    "Seconds": 2324,
    "Name": "Laurent Madouas",
    "Year": 1995,
    "Nationality": "FRA",
    "Doping": "Tested positive for Salbutemol in 1994, suspended for 1 month",
    "URL": "http://www.dopeology.org/incidents/Madouas-positive/"
  },
  {
    "Time": "38:55",
    "Place": 15,
    "Seconds": 2335,
    "Name": "Richard Virenque",
    "Year": 1994,
    "Nationality": "FRA",
    "Doping": "In 2000 confessed to doping during his career",
    "URL": "https://en.wikipedia.org/wiki/Richard_Virenque#Festina_affair"
  },
  {
    "Time": "39:01",
    "Place": 16,
    "Seconds": 2341,
    "Name": "Carlos Sastre",
    "Year": 2006,
    "Nationality": "ESP",
    "Doping": "",
    "URL": ""
  },
  {
    "Time": "39:09",
    "Place": 17,
    "Seconds": 2349,
    "Name": "Iban Mayo",
    "Year": 2003,
    "Nationality": "ESP",
    "Doping": "Failed doping test in 2007 Tour de France",
    "URL": "https://en.wikipedia.org/wiki/Iban_Mayo"
  },
  {
    "Time": "39:12",
    "Place": 18,
    "Seconds": 2352,
    "Name": "Andreas Klöden",
    "Year": 2004,
    "Nationality": "GER",
    "Doping": "Alleged doping during 2006 Tour de France",
    "URL": "https://en.wikipedia.org/wiki/Operaci%C3%B3n_Puerto_doping_case"
  },
  {
    "Time": "39:14",
    "Place": 19,
    "Seconds": 2354,
    "Name": "Jose Azevedo",
    "Year": 2004,
    "Nationality": "POR",
    "Doping": "Implicated in the Operación Puerto doping case",
    "URL": "https://en.wikipedia.org/wiki/Operaci%C3%B3n_Puerto_doping_case"
  },
  {
    "Time": "39:15",
    "Place": 20,
    "Seconds": 2355,
    "Name": "Levi Leipheimer",
    "Year": 2006,
    "Nationality": "USA",
    "Doping": "Testified in 2012 to doping during his time with US Postal Service ",
    "URL": "http://www.wsj.com/articles/SB10000872396390444799904578048352672452328"
  },
  {
    "Time": "39:22",
    "Place": 21,
    "Seconds": 2362,
    "Name": "Francesco Casagrande",
    "Year": 1997,
    "Nationality": "ITA",
    "Doping": "Positive testosterone test in 1998",
    "URL": "http://autobus.cyclingnews.com/results/1998/sep98/sep2.shtml"
  },
  {
    "Time": "39:23",
    "Place": 22,
    "Seconds": 2363,
    "Name": "Nairo Quintana",
    "Year": 2015,
    "Nationality": "COL",
    "Doping": "",
    "URL": ""
  },
  {
    "Time": "39:23",
    "Place": 23,
    "Seconds": 2363,
    "Name": "Bjarne Riis",
    "Year": 1997,
    "Nationality": "DEN",
    "Doping": "Alleged drug use during 1995 due to high hermatrocite levels",
    "URL": "https://en.wikipedia.org/wiki/Bjarne_Riis#Doping_allegations"
  },
  {
    "Time": "39:30",
    "Place": 24,
    "Seconds": 2370,
    "Name": "Miguel Indurain",
    "Year": 1994,
    "Nationality": "ESP",
    "Doping": "1994 Failed test for salbutemol, not a banned drug at that time",
    "URL": "http://www.independent.co.uk/sport/drugs-in-sport-indurain-allowed-to-use-banned-drug-1379584.html"
  },
  {
    "Time": "39:30",
    "Place": 25,
    "Seconds": 2370,
    "Name": "Luc Leblanc",
    "Year": 1994,
    "Nationality": "FRA",
    "Doping": "Admitted to using epo and amphetimines throughout 1994 ",
    "URL": "http://www.dopeology.org/people/Luc_Leblanc/"
  },
  {
    "Time": "39:32",
    "Place": 26,
    "Seconds": 2372,
    "Name": "Carlos Sastre",
    "Year": 2008,
    "Nationality": "ESP",
    "Doping": "",
    "URL": ""
  },
  {
    "Time": "39:37",
    "Place": 27,
    "Seconds": 2377,
    "Name": "Vladimir Poulnikov",
    "Year": 1994,
    "Nationality": "UKR",
    "Doping": "",
    "URL": ""
  },
  {
    "Time": "39:40",
    "Place": 28,
    "Seconds": 2380,
    "Name": "Giuseppe Guerini",
    "Year": 2004,
    "Nationality": "ITA",
    "Doping": "",
    "URL": ""
  },
  {
    "Time": "39:41",
    "Place": 29,
    "Seconds": 2381,
    "Name": "Santos Gonzalez",
    "Year": 2004,
    "Nationality": "ESP",
    "Doping": "High Hematocrit during 2005 season, removed by team management",
    "URL": "http://www.cyclingnews.com/news/santos-gonzalez-sacked-by-phonak/"
  },
  {
    "Time": "39:41",
    "Place": 30,
    "Seconds": 2381,
    "Name": "Vladimir Karpets",
    "Year": 2004,
    "Nationality": "RUS",
    "Doping": "Made payments to Ferrari, but no charges filed",
    "URL": "http://www.dopeology.org/incidents/Ferrari-investigation/"
  },
  {
    "Time": "39:45",
    "Place": 31,
    "Seconds": 2385,
    "Name": "Fernando Escartin",
    "Year": 1995,
    "Nationality": "ESP",
    "Doping": "Implicated in Giardini Margherita Raid in 1998 as a 'victim' ",
    "URL": "http://www.dopeology.org/incidents/Giardini-Margherita-raid-%5bBologna%5d/"
  },
  {
    "Time": "39:47",
    "Place": 32,
    "Seconds": 2387,
    "Name": "Denis Menchov",
    "Year": 2006,
    "Nationality": "RUS",
    "Doping": "",
    "URL": ""
  },
  {
    "Time": "39:47",
    "Place": 33,
    "Seconds": 2387,
    "Name": "Michael Rasmussen",
    "Year": 2006,
    "Nationality": "DEN",
    "Doping": "Admitted to doping with multiple substances 1998-2010",
    "URL": "http://www.dopeology.org/people/Michael_Rasmussen/"
  },
  {
    "Time": "39:47",
    "Place": 34,
    "Seconds": 2387,
    "Name": "Pietro Caucchioli",
    "Year": 2006,
    "Nationality": "ITA",
    "Doping": "Associated with Mantova investigation, charges dropped",
    "URL": "http://www.cyclingnews.com/news/italian-judge-set-to-decide-if-32-named-in-mantova-doping-investigation-should-go-on-trial/"
  },
  {
    "Time": "39:50",
    "Place": 35,
    "Seconds": 2390,
    "Name": "Nairo Quintana",
    "Year": 2013,
    "Nationality": "COL",
    "Doping": "",
    "URL": ""
  }
]
            
}

let counter = 1;
let play = document.getElementById('title');


play.onclick = function() {
    
  counter++;
  play.innerHTML = (counter % 2 === 0) ? 'Restart Visualisation Page' : 'Play Scatter Graph Visualisation'
  counter % 2 === 0 ? play.classList.remove('animated') : null;
  counter % 2 === 0 ? playVisualisation() : location.reload();
}


function playVisualisation() {
let gTitle = document.getElementById('graphTitle');

setTimeout(function() {
    gTitle.classList.remove('initial');
    gTitle.classList.add('animated');
    gTitle.classList.add('bounceInDown');
},500)

//d3
//set up margins, height and width

var margin = {
        top: 10,
        right: 20,
        bottom: 30,
        left: 40
    },
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom,
    mainWidth = 1060;

/* 
 * value accessor - returns the value to encode for a given data object.
 * scale - maps value to a visual display encoding, such as a pixel position.
 * map function - maps from data value to display value
 * axis - sets up axis
 */

// setup x 
var xValue = function (d) {
        return d.Seconds;
    }, // data -> value
    xScale = d3.scale.linear().range([0, width]), // value -> display
    xMap = function (d) {
        return xScale(xValue(d));
    }, // data -> display return each value for at the scale for each object in array
    xAxis = d3.svg.axis().scale(xScale).orient("bottom");
var xMapTxt = function (d) {
    return xScale(xValue(d)) + 10;
}
// setup y
var yValue = function (d) {
        return d.Place;
    }, // data -> value
    yScale = d3.scale.linear().range([height, 0]), // value -> display
    yMap = function (d) {
        return yScale(yValue(d));
    }, // data -> display
    yAxis = d3.svg.axis().scale(yScale).orient("left");
var yMapTxt = function (d) {
    return yScale(yValue(d)) + 5;
}
// setup fill color
var cValue = function (d) {
        return d.Doping.length > 0 ? 'Implemented' : 'Not Implemented';
    },
    color = d3.scale.category10();




// add the graph canvas to the body of the webpage
var svg = d3.select(".container").append("svg")
    .attr('class', 'svg animated lightSpeedIn fadeIn')
    .attr("width", width + margin.left + margin.right + 80)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// add the tooltip area to the webpage
var tooltip = d3.select(".container").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

// load data
d3.json("https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/cyclist-data.json", function (err, data) {



    if (err) {
        console.log(err);
        data = testData;
        console.log(err)
    }
    // change string (from CSV) into number format
   
    // don't want dots overlapping axis, so add in buffer to data domain
    //xScale.domain([d3.min(data, xValue)-2, d3.max(data, xValue)+25]);
    xScale.domain([d3.max(data, xValue) + 2, d3.min(data, xValue) + 2]);
    //yScale.domain([d3.min(data, yValue)-1, d3.max(data, yValue)+1]);
    yScale.domain([d3.max(data, yValue) + 1, d3.min(data, yValue) - 0.85]);

    // x-axis
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .append("text")
        .attr("class", "label")
        .attr("x", width)
        .attr("y", -6)
        .style("text-anchor", "end")
        .text("SECONDS");

    // y-axis
    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("class", "label")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("RANKING");


    var gdots = svg.selectAll('g.dot')
        .data(data)
        .enter().append('g')


    gdots.append("circle")
        .attr("class", "dot")
        .attr("r", 6)
        .attr("cx", xMap)
        .attr("cy", height)
        .on("click", function (d) {
            d["URL"].length > 0 ?
                window.open(d["URL"]) :
                null
        })
        .style("fill", function (d) {
            return color(cValue(d));
        })


        .on("mouseover", function (d) {
            tooltip.transition()
                .duration(200)
                .style("opacity", .9);
            tooltip.html('Name: ' + d["Name"] + "\xa0\xa0\xa0\xa0" + "<img class='flag' src='flags/" + d["Nationality"] + ".png' />" + "<br/>" + 'Time: ' + xValue(d) + ' ' + 'secs' +
                    "<br/>" + 'Rank: ' + yValue(d) +
                    "<br/>" + d["Doping"])
                .style("left", (d3.event.pageX + 5) + "px")
                .style("top", (d3.event.pageY - 28) + "px");
        })
        .on("mouseout", function (d) {
            tooltip.transition()
                .duration(800)
                .style("opacity", 0);
        });


    var dotText = gdots.append('text').text(function (d) {
            return d.Name
        })
        .attr('class', 'gdotText')
        .attr("x", 10)
        .attr("y", height)
        .style('font-size', 8 + 'pt')


    // draw legend
    var legend = svg.selectAll(".legend")
        .data(color.domain())
        .enter().append("g")
        .attr("class", "legend")
        .attr("transform", function (d, i) {
            return "translate(0," + i * 20 + ")";
        })
    
    // draw legend colored rectangles
    legend.append("rect")
        .attr("x", width + 500)
        .attr("y", 282)
        .attr("width", 18)
        .attr("height", 18)
        .style("fill", color);

    // draw legend text
    legend.append("text")
        .attr("class", 'legendText')
        .attr("x", width + 500)
        .attr("y", 292)
        .attr("dy", ".35em")
        .attr('fill', 'red')
        .style("text-anchor", "end")
        .text(function (d) {
            return d;
        })

    //transitions
    svg.selectAll('circle')
        .transition()
        .duration(3000)
        .delay(1000)
        .attr("cy", yMap)


    d3.selectAll('.gdotText')
        .transition()
        .duration(3000)
        .delay(3000)
        .attr('y', yMapTxt)
        .attr("x", xMapTxt)
    
    
    svg.selectAll('rect')
        .transition()
        .duration(3000)
        .delay(3500)
        .attr("x", width - 50)
        .attr("y", 282)
    
    d3.selectAll('.legendText')
        .transition()
        .duration(3000)
        .delay(3500)
        .attr("x", width + 80)
        .attr("y", 292)
    

});
}