var showGradClasses = true;

const width = 1200;
const height = 1000;

const radius = 20;

var hexOfColor = {
  "aliceblue":"#f0f8ff", "antiquewhite":"#faebd7", "aqua":"#00ffff", "aquamarine":"#7fffd4", "azure":"#f0ffff",  "beige":"#f5f5dc", "bisque":"#ffe4c4", "black":"#000000", "blanchedalmond":"#ffebcd", "blue":"#0000ff", "blueviolet":"#8a2be2", "brown":"#a52a2a", "burlywood":"#deb887",  "cadetblue":"#5f9ea0", "chartreuse":"#7fff00", "chocolate":"#d2691e", "coral":"#ff7f50", "cornflowerblue":"#6495ed", "cornsilk":"#fff8dc", "crimson":"#dc143c", "cyan":"#00ffff",  "darkblue":"#00008b", "darkcyan":"#008b8b", "darkgoldenrod":"#b8860b", "darkgray":"#a9a9a9", "darkgreen":"#006400", "darkkhaki":"#bdb76b", "darkmagenta":"#8b008b", "darkolivegreen":"#556b2f",  "darkorange":"#ff8c00", "darkorchid":"#9932cc", "darkred":"#8b0000", "darksalmon":"#e9967a", "darkseagreen":"#8fbc8f", "darkslateblue":"#483d8b", "darkslategray":"#2f4f4f", "darkturquoise":"#00ced1",  "darkviolet":"#9400d3", "deeppink":"#ff1493", "deepskyblue":"#00bfff", "dimgray":"#696969", "dodgerblue":"#1e90ff",  "firebrick":"#b22222", "floralwhite":"#fffaf0", "forestgreen":"#228b22", "fuchsia":"#ff00ff",  "gainsboro":"#dcdcdc", "ghostwhite":"#f8f8ff", "gold":"#ffd700", "goldenrod":"#daa520", "gray":"#808080", "green":"#008000", "greenyellow":"#adff2f",
  "honeydew":"#f0fff0", "hotpink":"#ff69b4", "indianred ":"#cd5c5c", "indigo":"#4b0082", "ivory":"#fffff0", "khaki":"#f0e68c",  "lavender":"#e6e6fa", "lavenderblush":"#fff0f5", "lawngreen":"#7cfc00", "lemonchiffon":"#fffacd", "lightblue":"#add8e6", "lightcoral":"#f08080", "lightcyan":"#e0ffff", "lightgoldenrodyellow":"#fafad2",  "lightgrey":"#d3d3d3", "lightgreen":"#90ee90", "lightpink":"#ffb6c1", "lightsalmon":"#ffa07a", "lightseagreen":"#20b2aa", "lightskyblue":"#87cefa", "lightslategray":"#778899", "lightsteelblue":"#b0c4de",  "lightyellow":"#ffffe0", "lime":"#00ff00", "limegreen":"#32cd32", "linen":"#faf0e6",  "magenta":"#ff00ff", "maroon":"#800000", "mediumaquamarine":"#66cdaa", "mediumblue":"#0000cd", "mediumorchid":"#ba55d3", "mediumpurple":"#9370d8", "mediumseagreen":"#3cb371", "mediumslateblue":"#7b68ee",        "mediumspringgreen":"#00fa9a", "mediumturquoise":"#48d1cc", "mediumvioletred":"#c71585", "midnightblue":"#191970", "mintcream":"#f5fffa", "mistyrose":"#ffe4e1", "moccasin":"#ffe4b5", "navajowhite":"#ffdead", "navy":"#000080",  "oldlace":"#fdf5e6", "olive":"#808000", "olivedrab":"#6b8e23", "orange":"#ffa500", "orangered":"#ff4500", "orchid":"#da70d6",  "palegoldenrod":"#eee8aa",
  "palegreen":"#98fb98", "paleturquoise":"#afeeee", "palevioletred":"#d87093", "papayawhip":"#ffefd5", "peachpuff":"#ffdab9", "peru":"#cd853f", "pink":"#ffc0cb", "plum":"#dda0dd", "powderblue":"#b0e0e6", "purple":"#800080",  "rebeccapurple":"#663399", "red":"#ff0000", "rosybrown":"#bc8f8f", "royalblue":"#4169e1",  "saddlebrown":"#8b4513", "salmon":"#fa8072", "sandybrown":"#f4a460", "seagreen":"#2e8b57", "seashell":"#fff5ee", "sienna":"#a0522d", "silver":"#c0c0c0", "skyblue":"#87ceeb", "slateblue":"#6a5acd", "slategray":"#708090", "snow":"#fffafa", "springgreen":"#00ff7f", "steelblue":"#4682b4",   "tan":"#d2b48c", "teal":"#008080", "thistle":"#d8bfd8", "tomato":"#ff6347", "turquoise":"#40e0d0", "violet":"#ee82ee",   "wheat":"#f5deb3", "white":"#ffffff", "whitesmoke":"#f5f5f5", "yellow":"#ffff00", "yellowgreen":"#9acd32"
};

