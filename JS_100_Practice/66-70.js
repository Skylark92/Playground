/* 문제66 : 블럭탑쌓기 */
// 탑을 쌓기 위해 각 크기별로 준비된 블럭들을 정해진 순서에 맞게 쌓아야 합니다. 순서에 맞게 쌓지 않으면 무너질 수 있습니다.

// 예를 들면 정해진 순서가 BAC 라면 A 다음 C가 쌓아져야 합니다. 선행으로 쌓아야 하는 블럭이 만족된 경우라면 탑이 무너지지 않습니다.

// - B를 쌓지 않아도 A와 C를 쌓을 수 있습니다.
// - B 다음 블럭이 C가 될 수 있습니다.

// 쌓아져 있는 블럭 탑이 순서에 맞게 쌓아져 있는지 확인하세요.

// 1. 블럭은 알파벳 대문자로 표기합니다.
// 2. 규칙에 없는 블럭이 사용될 수 있습니다.
// 3. 중복된 블럭은 존재하지 않습니다.

// 입력
// 탑 = ["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "EFGHZ"]
// 규칙 = "ABD"

// 출력
// ["가능", "불가능", "가능", "가능", "가능"]

// 답
const 탑 = ["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "EFGHZ"];
const 규칙 = "ABD";

function solution66(탑, 규칙) {
    let answer = [];
    for (let element of 탑) {
        answer.push(check(element, 규칙));
    }
    return answer;
}

function check(블록, 규칙) {
    let temp = 규칙.indexOf(규칙[0]);

    for (str of 블록) {
        if (규칙.includes(str)) {
            if (temp > 규칙.indexOf(str)) {
                return "불가능";
            }
            temp = 규칙.indexOf(str);
        }
    }
    return "가능";
}
console.log(solution66(탑, 규칙));

/* 문제67 : 민규의 악수 */
// 광장에서 모인 사람들과 악수를 하는 행사가 열렸습니다. 참가자인 민규는 몇명의 사람들과 악수를 한 후 중간에 일이 생겨 집으로 갔습니다.
// 이 행사에서 진행된 악수는 총 n번이라고 했을 때, 민규는 몇 번의 악수를 하고 집으로 돌아갔을까요?
// 그리고 민규를 포함한 행사 참가자는 몇 명일까요?

// - 악수는 모두 1대 1로 진행이 됩니다.
// - 민규를 제외한 모든 참가자는 자신을 제외한 참가자와 모두 한번씩 악수를 합니다.
// - 같은 상대와 중복된 악수는 카운트 하지 않습니다.
// - 민규를 제외한 참가자는 행사를 모두 마쳤습니다.

// 예를들어 행사에서 59회의 악수가 진행되었다면 민규는 4번의 악수를 하였고 민규를 포함한 참가자는 12명이다.

// 행사에서 진행된 악수 횟수(n)를 입력으로 받으면 민규의 악수 횟수와 행사 참가자 수가 출력됩니다.

// 입력
// 59

// 출력
// [4, 12] // [악수 횟수, 행사 참가자 수]

// 답
let input67 = 59;

function solution67(n) {
    let 사람 = 0;
    let 총악수 = 0;
    let temp = 0;
    while (true) {
        총악수 = parseInt((사람 * (사람 - 1)) / 2, 10);
        if (n < 총악수) {
            break;
        }
        temp = 총악수;
        사람 += 1;
    }
    return [parseInt(n - temp, 10), 사람];
}
console.log(solution67(input67));

/* 문제68 : 버스 시간표 */
// 학교가 끝난 지원이는 집에 가려고 합니다. 학교 앞에 있는 버스 시간표는 너무 복잡해서 버스 도착시간이 몇 분 남았는지 알려주는 프로그램을 만들고 싶습니다.

// 버스 시간표와 현재 시간이 주어졌을 때 버스 도착 시간이 얼마나 남았는지 알려주는 프로그램을 만들어주세요.

// - 버스 시간표와 현재 시간이 입력으로 주어집니다.
// - 출력 포맷은 "00시 00분"입니다.
//    만약 1시간 3분이 남았다면 "01시간 03분"으로 출력해야 합니다.
// - 버스 시간표에 현재 시간보다 이전인 버스가 있다면 "지나갔습니다."라고 출력합니다.

// 입력
// ["12:30", "13:20", "14:13"]
// "12:40"

// 출력
// ['지나갔습니다', '00시간 40분', '01시간 33분']

// 답
const 버스시간 = ["12:30", "13:20", "14:13"];
const 현재시간 = "12:40";

function solution68(버스시간, 기준시간) {
    let answer = [];
    기준시간 = 기준시간.split(":").map((n) => ~~n);
    기준시간 = 기준시간[0] * 60 + 기준시간[1];

    for (let i in 버스시간) {
        console.log(버스시간[i]);
        let time = 버스시간[i].split(":").map((n) => ~~n);
        time = time[0] * 60 + time[1];
        if (time < 기준시간) {
            answer.push("지나갔습니다.");
        } else {
            let 시간 = ~~((time - 기준시간) / 60);
            let 분 = (time - 기준시간) % 60;
            answer.push(String(시간).padStart(2, 0) + "시간 " + String(분).padStart(2, 0) + "분");
        }
    }

    return answer;
}

console.log(solution68(버스시간, 현재시간));

/* 문제69 : 골드바흐의 추측 */
// 골드바흐의 추측(Goldbach's conjecture)은 오래전부터 알려진 정수론의 미해결 문제로, 2보다 큰 모든 짝수는 두 개의 소수(Prime number)의 합으로 표시할 수 있다는 것이다. 이때 하나의 소수를 두 번 사용하는 것은 허용한다. - 위키백과

// 위 설명에서 2보다 큰 모든 짝수를 두 소수의 합으로 나타낸 것을 골드바흐 파티션이라고 합니다.

// 예)
// 100 == 47 + 53
// 56 == 19 + 37

// 2보다 큰 짝수 n이 주어졌을 때, 골드바흐 파티션을 출력하는 코드를 작성하세요.

// 해당 문제의 출력 형식은 자유롭습니다. 가능하시다면 골드바흐 파티션 모두를 출력하거나, 그 차가 작은 것을 출력하거나 그 차가 큰 것 모두 출력해보세요.

// 답
let prime = [];
let isPrime = true;
let val = 100;
let 골드바흐파티션 = [];

for (let i = 2; i < val; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false;
        }
    }
    if (isPrime) {
        prime.push(i);
    }
    isPrime = true;
}

