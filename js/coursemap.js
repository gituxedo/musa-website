const width = 1000;
const height = 1000;

const radius = 20;

const svg = d3.select('body')
  .append('svg')
  .attr('width', width)
  .attr('height', height);

// const nodes_data = [
//   {},
//   {"id": "104", "name": "104", "type": "analysis", "level": "core"},
//   {"id": "105", "name": "105", "type": "analysis", "level": "elective"},
//   {"id": "110", "name": "110", "type": "linear algebra", "level": "core"},
//   {"id": "113", "name": "113", "type": "abstract algebra", "level": "core"},
//   {"id": "114", "name": "114", "type": "abstract algebra", "level": "elective"},
//   {"id": "115", "name": "115", "type": "number theory", "level": "elective"},
//   {"id": "116", "name": "116", "type": "number theory", "level": "elective"},
//   {"id": "118", "name": "118", "type": "analysis", "level": "elective"},
//   {"id": "123", "name": "123", "type": "analysis", "level": "elective"},
//   {"id": "124", "name": "124", "type": "applied", "level": "semi-elective"},
//   {"id": "125A", "name": "125A", "type": "logic", "level": "semi-elective"},
//   {"id": "126", "name": "126", "type": "analysis", "level": "elective"},
//   {"id": "127", "name": "127", "type": "applied", "level": "elective"},
//   {"id": "128A", "name": "128A", "type": "applied", "level": "semi-elective"},
//   {"id": "128B", "name": "128B", "type": "applied", "level": "elective"},
//   {"id": "130", "name": "130", "type": "geometry", "level": "semi-elective"},
//   {"id": "135", "name": "135", "type": "logic", "level": "semi-elective"},
//   {"id": "136", "name": "136", "type": "logic", "level": "semi-elective"},
//   {"id": "140", "name": "140", "type": "geometry", "level": "semi-elective"},
//   {"id": "141", "name": "141", "type": "geometry", "level": "semi-elective"},
//   {"id": "142", "name": "142", "type": "geometry", "level": "semi-elective"},
//   {"id": "143", "name": "143", "type": "geometry", "level": "semi-elective"},
//   {"id": "151", "name": "151", "type": "education", "level": "elective"},
//   {"id": "152", "name": "152", "type": "education", "level": "elective"},
//   {"id": "160", "name": "160", "type": "education", "level": "elective"},
//   {"id": "170", "name": "170", "type": "applied", "level": "elective"},
//   {"id": "172", "name": "172", "type": "discrete", "level": "elective"},
//   {"id": "185", "name": "185", "type": "analysis", "level": "semi-elective"},
//   {"id": "1A", "name": "1A", "type": "lower-div", "level": "lower-div"},
//   {"id": "1B", "name": "1B", "type": "lower-div", "level": "lower-div"},
//   {"id": "53", "name": "53", "type": "lower-div", "level": "lower-div2"},
//   {"id": "54", "name": "54", "type": "lower-div", "level": "lower-div2"},
//   {"id": "55", "name": "55", "type": "lower-div", "level": "lower-div2"},
//   {"id": "C103", "name": "C103", "type": "applied", "level": "elective"},
// ];