const svg = d3.select('#coursemap')
  .append('svg')
  .attr('width', width)
  .attr('height', height);

const undergrad_nodes_data = [
  {},
  {"id": "104", "name": "104", "type": "analysis", "level": "core"},
  {"id": "105", "name": "105", "type": "analysis", "level": "elective"},
  {"id": "110", "name": "110", "type": "linear algebra", "level": "core"},
  {"id": "113", "name": "113", "type": "abstract algebra", "level": "core"},
  {"id": "114", "name": "114", "type": "abstract algebra", "level": "elective"},
  {"id": "115", "name": "115", "type": "number theory", "level": "elective"},
  {"id": "116", "name": "116", "type": "number theory", "level": "elective"},
  {"id": "118", "name": "118", "type": "analysis", "level": "elective"},
  {"id": "121A", "name": "121A", "type": "applied", "level": "elective"},
  {"id": "121B", "name": "121B", "type": "applied", "level": "elective"},
  {"id": "123", "name": "123", "type": "analysis", "level": "elective"},
  {"id": "124", "name": "124", "type": "applied", "level": "elective"},
  {"id": "125A", "name": "125A", "type": "logic", "level": "elective"},
  {"id": "126", "name": "126", "type": "analysis", "level": "elective"},
  {"id": "127", "name": "127", "type": "applied", "level": "elective"},
  {"id": "128A", "name": "128A", "type": "applied", "level": "core"},
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
  {"id": "185", "name": "185", "type": "analysis", "level": "core"},
  {"id": "32", "name": "32", "type": "lower-div", "level": "lower-div"},
  {"id": "1A", "name": "1A", "type": "lower-div", "level": "lower-div"},
  {"id": "1B", "name": "1B", "type": "lower-div", "level": "lower-div"},
  {"id": "53", "name": "53", "type": "analysis", "level": "lower-div2"},
  {"id": "54", "name": "54", "type": "linear algebra", "level": "lower-div2"},
  {"id": "55", "name": "55", "type": "discrete", "level": "lower-div2"},
  {"id": "C103", "name": "C103", "type": "applied", "level": "elective"}
];

