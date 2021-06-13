// BFS - queue로 구현

const graph = {
  1: [2, 3, 4],
  2: [1, 5],
  3: [1, 6, 7],
  4: [1, 8],
  5: [2, 9],
  6: [3, 10],
  7: [3],
  8: [4],
  9: [5],
  10: [6],
};

function bfsQueue(adjGraph, startNode) {
  const queue = [startNode];
  const visited = [];

  while (queue.length > 0) {
    let shiftNode = queue.shift();
    visited.push(shiftNode);
    adjGraph[shiftNode].forEach((node) => {
      if (visited.indexOf(node) === -1) queue.push(node);
    });
  }
  return visited;
}

console.log(bfsQueue(graph, 1));
