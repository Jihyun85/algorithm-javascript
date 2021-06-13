const graph = {
  1: [2, 5, 9],
  2: [1, 3],
  3: [2, 4],
  4: [3],
  5: [1, 6, 8],
  6: [5, 7],
  7: [6],
  8: [5],
  9: [1, 10],
  10: [9],
};

const visited = [];

function dfsRecursion(adjacentGraph, currentNode, visitedAry) {
  visitedAry.push(currentNode);

  adjacentGraph[currentNode].forEach((node) => {
    if (visited.indexOf(node) === -1) {
      return dfsRecursion(adjacentGraph, node, visitedAry);
    }
  });
}

if (adjacentGraph[currentNode].length === 1) return;
// 원래는 탈출 조건을 따로 줬는데, 쓸모가 없었다. => 어짜피 forEach로 돌려서 만약 if문이 해당 안되면 부모 노드에서 그 다음 요소가 대기타고 있으므로 괜찮음

dfsRecursion(graph, 1, visited);
console.log(visited);