const nodes_data = [
  {},
  {"id": "104", "name": "104", "type": "analysis", "level": "core"},
  {"id": "105", "name": "105", "type": "analysis", "level": "elective"},
  {"id": "110", "name": "110", "type": "linear algebra", "level": "core"},
  {"id": "113", "name": "113", "type": "abstract algebra", "level": "core"},
  {"id": "114", "name": "114", "type": "abstract algebra", "level": "elective"},
  {"id": "115", "name": "115", "type": "number theory", "level": "elective"},
  {"id": "116", "name": "116", "type": "number theory", "level": "elective"},
  {"id": "118", "name": "118", "type": "analysis", "level": "elective"},
  {"id": "123", "name": "123", "type": "analysis", "level": "elective"},
  {"id": "124", "name": "124", "type": "applied", "level": "elective"},
  {"id": "125A", "name": "125A", "type": "logic", "level": "elective"},
  {"id": "126", "name": "126", "type": "analysis", "level": "elective"},
  {"id": "127", "name": "127", "type": "applied", "level": "elective"},
  {"id": "128A", "name": "128A", "type": "applied", "level": "elective"},
  {"id": "128B", "name": "128B", "type": "applied", "level": "elective"},
  {"id": "130", "name": "130", "type": "geometry", "level": "elective"},
  {"id": "135", "name": "135", "type": "logic", "level": "elective"},
  {"id": "136", "name": "136", "type": "logic", "level": "elective"},
  {"id": "140", "name": "140", "type": "geometry", "level": "elective"},
  {"id": "141", "name": "141", "type": "geometry", "level": "elective"},
  {"id": "142", "name": "142", "type": "geometry", "level": "elective"},
  {"id": "143", "name": "143", "type": "geometry", "level": "elective"},
  {"id": "151", "name": "151", "type": "education", "level": "elective"},
  {"id": "152", "name": "152", "type": "education", "level": "elective"},
  {"id": "160", "name": "160", "type": "education", "level": "elective"},
  {"id": "170", "name": "170", "type": "applied", "level": "elective"},
  {"id": "172", "name": "172", "type": "discrete", "level": "elective"},
  {"id": "185", "name": "185", "type": "analysis", "level": "elective"},
  {"id": "1A", "name": "1A", "type": "lower-div", "level": "lower-div"},
  {"id": "1B", "name": "1B", "type": "lower-div", "level": "lower-div"},
  {"id": "53", "name": "53", "type": "analysis", "level": "lower-div2"},
  {"id": "54", "name": "54", "type": "linear algebra", "level": "lower-div2"},
  {"id": "55", "name": "55", "type": "discrete", "level": "lower-div2"},
  {"id": "C103", "name": "C103", "type": "applied", "level": "elective"},
  // {"id": "202A", "name": "202A", "type": "analysis", "level": "grad-core"},
  // {"id": "202B", "name": "202B", "type": "analysis", "level": "grad-core"},
  // {"id": "250A", "name": "250A", "type": "abstract algebra", "level": "grad-core"},
  // {"id": "250B", "name": "250B", "type": "abstract algebra", "level": "grad-core"},
  // {"id": "205", "name": "205", "type": "analysis", "level": "grad-elective"},
  // {"id": "206", "name": "206", "type": "analysis", "level": "grad-elective"},
  // {"id": "208", "name": "208", "type": "analysis", "level": "grad-elective"},
  // {"id": "209", "name": "209", "type": "analysis", "level": "grad-elective"},
  // {"id": "212", "name": "212", "type": "analysis", "level": "grad-elective"},
  // {"id": "C218A", "name": "C218A", "type": "analysis", "level": "grad-elective"},
  // {"id": "C218B", "name": "C218B", "type": "analysis", "level": "grad-elective"},
  // {"id": "219", "name": "219", "type": "analysis", "level": "grad-elective"},
  // {"id": "222A", "name": "222A", "type": "analysis", "level": "grad-elective"},
  // {"id": "222B", "name": "222B", "type": "analysis", "level": "grad-elective"},
  // {"id": "258", "name": "258", "type": "analysis", "level": "grad-elective"},
  // {"id": "245A", "name": "245A", "type": "abstract algebra", "level": "grad-elective"},
  // {"id": "252", "name": "252", "type": "abstract algebra", "level": "grad-elective"},
  // {"id": "255", "name": "255", "type": "abstract algebra", "level": "grad-elective"},
  // {"id": "257", "name": "257", "type": "abstract algebra", "level": "grad-elective"},
  // {"id": "261A", "name": "261A", "type": "abstract algebra", "level": "grad-elective"},
  // {"id": "261B", "name": "261B", "type": "abstract algebra", "level": "grad-elective"},
  // {"id": "254A", "name": "254A", "type": "number theory", "level": "grad-elective"},
  // {"id": "254B", "name": "254B", "type": "number theory", "level": "grad-elective"},
  // {"id": "249", "name": "249", "type": "discrete", "level": "grad-elective"},
  // {"id": "214", "name": "214", "type": "geometry", "level": "grad-elective"},
  // {"id": "215A", "name": "215A", "type": "geometry", "level": "grad-elective"},
  // {"id": "215B", "name": "215B", "type": "geometry", "level": "grad-elective"},
  // {"id": "240", "name": "240", "type": "geometry", "level": "grad-elective"},
  // {"id": "241", "name": "241", "type": "geometry", "level": "grad-elective"},
  // {"id": "242", "name": "242", "type": "geometry", "level": "grad-elective"},
  // {"id": "256A", "name": "256A", "type": "geometry", "level": "grad-elective"},
  // {"id": "256B", "name": "256B", "type": "geometry", "level": "grad-elective"},
  // {"id": "224A", "name": "224A", "type": "applied", "level": "grad-elective"},
  // {"id": "224B", "name": "224B", "type": "applied", "level": "grad-elective"},
  // {"id": "228A", "name": "228A", "type": "applied", "level": "grad-elective"},
  // {"id": "228B", "name": "228B", "type": "applied", "level": "grad-elective"},
  // {"id": "221", "name": "221", "type": "linear algebra", "level": "grad-elective"},
  // {"id": "225A", "name": "225A", "type": "logic", "level": "grad-elective"},
  // {"id": "225B", "name": "225B", "type": "logic", "level": "grad-elective"},
  // {"id": "229", "name": "229", "type": "logic", "level": "grad-elective"},
  // {"id": "235A", "name": "235A", "type": "logic", "level": "grad-elective"},
  // {"id": "236", "name": "236", "type": "logic", "level": "grad-elective"}
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
  {"source": "110", "target": "114"},
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
  {"source": "110", "target": "128B"},
  {"source": "128A", "target": "128B"},
  {"source": "110", "target": "130"},
  {"source": "113", "target": "130"},
  {"source": "104", "target": "125A"},
  {"source": "113", "target": "125A"},
  {"source": "104", "target": "135"},
  {"source": "113", "target": "135"},
  {"source": "104", "target": "136"},
  {"source": "113", "target": "136"},
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
  {"source": "104", "target": "160"},
  {"source": "113", "target": "160"},
  {"source": "104", "target": "170"},
  {"source": "110", "target": "170"},
  {"source": "113", "target": "172"},
  // {"source": "104", "target": "202A"},
  // {"source": "110", "target": "202A"},
  // {"source": "113", "target": "202B"},
  // {"source": "202A", "target": "202B"},
  // {"source": "110", "target": "250A"},
  // {"source": "113", "target": "250B"},
  // {"source": "250A", "target": "250B"},
  // {"source": "185", "target": "205"},
  // {"source": "202A", "target": "205"},
  // {"source": "202B", "target": "206"},
  // {"source": "206", "target": "208"},
  // {"source": "208", "target": "209"},
  // {"source": "141", "target": "214"},
  // {"source": "202A", "target": "214"},
  // {"source": "185", "target": "212"},
  // {"source": "202B", "target": "212"},
  // {"source": "142", "target": "215A"},
  // {"source": "202A", "target": "215A"},
  // {"source": "250A", "target": "215A"},
  // {"source": "215A", "target": "215B"},
  // {"source": "202A", "target": "C218A"},
  // {"source": "C218A", "target": "C218B"},
  // {"source": "202B", "target": "219"},
  // {"source": "214", "target": "219"},
  // {"source": "250A", "target": "249"},
  // {"source": "125A", "target": "225A"},
  // {"source": "135", "target": "225A"},
  // {"source": "136", "target": "225B"},
  // {"source": "104", "target": "228A"},
  // {"source": "110", "target": "228A"},
  // {"source": "128A", "target": "228A"},
  // {"source": "126", "target": "228B"},
  // {"source": "228A", "target": "228B"},
  // {"source": "225A", "target": "229"},
  // {"source": "125A", "target": "235A"},
  // {"source": "135", "target": "235A"},
  // {"source": "214", "target": "240"},
  // {"source": "110", "target": "221"},
  // {"source": "228A", "target": "221"},
  // {"source": "202A", "target": "222A"},
  // {"source": "202B", "target": "222B"},
  // {"source": "222A", "target": "222B"},
  // {"source": "202A", "target": "224A"},
  // {"source": "202A", "target": "224B"},
  // {"source": "205", "target": "241"},
  // {"source": "214", "target": "241"},
  // {"source": "215A", "target": "241"},
  // {"source": "214", "target": "242"},
  // {"source": "250A", "target": "254A"},
  // {"source": "254A", "target": "254B"},
  // {"source": "250B", "target": "255"},
  // {"source": "250B", "target": "256A"},
  // {"source": "250A", "target": "256B"},
  // {"source": "185", "target": "258"},
  // {"source": "202B", "target": "258"},
  // {"source": "214", "target": "261A"},
  // {"source": "250B", "target": "261A"},
  // {"source": "261A", "target": "261B"},
  // {"source": "250A", "target": "257"},
  // {"source": "250A", "target": "252"},
  // {"source": "250B", "target": "245A"},
  // {"source": "225A", "target": "236"},
  // {"source": "225B", "target": "236"},
  // {"source": "250B", "target": "245A"},
];