const grad_nodes_data = [
  {"id": "202A", "name": "202A", "type": "analysis", "level": "grad-core"},
  {"id": "202B", "name": "202B", "type": "analysis", "level": "grad-core"},
  {"id": "250A", "name": "250A", "type": "abstract algebra", "level": "grad-core"},
  {"id": "250B", "name": "250B", "type": "abstract algebra", "level": "grad-core"},
  {"id": "205", "name": "205", "type": "analysis", "level": "grad-elective"},
  {"id": "206", "name": "206", "type": "analysis", "level": "grad-elective"},
  {"id": "208", "name": "208", "type": "analysis", "level": "grad-elective"},
  {"id": "209", "name": "209", "type": "analysis", "level": "grad-elective"},
  {"id": "212", "name": "212", "type": "analysis", "level": "grad-elective"},
  {"id": "C218A", "name": "C218A", "type": "applied", "level": "grad-elective"},
  {"id": "C218B", "name": "C218B", "type": "applied", "level": "grad-elective"},
  {"id": "219", "name": "219", "type": "analysis", "level": "grad-elective"},
  {"id": "222A", "name": "222A", "type": "analysis", "level": "grad-elective"},
  {"id": "222B", "name": "222B", "type": "analysis", "level": "grad-elective"},
  {"id": "C223A", "name": "C223A", "type": "applied", "level": "grad-elective"},
  {"id": "C223B", "name": "C223B", "type": "applied", "level": "grad-elective"},
  {"id": "258", "name": "258", "type": "analysis", "level": "grad-elective"},
  {"id": "245A", "name": "245A", "type": "abstract algebra", "level": "grad-elective"},
  {"id": "252", "name": "252", "type": "abstract algebra", "level": "grad-elective"},
  {"id": "255", "name": "255", "type": "abstract algebra", "level": "grad-elective"},
  {"id": "257", "name": "257", "type": "abstract algebra", "level": "grad-elective"},
  {"id": "261A", "name": "261A", "type": "abstract algebra", "level": "grad-elective"},
  {"id": "261B", "name": "261B", "type": "abstract algebra", "level": "grad-elective"},
  {"id": "254A", "name": "254A", "type": "number theory", "level": "grad-elective"},
  {"id": "254B", "name": "254B", "type": "number theory", "level": "grad-elective"},
  {"id": "249", "name": "249", "type": "discrete", "level": "grad-elective"},
  {"id": "214", "name": "214", "type": "geometry", "level": "grad-elective"},
  {"id": "215A", "name": "215A", "type": "geometry", "level": "grad-elective"},
  {"id": "215B", "name": "215B", "type": "geometry", "level": "grad-elective"},
  {"id": "240", "name": "240", "type": "geometry", "level": "grad-elective"},
  {"id": "241", "name": "241", "type": "geometry", "level": "grad-elective"},
  {"id": "242", "name": "242", "type": "geometry", "level": "grad-elective"},
  {"id": "256A", "name": "256A", "type": "geometry", "level": "grad-elective"},
  {"id": "256B", "name": "256B", "type": "geometry", "level": "grad-elective"},
  {"id": "224A", "name": "224A", "type": "applied", "level": "grad-elective"},
  {"id": "224B", "name": "224B", "type": "applied", "level": "grad-elective"},
  {"id": "228A", "name": "228A", "type": "applied", "level": "grad-elective"},
  {"id": "228B", "name": "228B", "type": "applied", "level": "grad-elective"},
  {"id": "221", "name": "221", "type": "linear algebra", "level": "grad-elective"},
  {"id": "225A", "name": "225A", "type": "logic", "level": "grad-elective"},
  {"id": "225B", "name": "225B", "type": "logic", "level": "grad-elective"},
  {"id": "229", "name": "229", "type": "logic", "level": "grad-elective"},
  {"id": "235A", "name": "235A", "type": "logic", "level": "grad-elective"},
  {"id": "236", "name": "236", "type": "logic", "level": "grad-elective"}
];

