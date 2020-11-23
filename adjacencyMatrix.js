// Your task is to determine if two nodes are adjacent in a graph when given the adjacency matrix and the two nodes.


// Input: Nodes and the adjacency matrix
// Output: Boolean reflecting whether the two are adjacent

// Constraints: 100 ms
// 0 - 25,000 nodes on the graph

const adjacencyMatrix = (nodes, adjMatrix) => {
    console.time('Timing Matrix: ');
    const row = adjMatrix[nodes[0]];
    if (row[nodes[1]] === 1) {
        console.timeEnd('Timing Matrix: ');
        return true;
    } else {
        console.timeEnd('Timing Matrix: ');
        return false;
    }
}

console.log(adjacencyMatrix([0, 3], [
    [0, 1, 0, 1, 1],
    [1, 0, 1, 0, 0],
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 1, 0]
]));
console.log(adjacencyMatrix([1, 4], [
    [0, 1, 0, 1, 1],
    [1, 0, 1, 0, 0],
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 1, 0]
]));