// const types = ["lower-div",
//                "linear algebra",
//                "algebra",
//                "discrete",
//                "number theory",
//                "analysis",
//                "logic",
//                "geometry",
//                "applied",
//                "education"];

const types = [
  "number theory",
  "discrete",
  "abstract algebra",
  "logic",
  "education",
  "linear algebra",
  "lower-div",
  "geometry",
  "analysis",
  "applied"
];

const levels = ["lower-div",
                "lower-div2",
                "core",
                "elective"];
                // "grad-core",
                // "grad-elective"];

const type_colors = {"lower-div": "darkgray",
                     "analysis": "red",
                     "abstract algebra": "limegreen",
                     "number theory": "yellow",
                     "geometry": "orange",
                     "education": "orchid",
                     "applied": "turquoise",
                     "linear algebra": "dodgerblue",
                     "discrete": "pink",
                     "logic": "burlywood"};

function getNumPrereqs(className) {
  let prereqs = [];
  for (let link of links_data) {
    if (link["target"] == className) {
      prereqs.push(link["source"]);
    }
  }
  if (prereqs.length == 0) {
    return 0;
  }

  let numPrereqs = 0;
  for (let prereq of prereqs) {
    numPrereqs += 1 + getNumPrereqs(prereq);
  }

  return numPrereqs;
}

