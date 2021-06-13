// DFS - stack으로 구현하기

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

function dfsStack(adjacent_graph, startNode) {
  const visited = [];
  const stack = [startNode];

  while (stack.length !== 0) {
    let popNode = stack.pop();
    visited.push(popNode);

    adjacent_graph[popNode].forEach((node) => {
      if (visited.indexOf(node) === -1) {
        stack.push(node);
      }
    });
  }
  return visited;
}

console.log(dfsStack(graph, 1)); // 1 이 시작노드입니다!
// [1, 9, 10, 5, 8, 6, 7, 2, 3, 4] 이 출력되어야 합니다!
