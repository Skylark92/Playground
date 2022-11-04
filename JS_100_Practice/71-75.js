/* 문제71 : 깊이 우선 탐색 */

// 깊이 우선 탐색이란 목표한 노드를 찾기 위해 가장 우선순위가 높은 노드의 자식으로 깊이 들어갔다가 목표 노드가 존재하지 않으면 처음 방문한 노드와 연결된 다른 노드부터 그 자식 노드로 파고드는 검색 방법을 말합니다.

// 다음과 같이 리스트 형태로 노드들의 연결 관계가 주어진다고 할 때 깊이 우선 탐색으로 이 노드들을 탐색했을 때의 순서를 공백으로 구분하여 출력하세요.

// 데이터
// graph = {'E': ['D', 'A'],
//          'F': ['D'],
//          'A': ['E', 'C', 'B'],
//          'B': ['A'],
//          'C': ['A'],
//          'D': ['E','F']}

// 출력
// E D F A C B

// 답
const graph71 = { E: ["D", "A"], F: ["D"], A: ["E", "C", "B"], B: ["A"], C: ["A"], D: ["E", "F"] };

const 순회할키 = Object.keys(graph71);

const 스택 = [순회할키[0]];
const answer71 = [];

while (스택.length) {
    let temp = 스택.pop();

    while (graph71[temp].length) {
        let check = graph71[temp].pop();
        if (answer71.includes(check)) {
            continue;
        } else {
            스택.push(check);
        }
    }

    answer71.push(temp);
}

console.log(answer71.join(" "));

/* 문제72 : 너비 우선 탐색 */

// 너비 우선 탐색이란 어떤 노드를 방문하여 확인한 후, 목표한 노드가 아니면 그 노드와 연결된 정점들 중에서 우선순위가 동일한 다른 노드를 찾고 그 순위에 없으면 그다음 순위 노드를 차례대로 찾는 방법이다.

// 다음과 같이 입력이 주어질 때 너비 우선 탐색을 한 순서대로 노드의 인덱스를 공백 구분으로 출력하세요.

// 데이터
// graph = {'E': ['D', 'A'],
//          'F': ['D'],
//          'A': ['E', 'C', 'B'],
//          'B': ['A'],
//          'C': ['A'],
//          'D': ['E','F']}

// 출력
// E D A F C B

// 답
const graph72 = { E: ["D", "A"], F: ["D"], A: ["E", "C", "B"], B: ["A"], C: ["A"], D: ["E", "F"] };

function solution72(대상, 시작) {
    const 큐 = [시작];
    const 실행 = [];

    while (큐.length) {
        let temp = 큐.shift();
        while (대상[temp].length) {
            let check = 대상[temp].shift();
            if (!실행.includes(check)) {
                큐.push(check);
            }
        }
        실행.push(temp);
    }
    return 실행;
}

console.log(solution72(graph72, "E").join(" "));

/* 문제73 : 최단 경로 찾기 */
// 다음과 같이 노드의 연결 관계가 리스트 형태로 주어집니다. 그다음 경로를 구할 두 정점이 공백으로 구분되어 주어질 것입니다.

// 두 정점 사이를 이동할 수 있는 최단 거리를 출력하는 프로그램을 작성해 주세요.

// 이 때 최단 거리란, 정점의 중복 없이 한 정점에서 다른 정점까지 갈 수 있는 가장 적은 간선의 수를 의미합니다.

// 데이터
// graph = {'A': ['B', 'C'],
//          'B': ['A', 'D', 'E'],
//          'C': ['A', 'F'],
//          'D': ['B'],
//          'E': ['B', 'F'],
//          'F': ['C', 'E']}

// 입력
// A F

// 출력
// 2

// 답
const graph73 = { A: ["B", "C"], B: ["A", "D", "E"], C: ["A", "F"], D: ["B"], E: ["B", "F"], F: ["C", "E"] };

function solution73(자료, 시작, 끝) {
    const 큐 = [시작];
    const 실행 = [시작];

    let count = -1;

    while (큐.length) {
        count++;
        let size = 큐.length;
        for (let i = 0; i < size; i++) {
            let node = 큐.shift();
            if (node == 끝) {
                return count;
            }
            for (let next_node in 자료[node]) {
                if (!실행.includes(자료[node][next_node])) {
                    실행.push(자료[node][next_node]);
                    큐.push(자료[node][next_node]);
                }
            }
        }
    }
}
console.log(solution73(graph73, "A", "F"));

/* 문제74 : 최장 경로 찾기 */
// 다음과 같이 노드의 연결 관계가 주어집니다. 입력으로는 경로를 구할 두 정점의 번호가 공백으로 구분되어 주어집니다. 우리는 이 두 정점으로 가기 위한 최대 거리를 구하고자 합니다.

// 최대 거리란, 정점의 중복 없이 한 정점에서 다른 정점까지 경유할 수 있는 가장 많은 간선의 수를 뜻합니다.

// 데이터
// graph = {1: [2, 3, 4],
// 				 2: [1, 3, 4, 5, 6],
// 				 3: [1, 2, 7],
// 				 4: [1, 2, 5, 6],
// 				 5: [2, 4, 6, 7],
// 				 6: [2, 4, 5, 7],
// 				 7: [3, 5, 6]}

// 입력
// 1 7

// 출력
// 6

// 답
const graph74 = { 1: [2, 3, 4], 2: [1, 3, 4, 5, 6], 3: [1, 2, 7], 4: [1, 2, 5, 6], 5: [2, 4, 6, 7], 6: [2, 4, 5, 7], 7: [3, 5, 6] };

function solution74(자료, 시작, 끝) {
    const 큐 = [시작];
    const 실행 = [];
}
/* 문제75 : 이상한 369 */
// 369 게임을 하는데 조금 이상한 규칙이 있습니다. 3이나 6, 9 일 때만 박수를 쳐야합니다. 예를 들어 13, 16과 같이 3과 6, 9 만으로 된 숫자가 아닐 경우엔 박수를 치지 않습니다.
// 수현이는 박수를 몇 번 쳤는지 확인하고 싶습니다. 36일 때 박수를 쳤다면 박수를 친 횟수는 5번입니다.

// n을 입력하면 박수를 몇 번 쳤는지 그 숫자를 출력해주세요.

// 입력
// '93'

// 출력
// 10

// 답
function solution75(num) {
    let 박수 = 0;
    for (let i = 1; i <= num; i++) {
        if (
            String(i).length ===
            String(i)
                .split("")
                .filter((el) => el === "3" || el === "6" || el === "9").length
        ) {
            박수++;
        }
    }
    return 박수;
}

console.log(solution75(100));