for (let n of prime) {
    if (prime.includes(val - n) && n <= val - n) {
        골드바흐파티션.push([n, val - n]);
    }
}

let 차 = 골드바흐파티션.map((e) => e[1] - e[0]);

let 작은값 = 골드바흐파티션[차.indexOf(Math.min.apply(null, 차))];
let 큰값 = 골드바흐파티션[차.indexOf(Math.max.apply(null, 차))];

/* 문제70 : 행렬 곱하기 */
// 행렬 2개가 주어졌을 때 곱할 수 있는 행렬인지 확인하고 곱할 수 있다면 그 결과를 출력하고, 곱할 수 없다면 -1을 출력하는 프로그램을 만들어주세요.

// 입력
// a = [[1, 2],
// 		[2, 4]]

// b = [[1, 0],
// 		[0, 3]]

// 출력
// [[1, 6], [2, 12]]

const a = [
    [1, 2],
    [2, 4],
];

const b = [
    [1, 0],
    [0, 3],
];

let result = [
    [a[0][0] * b[0][0] + a[0][1] * b[1][0], a[0][0] * b[0][1] + a[0][1] * b[1][1]],
    [a[1][0] * b[0][0] + a[1][1] * b[1][0], a[1][0] * b[0][1] + a[1][1] * b[1][1]],
];

console.log(result);

function solution70(a, b) {
    const len = a.length;

    if (a[0].length === b.length) {
        let result = [];
        for (let i = 0; i < len; i++) {
            let row = [];
            for (let j = 0; j < len; j++) {
                let el = 0;
                for (let k = 0; k < len; k++) {
                    el += a[i][k] * b[k][j];
                }
                row.push(el);
            }
            result.push(row);
        }
        return result;
    } else {
        return -1;
    }
}

console.log(solution70(a, b));