const undergrad_links_data = [
  {"source": "32", "target": "1A", "type": "department"},
  {"source": "1A", "target": "1B", "type": "department"},
  {"source": "1B", "target": "53", "type": "department"},
  {"source": "1B", "target": "54", "type": "department"},
  {"source": "1B", "target": "55", "type": "department"},
  {"source": "53", "target": "104", "type": "department"},
  {"source": "53", "target": "110", "type": "musa"},
  {"source": "53", "target": "113", "type": "musa"},
  {"source": "54", "target": "104", "type": "department"},
  {"source": "54", "target": "110", "type": "department"},
  {"source": "54", "target": "113", "type": "department"},
  {"source": "55", "target": "104", "type": "department"},
  {"source": "55", "target": "110", "type": "musa"},
  {"source": "55", "target": "113", "type": "department"},
  {"source": "104", "target": "105", "type": "department"},
  {"source": "110", "target": "105", "type": "musa"},
  {"source": "104", "target": "185", "type": "department"},
  {"source": "53", "target": "C103", "type": "department"},
  {"source": "54", "target": "C103", "type": "department"},
  {"source": "104", "target": "C103", "type": "musa"},
  {"source": "110", "target": "114", "type": "department"},
  {"source": "113", "target": "114", "type": "department"},
  {"source": "55", "target": "115", "type": "department"},
  {"source": "55", "target": "116", "type": "department"},
  {"source": "110", "target": "116", "type": "musa"},
  {"source": "113", "target": "116", "type": "musa"},
  {"source": "115", "target": "116", "type": "musa"},
  {"source": "53", "target": "118", "type": "department"},
  {"source": "54", "target": "118", "type": "department"},
  {"source": "104", "target": "118", "type": "musa"},
  {"source": "110", "target": "118", "type": "musa"},
  {"source": "53", "target": "121A", "type": "department"},
  {"source": "54", "target": "121A", "type": "department"},
  {"source": "53", "target": "121B", "type": "department"},
  {"source": "54", "target": "121B", "type": "department"},
  {"source": "104", "target": "123", "type": "department"},
  {"source": "110", "target": "123", "type": "musa"},
  {"source": "53", "target": "124", "type": "department"},
  {"source": "54", "target": "124", "type": "department"},
  {"source": "55", "target": "124", "type": "department"},
  {"source": "53", "target": "126", "type": "department"},
  {"source": "54", "target": "126", "type": "department"},
  {"source": "104", "target": "126", "type": "musa"},
  {"source": "110", "target": "126", "type": "musa"},
  {"source": "53", "target": "127", "type": "department"},
  {"source": "54", "target": "127", "type": "department"},
  {"source": "55", "target": "127", "type": "department"},
  {"source": "53", "target": "128A", "type": "department"},
  {"source": "54", "target": "128A", "type": "department"},
  {"source": "110", "target": "128B", "type": "department"},
  {"source": "128A", "target": "128B", "type": "department"},
  {"source": "110", "target": "130", "type": "department"},
  {"source": "113", "target": "130", "type": "department"},
  {"source": "104", "target": "125A", "type": "department"},
  {"source": "113", "target": "125A", "type": "department"},
  {"source": "104", "target": "135", "type": "department"},
  {"source": "113", "target": "135", "type": "department"},
  {"source": "104", "target": "136", "type": "department"},
  {"source": "113", "target": "136", "type": "department"},
  {"source": "104", "target": "140", "type": "department"},
  {"source": "110", "target": "140", "type": "musa"},
  {"source": "104", "target": "141", "type": "department"},
  {"source": "110", "target": "141", "type": "department"},
  {"source": "104", "target": "142", "type": "department"},
  {"source": "113", "target": "142", "type": "department"},
  {"source": "104", "target": "143", "type": "musa"},
  {"source": "113", "target": "143", "type": "department"},
  {"source": "53", "target": "151", "type": "department"},
  {"source": "54", "target": "152", "type": "department"},
  {"source": "113", "target": "152", "type": "department"},
  {"source": "151", "target": "152", "type": "department"},
  {"source": "104", "target": "160", "type": "musa"},
  {"source": "113", "target": "160", "type": "department"},
  {"source": "53", "target": "170", "type": "department"},
  {"source": "54", "target": "170", "type": "department"},
  {"source": "104", "target": "170", "type": "musa"},
  {"source": "110", "target": "170", "type": "musa"},
  {"source": "54", "target": "172", "type": "musa"},
  {"source": "55", "target": "172", "type": "department"},
  {"source": "113", "target": "172", "type": "musa"}
];

