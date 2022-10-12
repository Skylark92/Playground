/* 문제 16 : 로꾸거 */
// 문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.

// 입출력
// 입력 : 거꾸로
// 출력 : 로꾸거

//답
let input16 = prompt("거꾸로 만들어 드릴게요");

console.log(input16.split("").reverse().join(""));

/* 문제 17 : 놀이기구 키 제한 */
// 유주는 놀이공원 아르바이트 중입니다. 그런데 놀이기구마다 키 제한이 있습니다.
// 유주가 담당하는 놀이기구는 키가 150cm 이상만 탈 수 있습니다.

// 입력으로 키가 주어지면 키가 150이 넘으면 YES를 틀리면 NO를 출력하는 프로그램을 작성하세요.

// 답
let input17 = prompt("키는 몇입니까?");
console.log(typeof input17);
if (+input17 > 150) {
    console.log(typeof input17);
    console.log("YES");
} else {
    console.log("NO");
}

/* 문제 18 : 평균 점수 */
// 영하네 반은 국어, 수학, 영어 시험을 보았습니다. 영하는 친구들의 평균 점수를 구해주기로 했습니다.

// 공백으로 구분하여 세 과목의 점수가 주어지면 전체 평균 점수를 구하는 프로그램을 작성하세요.
// 단, 소숫점 자리는 모두 버립니다.

// 입출력
// 입력 : 20 30 40
// 출력 30

let input18 = prompt("세 과믁의 점수를 공백으로 구분하여 입력해주세요.");

let result18 = 0;
if (input18.split(" ").length !== 3) {
    alert("뭔가 잘못되었습니다...");
} else {
    for (i = 0; i < input18.split(" ").length; i++) {
        result18 = input18.split(" ").reduce((a, b) => +a + +b) / input18.split(" ").length;
    }
    console.log(Math.floor(result18));
}

/* 문제 19 : 제곱을 구하자 */
// 공백으로 구분하여 두 숫자 a와 b가 주어지면, a의 b승을 구하는 프로그램을 작성하세요.

// 답
let input19 = prompt("두 숫자를 제발 공백으로 구분하여 입력해주세요.");

console.log(input19.split(" ").reduce((x, y) => (+x) ** +y));

/* 문제 20 : 몫과 나머지 */
// 공백으로 구분하여 두 숫자가 주어집니다.
// 두 번째 숫자로 첫 번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하세요.

// 입출력
// 입력 : 10 2
// 출력 : 5 0

// 답
let input20 = prompt("두 숫자를 제발 공백으로 구분하여 입력해주세요.");

let 몫20 = Math.floor(input20.split(" ").reduce((_, __) => +_ / +__));
let 나머지20 = input20.split(" ").reduce((_, __) => +_ % +__);

console.log(`몫은 ${몫20}, 나머지는 ${나머지20}입니다.`);
