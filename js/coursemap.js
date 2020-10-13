const width = 800;
const height = 800;

const radius = 12;

const svg = d3.select('body')
  .append('svg')
  .attr('width', width)
  .attr('height', height);

const nodes_data = [
  {"id": "105", "name": "105", "type": "analysis"},
  {"id": "104", "name": "104", "type": "analysis"},
  {"id": "110", "name": "110", "type": "linear algebra"},
  {"id": "113", "name": "113", "type": "abstract algebra"},
  {"id": "114", "name": "114", "type": "abstract algebra"},
  {"id": "115", "name": "115", "type": "number theory"},
  {"id": "116", "name": "116", "type": "number theory"},
  {"id": "118", "name": "118", "type": "analysis"},
  {"id": "123", "name": "123", "type": "analysis"},
  {"id": "124", "name": "124", "type": "applied"},
  {"id": "125A", "name": "125A", "type": "logic"},
  {"id": "126", "name": "126", "type": "analysis"},
  {"id": "127", "name": "127", "type": "applied"},
  {"id": "128A", "name": "128A", "type": "applied"},
  {"id": "128B", "name": "128B", "type": "applied"},
  {"id": "130", "name": "130", "type": "geometry"},
  {"id": "135", "name": "135", "type": "logic"},
  {"id": "136", "name": "136", "type": "logic"},
  {"id": "140", "name": "140", "type": "geometry"},
  {"id": "141", "name": "141", "type": "geometry"},
  {"id": "142", "name": "142", "type": "geometry"},
  {"id": "143", "name": "143", "type": "geometry"},
  {"id": "151", "name": "151", "type": "education"},
  {"id": "152", "name": "152", "type": "education"},
  {"id": "153", "name": "153", "type": "education"},
  {"id": "160", "name": "160", "type": "education"},
  {"id": "170", "name": "170", "type": "applied"},
  {"id": "172", "name": "172", "type": "discrete"},
  {"id": "185", "name": "185", "type": "analysis"},
  {"id": "1A", "name": "1A", "type": "lower-div"},
  {"id": "1B", "name": "1B", "type": "lower-div"},
  {"id": "53", "name": "53", "type": "lower-div"},
  {"id": "54", "name": "54", "type": "lower-div"},
  {"id": "55", "name": "55", "type": "lower-div"},
  {"id": "C103", "name": "C103", "type": "applied"},
];

const links_data = [
  {"source": "1A", "target": "1B"},
  {"source": "1B", "target": "53"},
  {"source": "1B", "target": "54"},
  {"source": "1B", "target": "55"},
  {"source": "53", "target": "104"},
  {"source": "53", "target": "110"},
  {"source": "53", "target": "113"},
  {"source": "54", "target": "104"},
  {"source": "54", "target": "110"},
  {"source": "54", "target": "113"},
  {"source": "55", "target": "104"},
  {"source": "55", "target": "110"},
  {"source": "55", "target": "113"},
  {"source": "104", "target": "105"},
  {"source": "110", "target": "105"},
  {"source": "104", "target": "185"},
  {"source": "104", "target": "C103"},
  {"source": "113", "target": "114"},
  {"source": "55", "target": "115"},
  {"source": "110", "target": "116"},
  {"source": "113", "target": "116"},
  {"source": "115", "target": "116"},
  {"source": "104", "target": "118"},
  {"source": "110", "target": "118"},
  {"source": "104", "target": "123"},
  {"source": "110", "target": "123"},
  {"source": "53", "target": "124"},
  {"source": "54", "target": "124"},
  {"source": "55", "target": "124"},
  {"source": "104", "target": "126"},
  {"source": "110", "target": "126"},
  {"source": "53", "target": "127"},
  {"source": "54", "target": "127"},
  {"source": "55", "target": "127"},
  {"source": "53", "target": "128A"},
  {"source": "54", "target": "128A"},
  {"source": "128A", "target": "128B"},
  {"source": "110", "target": "130"},
  {"source": "113", "target": "130"},
  {"source": "104", "target": "125A"},
  {"source": "110", "target": "125A"},
  {"source": "113", "target": "125A"},
  {"source": "125A", "target": "135"},
  {"source": "125A", "target": "136"},
  {"source": "104", "target": "140"},
  {"source": "110", "target": "140"},
  {"source": "104", "target": "141"},
  {"source": "110", "target": "141"},
  {"source": "104", "target": "142"},
  {"source": "113", "target": "142"},
  {"source": "104", "target": "143"},
  {"source": "113", "target": "143"},
  {"source": "53", "target": "151"},
  {"source": "54", "target": "152"},
  {"source": "113", "target": "152"},
  {"source": "151", "target": "152"},
  {"source": "151", "target": "153"},
  {"source": "152", "target": "153"},
  {"source": "104", "target": "160"},
  {"source": "113", "target": "160"},
  {"source": "104", "target": "170"},
  {"source": "110", "target": "170"},
  {"source": "113", "target": "172"}
];