const grad_links_data = [
  {"source": "104", "target": "202A", "type": "department"},
  {"source": "141", "target": "202A", "type": "musa"},
  {"source": "142", "target": "202A", "type": "musa"},
  {"source": "105", "target": "202A", "type": "musa"},
  {"source": "110", "target": "202A", "type": "musa"},
  {"source": "110", "target": "202B", "type": "department"},
  {"source": "202A", "target": "202B", "type": "department"},
  {"source": "110", "target": "250A", "type": "musa"},
  {"source": "113", "target": "250A", "type": "department"},
  {"source": "250A", "target": "250B", "type": "department"},
  {"source": "185", "target": "205", "type": "department"},
  {"source": "202A", "target": "205", "type": "musa"},
  {"source": "202B", "target": "206", "type": "department"},
  {"source": "206", "target": "208", "type": "department"},
  {"source": "206", "target": "209", "type": "department"},
  {"source": "208", "target": "209", "type": "musa"},
  {"source": "141", "target": "214", "type": "musa"},
  {"source": "202A", "target": "214", "type": "department"},
  {"source": "205", "target": "212", "type": "musa"},
  {"source": "185", "target": "212", "type": "department"},
  {"source": "202B", "target": "212", "type": "department"},
  {"source": "113", "target": "215A", "type": "department"},
  {"source": "142", "target": "215A", "type": "musa"},
  {"source": "202A", "target": "215A", "type": "department"},
  {"source": "250A", "target": "215A", "type": "musa"},
  {"source": "214", "target": "215B", "type": "musa"},
  {"source": "215A", "target": "215B", "type": "department"},
  {"source": "202A", "target": "C218A", "type": "department"},
  {"source": "C218A", "target": "C218B", "type": "department"},
  {"source": "202B", "target": "219", "type": "department"},
  {"source": "214", "target": "219", "type": "department"},
  {"source": "172", "target": "249", "type": "musa"},
  {"source": "250A", "target": "249", "type": "department"},
  {"source": "125A", "target": "225A", "type": "department"},
  {"source": "135", "target": "225A", "type": "department"},
  {"source": "125A", "target": "225B", "type": "department"},
  {"source": "135", "target": "225B", "type": "department"},
  {"source": "136", "target": "225B", "type": "department"},
  {"source": "104", "target": "228A", "type": "department"},
  {"source": "110", "target": "228A", "type": "department"},
  {"source": "128A", "target": "228A", "type": "department"},
  {"source": "126", "target": "228B", "type": "department"},
  {"source": "228A", "target": "228B", "type": "department"},
  {"source": "225A", "target": "229", "type": "department"},
  {"source": "125A", "target": "235A", "type": "department"},
  {"source": "135", "target": "235A", "type": "department"},
  {"source": "214", "target": "240", "type": "department"},
  {"source": "110", "target": "221", "type": "department"},
  {"source": "228A", "target": "221", "type": "department"},
  {"source": "202A", "target": "222A", "type": "department"},
  {"source": "202A", "target": "222B", "type": "department"},
  {"source": "202B", "target": "222B", "type": "musa"},
  {"source": "222A", "target": "222B", "type": "musa"},
  {"source": "126", "target": "224A", "type": "musa"},
  {"source": "202A", "target": "224A", "type": "department"},
  {"source": "224A", "target": "224B", "type": "department"},
  {"source": "205", "target": "241", "type": "department"},
  {"source": "214", "target": "240", "type": "department"},
  {"source": "140", "target": "240", "type": "musa"},
  {"source": "240", "target": "241", "type": "musa"},
  {"source": "214", "target": "242", "type": "department"},
  {"source": "241", "target": "242", "type": "musa"},
  {"source": "215A", "target": "241", "type": "department"},
  {"source": "115", "target": "254A", "type": "musa"},
  {"source": "185", "target": "254A", "type": "musa"},
  {"source": "250A", "target": "254A", "type": "department"},
  {"source": "250B", "target": "254A", "type": "musa"},
  {"source": "254A", "target": "254B", "type": "department"},
  {"source": "250B", "target": "255", "type": "department"},
  {"source": "143", "target": "256A", "type": "musa"},
  {"source": "250B", "target": "256A", "type": "department"},
  {"source": "256A", "target": "256B", "type": "department"},
  {"source": "118", "target": "258", "type": "musa"},
  {"source": "185", "target": "258", "type": "musa"},
  {"source": "206", "target": "258", "type": "department"},
  {"source": "214", "target": "261A", "type": "department"},
  {"source": "250A", "target": "261A", "type": "musa"},
  {"source": "261A", "target": "261B", "type": "department"},
  {"source": "250A", "target": "257", "type": "department"},
  {"source": "110", "target": "252", "type": "musa"},
  {"source": "250A", "target": "252", "type": "department"},
  {"source": "113", "target": "245A", "type": "department"},
  {"source": "114", "target": "245A", "type": "musa"},
  {"source": "250A", "target": "245A", "type": "musa"},
  {"source": "225A", "target": "236", "type": "department"},
  {"source": "225B", "target": "236", "type": "department"},
  {"source": "C218B", "target": "C223A", "type": "department"},
  {"source": "C223A", "target": "C223B", "type": "department"}
];

