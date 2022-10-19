/* 문제 41 : 소수판별 */
// 숫자가 주어지면 소수인지 아닌지 판별하는 프로그램을 작성해주세요. 소수이면 YES로, 소수가 아니면 NO로 출력해주세요. (소수 : 1과 자기 자신만으로 나누어떨어지는 1보다 큰 양의 정수)

// 답
let input41 = +prompt("숫자");
let answer41 = "YES";

for (i = 2; i < input41; i++) {
    if (input41 % i === 0 && input41 !== 2) {
        answer41 = "NO";
        break;
    }
}

console.log(answer41);
// 이상한 값 입력 받았을 경우 처리 미비, 크기가 큰 소수를 만났을 때 처리 속도 //

/* 문제 42 : 2020년 */
// 2020년 1월 1일은 수요일입니다. 2020년 a월 b일은 무슨 요일일까요? 두 수 a, b를 입력받아 2020년 a월 b일이 무슨 요일인지 리턴하는 함수 solution을 완성하세요. 요일의 이름은 일요일부터 토요일까지 각각 SUN, MON, TUE, WED, THU, FRI, SAT 입니다.

// 예를 들어 a = 5, b = 24라면 5월 24일은 일요일이므로 문자열 "SUN"를 반환하세요.

// 제한 조건
// 2020년은 윤년입니다.
// 2020년 a월 b일은 실제로 있는 날입니다.
// (13월 26일이나 2월 45일 같은 날짜는 주어지지 않습니다.)

// 답
function solution(a, b) {
    const 요일 = ["WED", "THU", "FRI", "SAT", "SUN", "MON", "TUE"];
    const 월별일수 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    let 요일총합 = 0;
    for (i = 1; i < a; i++) {
        요일총합 += 월별일수[i - 1];
    }

    console.log(요일[(요일총합 + b - 1) % 7]);
}

/* 문제 43 : 10진수를 2진수로 */
// 우리가 흔히 사용하는 숫자 1, 8, 19, 28893 등등...은 10진수 체계입니다. 이를 컴퓨터가 알아 들을 수 있는 2진수로 바꾸려고 합니다. 어떻게 해야할까요?

// 사용자에게 숫자를 입력받고 이를 2진수를 바꾸고 그 값을 출력해주세요.

// 답
let input43 = +prompt("숫자");

console.log(input43.toString(2));

/* 문제 44 : 각 자리수의 합 */
// 사용자가 입력한 양의 정수의 각 자리수의 합을 구하는 프로그램을 만들어주세요

// 예를 들어
// 18234 = 1+8+2+3+4 이고 정답은 18 입니다.
// 3849 = 3+8+4+9 이고 정답은 24입니다.

// 입출력

// 입력 : 18234
// 출력 : 18

// 입력 : 3849
// 출력 : 24

// 답
let input44 = +prompt("양의 정수");
let answer44 = 0;

for (i = 1; input44 > 0; i++) {
    answer44 += input44 % 10;
    input44 = parseInt(input44 / 10);
}

console.log(answer44);

/* 문제 45 : getTime() 함수 사용하기 */
// Date객체의 메소드 중 하나인 getTime()은 1970년 1월 1일 0시 0분 0초 이후로부터 지금까지 흐른 시간을 천분의 1초 단위(ms)로 반환합니다.

// 이를 이용하여 현재 연도(2019)를 출력해보세요.

let date = new Date();

console.log(Math.floor(date.getTime() / (1000 * 60 * 60 * 24 * 365)) + 1970);