const type_colors = {"lower-div": "gray",
                     "analysis": "red",
                     "abstract algebra": "orange",
                     "number theory": "yellow",
                     "geometry": "green",
                     "education": "cyan",
                     "applied": "blue",
                     "linear algebra": "purple",
                     "discrete": "pink",
                     "logic": "brown"};

//set up the simulation and add forces
var simulation = d3.forceSimulation()
					.nodes(nodes_data);

var link_force =  d3.forceLink(links_data)
                        .id(function(d) { return d.name; });

var charge_force = d3.forceManyBody()
    .strength(-500);

var center_force = d3.forceCenter(width / 2, height / 2);

simulation
    .force("charge_force", charge_force)
    .force("center_force", center_force)
    .force("links",link_force);


//add tick instructions:
simulation.on("tick", tickActions );

svg.append("svg:defs").selectAll("marker")
    .data(["end"])      // Different link/path types can be defined here
  .enter().append("svg:marker")    // This section adds in the arrows
    .attr("id", String)
    .attr("viewBox", "0 -5 10 10")
    .attr("refX", 15)
    .attr("refY", -1.5)
    .attr("markerWidth", 6)
    .attr("markerHeight", 6)
    .attr("orient", "auto")
  .append("svg:path")
    .attr("d", "M0,-5L10,0L0,5");

//draw lines for the links
var link = svg.append("g")
      .attr("class", "links")
    .selectAll("line")
    .data(links_data)
    .enter().append("line")
    .attr("stroke-width", 2)
    .attr("stroke", "black")
    .attr('marker-end','url(#end)');

//draw circles for the nodes
// var node = svg.append("g")
//         .attr("class", "nodes")
//         .selectAll(".node")
//         .data(nodes_data)
//         .enter()
//         .append("circle")
//         .attr("r", radius)
//         .attr("fill", d => type_colors[d.type]);

var node = svg.selectAll("g")
               .data(nodes_data)
               .enter()
               .append("g");

node.append("circle")
     .attr("r", radius)
     .attr("fill", d => type_colors[d.type]);

node.append("text")
      .attr("text-anchor", "middle")
      .style('fill', '#000')
      .style('font-size', '12px')
      .style('font-weight', 'bold')
      .attr('x', 0)
      .attr('dy', 4)
      .text(function(d) {
        console.log(d.id);
        return d.id;
      });


//add drag capabilities
// var drag_handler = d3.drag()
// 	.on("start", drag_start)
// 	.on("drag", drag_drag)
// 	.on("end", drag_end);
//
// drag_handler(node);


// //add zoom capabilities
// var zoom_handler = d3.zoom()
//     .on("zoom", zoom_actions);
//
// zoom_handler(svg);

/** Functions **/

//Drag functions
//d is the node
function drag_start(d) {
 if (!d3.event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
}

//make sure you can't drag the circle outside the box
function drag_drag(d) {
  d.fx = d3.event.x;
  d.fy = d3.event.y;
}

function drag_end(d) {
  if (!d3.event.active) simulation.alphaTarget(0);
  d.fx = null;
  d.fy = null;
}

function tickActions() {
    //update circle positions each tick of the simulation
       // node
       //  .attr("cx", function(d) { return d.x; })
       //  .attr("cy", function(d) { return d.y; });
       node
         .attr("transform", function(d) {
             return "translate(" + d.x + "," + d.y + ")";
         });

    //update link positions
    link
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });
}