var nodes_data = undergrad_nodes_data.concat(grad_nodes_data);
var links_data = undergrad_links_data.concat(grad_links_data);

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
  "education",
  "logic",
  "linear algebra",
  "geometry",
  "lower-div",
  "analysis",
  "applied"
];

// const types = [
//     "applied",
//     "analysis",
//     // "lower-div",
//     "geometry",
//     "linear algebra",
//     "logic",
//     "education",
//     "abstract algebra",
//     "discrete",
//     "number theory"
// ];

const levels = ["lower-div",
                "lower-div2",
                "core",
                "elective"];
                // "grad-core",
                // "grad-elective"];

const type_colors = {"lower-div": "darkgray",
                     "analysis": "orangered",
                     "abstract algebra": "limegreen",
                     "number theory": "rosybrown",
                     "geometry": "orange",
                     "education": "orchid",
                     "applied": "turquoise",
                     "linear algebra": "deepskyblue",
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

var link_force = d3.forceLink(links_data)
                   .id(d => d.id);

var charge_force = d3.forceManyBody()
                     .strength(0);

var center_force = d3.forceCenter(width / 2, height / 2).strength(0);

var collision_force = d3.forceCollide(radius * 2);

var force_x = d3.forceX().x(function(d) {
  if (d.type == "lower-div") {
    return width / 2;
  }
  let index = types.indexOf(d.type);
  if (index == -1) {
    console.log(d.type);
  }
  let spacing = width / (types.length + 1);
  return index * spacing + (spacing / 2);
});

force_x.strength(3.5);

const level_y_coords = {
  "lower-div": 100,
  "lower-div2": 150,
  "core": 250,
  "elective": 550,
  "grad-core": 600,
  "grad-elective": 800
};

var force_y = d3.forceY().y(function(d) {
  // let index = levels.indexOf(d.level);
  // let spacing = height / (levels.length);
  // return index * spacing + (spacing / 2);

  // console.log(level_y_coords[d.level]);

  if (d.level == undefined || d.id == "32") {
    return 50;
  }
  return level_y_coords[d.level];
});

force_y.strength(3);

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

simulation
    .force("charge_force", charge_force)
    .force("center_force", center_force)
    .force("x", force_x)
    .force("y", force_y)
    .force("collide", collision_force)
    .force("links",link_force);


simulation.on("tick", tickActions);

function getNodeColor(d) {
  if (d.id == "53" || d.id == "54" || d.id == "55") {
    return type_colors["lower-div"];
  }
  return type_colors[d.type];
}

var defs = svg.append("svg:defs");

function marker(color) {
    let hexCode = hexOfColor[color];
    defs.append("svg:marker")
        .attr("id", hexCode.replace("#", ""))
        .attr("viewBox", "0 -5 10 10")
        .attr("refX", 10) // This sets how far back it sits, kinda
        .attr("refY", 0)
        .attr("markerWidth", 15)
        .attr("markerHeight", 15)
        .attr("orient", "auto")
        .attr("markerUnits", "userSpaceOnUse")
        .append("svg:path")
        .attr("d", "M0,-5L10,0L0,5")
        .style("fill", hexCode);
    return "url(" + hexCode + ")";
};

//draw lines for the links
var link = svg.append("g")
      .attr("class", "links")
    .selectAll("line")
    .data(links_data)
    .enter().append("line")
    .attr("stroke-width", 2)
    .style("stroke-dasharray", function(d) {
      if (d.type == "department") {
        return ("1", "0");
      }
      return ("3", "5");
    })
    .attr("stroke", d => getNodeColor(d.source))
    .attr('marker-end', d => marker(getNodeColor(d.source)));

function mouseover(event, d) {
  // d is the node being hovered, e.g.
  // {"id": "1A", "name": "1A", ...}
  if (!showGradClasses && (d.level == "grad-core" || d.level == "grad-elective")) {
    return;
  }

  let linksIntoNode = getAllLinksIntoNode(d.id);
  let highlightNodes = [d.id];
  for (let linkIntoNode of linksIntoNode) {
    highlightNodes.push(linkIntoNode.source.id);
  }

  node.style("opacity", function(d) {
    if (highlightNodes.includes(d.id)) {
      return 1.0;
    }
    if (!showGradClasses && (d.level == "grad-core" || d.level == "grad-elective")) {
      return 0.0;
    }
    return 0.2;
  });

  node.select("circle").style("stroke", function(d) {
    if (highlightNodes.includes(d.id)) {
      return "black";
    }
    return "";
  });

  link.style("opacity", function(d) {
    if (!showGradClasses && (d.target.level == "grad-core" || d.target.level == "grad-elective")) {
      return 0.0;
    }
    if (linksIntoNode.includes(d)) {
      return 1.0;
    }
    return 0.2;
  });

  link.style("stroke-width", function(d) {
    if (linksIntoNode.includes(d)) {
      return 3;
    }
    return 2;
  });
}

function mouseout() {
  node.style("opacity", function(d) {
    if (d.level == "grad-core" || d.level == "grad-elective") {
      if (showGradClasses) {
        return 1.0;
      }
      return 0.0;
    }
    return 1.0;
  });

  node.select("circle").style("stroke", "");

  node.select("circle").attr("r", radius);

  link.style("opacity", function(d) {
    if (d.target.level == "grad-core" || d.target.level == "grad-elective") {
      if (showGradClasses) {
        return 1.0;
      }
      return 0.0;
    }
    return 1.0;
  });

  link.style("stroke-width", 1.5);
}

var node = svg.selectAll("g")
               .data(nodes_data)
               .enter()
               .append("g")
               .on("mouseover", mouseover)
               .on("mouseout", mouseout);

node.append("circle")
     .attr("r", radius)
     .attr("fill", getNodeColor)
     .attr("stroke-width", 3);

node.append("text")
      .attr("text-anchor", "middle")
      .style('fill', "black")
      .style('font-size', '16px')
      .style('font-weight', 'bold')
      .attr('x', 0)
      .attr('dy', 5)
      .text(d => d.id);

function toggleGradClasses() {
  showGradClasses = !showGradClasses;

  if (showGradClasses) {
    document.getElementById("coursemap").height.baseVal.value = 1000;
    try {
      document.getElementById("toggle-grads").innerText = "Hide Grad Classes";
    } catch (error) {
      // meh
    }
  } else {
    document.getElementById("coursemap").height.baseVal.value = 650;
    try {
      document.getElementById("toggle-grads").innerText = "Show Grad Classes";
    } catch (error) {
      // meh
    }
  }

  mouseout();
  simulation.alpha(0.25).restart();
}

function tickActions() {
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
          let offsetX = (diffX * (radius)) / pathLength;
          let offsetY = (diffY * (radius)) / pathLength;

          return d.target.x - offsetX;
        })
        .attr("y2", function(d) {
          let diffX = d.target.x - d.source.x;
          let diffY = d.target.y - d.source.y;

          // Length of path from center of source node to center of target node
          let pathLength = Math.sqrt((diffX * diffX) + (diffY * diffY));

          // x and y distances from center to outside edge of target node
          let offsetX = (diffX * (radius)) / pathLength;
          let offsetY = (diffY * (radius)) / pathLength;

          return d.target.y - offsetY;
        });
}

toggleGradClasses();
