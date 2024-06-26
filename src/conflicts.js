import levelThings from "./levelThings";

let c = [
    // Layer 0
    ["**", "*0", "*1", "*2", "*3", "*4", "*5", "*B", "*/",
     "M1", "M2", "M3", "M4", "M5", "M6",
     "G1", "G2", "W1", "W2", "W3",
     "d1", "d2", "d3",
     "J1", "J2", "J3", "J4",
     "I0"
    ],
    // Encasing blockers
    ["D1", "D2",
     "b1", "b2", "b3",
     "c1", "c2", "c3", "c4", "c5"
    ],
    // Buttons
    ["B1", "B2", "B3"],
    // Paint
    ["PT"],
    // Spawn points
    ["*S"].concat(levelThings.customSpawns),
    // Walls
    ["E^"],
    ["Ev"],
    ["E<"],
    ["E>"],
    // Plastic Capsules
    ["p1", "p2"]
]

c.push(c[0].slice(8).concat(levelThings.fixable))

export default c;