//set up the simulation and add forces
var simulation = d3.forceSimulation()
					.nodes(nodes_data);

var link_force =  d3.forceLink(links_data)
                        .id(function(d) { return d.id; })
                        .distance(100)
                        .strength(1);

var charge_force = d3.forceManyBody()
                     .strength(-400);

var center_force = d3.forceCenter(width / 2, height / 2);

var collision_force = d3.forceCollide(radius * 2);

var force_x = d3.forceX().x(function(d) {
  let index = types.indexOf(d.type);
  let spacing = width / (types.length + 1);
  return index * spacing;
});

force_x.strength(1.5);

// var force_y = d3.forceY().y(function(d) {
//   let numPrereqs = getNumPrereqs(d.name);
//   console.log(d.name + " has " + numPrereqs + " prereqs");
//   return numPrereqs;
// });

var force_y = d3.forceY().y(function(d) {
  let index = levels.indexOf(d.level);
  let spacing = height / (levels.length + 1);
  return index * spacing;
});

force_y.strength(2);

simulation
    .force("charge_force", charge_force)
    .force("center_force", center_force)
    .force("x", force_x)
    .force("y", force_y)
    .force("collide", collision_force)
    .force("links",link_force);


//add tick instructions:
simulation.on("tick", tickActions );

// var defs = svg.append("svg:defs");
//
// function marker(color) {
//   defs.append("svg:marker")
//       .attr("id", color.replace("#", ""))
//       .attr("viewBox", "0 -5 10 10")
//       .attr("refX", 15) // This sets how far back it sits, kinda
//       .attr("refY", 0)
//       .attr("markerWidth", 9)
//       .attr("markerHeight", 9)
//       .attr("orient", "auto")
//       .attr("markerUnits", "userSpaceOnUse")
//       .append("svg:path")
//       .attr("d", "M0,-5L10,0L0,5")
//       .style("fill", color);
//
//   return "url(" + color + ")";
// };

function getNodeColor(d) {
  if (d.id == "53" || d.id == "54" || d.id == "55") {
    return type_colors["lower-div"];
  }
  return type_colors[d.type];
}

svg.append("svg:defs").selectAll("marker")
    .data(["end"])      // Different link/path types can be defined here
  .enter().append("svg:marker")    // This section adds in the arrows
    .attr("id", String)
    .attr("viewBox", "0 -5 10 10")
    .attr("refX", 15)
    // .attr("refY", -1.5)
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
    .attr("stroke", d => getNodeColor(d.source))
    .attr('marker-end','url(#end)');
    // .each(function(d) {
    //         console.log(d);
    //         d3.select(this).attr("marker-end", marker("#003262"));
    // });

function getImmediatePrereqs(nodeId) {
  let prereqs = [];
  for (let prereq of links_data) {
    if (prereq.target.id == nodeId) {
      prereqs.push(prereq.source.id);
    }
  }
  return prereqs;
}

function getImmediateLinksIntoNode(nodeId) {
  let prereqs = [];
  for (let prereq of links_data) {
    if (prereq.target.id == nodeId) {
      prereqs.push(prereq);
    }
  }
  return prereqs;
}

function getAllLinksIntoNode(nodeId) {
  let parents = getImmediateLinksIntoNode(nodeId);
  if (parents.length == 0) {
    return [];
  }
  let allPaths = [];
  for (let parent of parents) {
    allPaths = allPaths.concat(getAllLinksIntoNode(parent.source.id));
  }

  allPaths = allPaths.concat(parents);

  return [...new Set(allPaths)];
}

// function getLinksToNode(nodeId) {
  // let parents = getImmediatePrereqs(nodeId);
  // if (parents.length == 0) {
  //   return [nodeId];
  // }
  // let allPaths = [];
  // for (let parent of parents) {
  //   allPaths = allPaths.concat(getLinksToNode(parent));
  // }
  // allPaths.push(nodeId);
  //
  // return [...new Set(allPaths)];
// }


function mouseover(event, d) {
  // d is the node being hovered, e.g.
  // {"id": "1A", "name": "1A", ...}
  let linksIntoNode = getAllLinksIntoNode(d.id);
  let highlightNodes = [d.id];
  for (let linkIntoNode of linksIntoNode) {
    highlightNodes.push(linkIntoNode.source.id);
  }

  // node.select("circle").style("opacity", "0.2");
  // node.select("text").style("opacity", "0.2");
  //
  // d3.select(this).select("circle").style("opacity", "1.0");
  // d3.select(this).select("text").style("opacity", "1.0");

  node.style("opacity", function(d) {
    if (highlightNodes.includes(d.id)) {
      return 1.0;
    }
    return 0.2;
  });

  link.style("opacity", function(d) {
    if (linksIntoNode.includes(d)) {
      return 1.0;
    }
    return 0.2;
  });

  // for (let linkIntoNode of linksIntoNode) {
  //   console.log(linkIntoNode);
  //   mouseover("", linkIntoNode);
  // }
}

function mouseout() {
  node.style("opacity", 1.0);
  link.style("opacity", 1.0);
}

var node = svg.selectAll("g")
               .data(nodes_data)
               .enter()
               .append("g")
               .on("mouseover", mouseover)
               .on("mouseout", mouseout);

node.append("circle")
     .attr("r", radius)
     .attr("fill", getNodeColor);

node.append("text")
      .attr("text-anchor", "middle")
      .style('fill', "black")
      .style('font-size', '14px')
      .style('font-weight', 'bold')
      .attr('x', 0)
      .attr('dy', 4)
      .text(function(d) {
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
        .attr("x2", function(d) {
          let diffX = d.target.x - d.source.x;
          let diffY = d.target.y - d.source.y;

          // Length of path from center of source node to center of target node
          let pathLength = Math.sqrt((diffX * diffX) + (diffY * diffY));

          // x and y distances from center to outside edge of target node
          let offsetX = (diffX * (radius / 2)) / pathLength;
          let offsetY = (diffY * (radius / 2)) / pathLength;

          return d.target.x - offsetX;
        })
        .attr("y2", function(d) {
          let diffX = d.target.x - d.source.x;
          let diffY = d.target.y - d.source.y;

          // Length of path from center of source node to center of target node
          let pathLength = Math.sqrt((diffX * diffX) + (diffY * diffY));

          // x and y distances from center to outside edge of target node
          let offsetX = (diffX * (radius / 2)) / pathLength;
          let offsetY = (diffY * (radius / 2)) / pathLength;

          return d.target.y - offsetY;
        });
}
